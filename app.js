const state = JSON.parse(localStorage.getItem("project195") || "{}");
if(!state.logs) state.logs = {};
if(!state.completed) state.completed = {};
if(!state.startWeight) state.startWeight = 215;
if(!state.goalWeight) state.goalWeight = 195;

const todayIndex = Math.min(41, Object.keys(state.completed).length);
let selected = todayIndex;

const $ = id => document.getElementById(id);
function save(){ localStorage.setItem("project195", JSON.stringify(state)); }

function latestWeight(){
  const logs = Object.values(state.logs).filter(x => x.weight).sort((a,b)=>a.day-b.day);
  return logs.length ? Number(logs[logs.length-1].weight) : state.startWeight;
}
function streak(){
  let s=0;
  for(let i=WORKOUTS.length;i>=1;i--){
    if(state.completed[i]) s++;
    else if(s>0) break;
  }
  return s;
}
function renderStats(){
  const cw = latestWeight();
  $("currentWeight").textContent = cw.toFixed(1).replace(".0","");
  const pct = Math.max(0, Math.min(100, ((state.startWeight-cw)/(state.startWeight-state.goalWeight))*100));
  $("weightProgress").style.width = pct + "%";
  $("progressText").textContent = Math.round(pct) + "% to goal";
  $("completedDays").textContent = Object.keys(state.completed).length;
  $("streak").textContent = streak();
  const log = state.logs[selected+1] || {};
  $("proteinToday").textContent = log.protein || 0;
  $("waterToday").textContent = log.water || 0;
}
function stars(n){ return "★".repeat(n) + "☆".repeat(5-n); }
function renderWorkout(){
  const w = WORKOUTS[selected];
  $("weekFocus").textContent = "Week " + w.week + " • " + w.focus;
  $("workoutTitle").textContent = "Day " + w.day + " — " + w.title;
  $("workoutGoal").textContent = w.goal;
  $("duration").textContent = w.duration;
  $("weekday").textContent = w.weekday;
  $("difficulty").textContent = stars(w.difficulty);
  $("badge").textContent = w.badge;
  $("backNote").textContent = w.backNote;
  $("warmup").innerHTML = w.warmup.map(x=>`<li>${x}</li>`).join("");
  $("mainWorkout").innerHTML = w.main.map(x=>`<li>${x}</li>`).join("");
  $("mobility").innerHTML = w.mobility.map(x=>`<li>${x}</li>`).join("");
  $("completeBtn").textContent = state.completed[w.day] ? "Completed ✓" : "Mark Today Complete";
  const log = state.logs[w.day] || {};
  $("weightInput").value = log.weight || "";
  $("proteinInput").value = log.protein || "";
  $("waterInput").value = log.water || "";
  renderCalendar();
  renderStats();
}
function renderCalendar(){
  $("calendar").innerHTML = WORKOUTS.map((w,i)=>{
    const cls = `dayDot ${state.completed[w.day]?'done':''} ${i===selected?'active':''}`;
    return `<button class="${cls}" onclick="selectDay(${i})">${w.day}</button>`
  }).join("");
}
window.selectDay = i => { selected = i; renderWorkout(); scrollTo({top:0,behavior:"smooth"}); };

$("completeBtn").onclick = () => {
  const day = WORKOUTS[selected].day;
  state.completed[day] = !state.completed[day];
  save(); renderWorkout();
};
$("saveBtn").onclick = () => {
  const day = WORKOUTS[selected].day;
  state.logs[day] = {
    day,
    weight: $("weightInput").value,
    protein: $("proteinInput").value,
    water: $("waterInput").value
  };
  save(); renderWorkout();
};
$("resetBtn").onclick = () => {
  if(confirm("Reset all Project 195 progress?")){
    localStorage.removeItem("project195"); location.reload();
  }
};
if("serviceWorker" in navigator){ navigator.serviceWorker.register("service-worker.js"); }
renderWorkout();