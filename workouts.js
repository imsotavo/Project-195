const WORKOUTS = [
  {
    "day": 1,
    "week": 1,
    "weekday": "Monday",
    "title": "Strength Engine",
    "focus": "Foundation + clean movement",
    "duration": "15-20 min",
    "difficulty": 2,
    "goal": "Build full-body strength while keeping your back protected.",
    "warmup": [
      "30 sec easy jump rope",
      "6 cat-cows",
      "6 hip hinges",
      "6 bodyweight squats",
      "4/side bird dogs"
    ],
    "main": [
      "3 rounds \u2014 8 goblet squats with 35 lb KB",
      "10 two-hand swings with 53 lb KB",
      "6/side single-arm floor press with 35 lb KB",
      "8/side suitcase rows with 35 or 53 lb KB",
      "30 sec front plank or elevated plank"
    ],
    "mobility": [
      "90/90 hip switch - 45 sec",
      "Half-kneeling hip flexor stretch - 45 sec/side",
      "Dead bug - 6/side"
    ],
    "backNote": "Keep ribs down, brace before every hinge, and stop if pain travels down the leg.",
    "badge": "Foundation"
  },
  {
    "day": 2,
    "week": 1,
    "weekday": "Tuesday",
    "title": "Mountain Zone 2",
    "focus": "Foundation + clean movement",
    "duration": "25-40 min",
    "difficulty": 2,
    "goal": "Incline walking for fat loss, endurance, and mental reset.",
    "warmup": [
      "3 min easy walk",
      "8 leg swings/side",
      "30 sec hip flexor stretch/side",
      "6 glute bridges"
    ],
    "main": [
      "1.5 mile uphill mountain walk \u2014 no vest",
      "Keep pace conversational; nasal breathing if possible",
      "Last 3 minutes: slightly faster but controlled",
      "Log time and perceived effort",
      "Finish with hip mobility"
    ],
    "mobility": [
      "Child's pose breathing - 60 sec",
      "Bird dog - 6/side",
      "Hamstring floss - 8/side"
    ],
    "backNote": "Keep ribs down, brace before every hinge, and stop if pain travels down the leg.",
    "badge": "Climber"
  },
  {
    "day": 3,
    "week": 1,
    "weekday": "Wednesday",
    "title": "Pull + Push Builder",
    "focus": "Foundation + clean movement",
    "duration": "15-20 min",
    "difficulty": 2,
    "goal": "Upper-body strength, core stability, and conditioning.",
    "warmup": [
      "30 sec assault bike easy",
      "6 scap pull-ups",
      "8 incline push-ups",
      "4/side dead bugs"
    ],
    "main": [
      "Accumulate 15 strict pull-ups total; use singles/doubles as needed",
      "Accumulate 48 quality push-ups total",
      "Assault bike: 8 rounds of 20 sec hard / 40 sec easy",
      "Dead bug: 8/side",
      "Suitcase carry: 30 sec/side with 53 lb KB"
    ],
    "mobility": [
      "Couch stretch - 45 sec/side",
      "Side plank - 20 sec/side",
      "Glute bridge hold - 30 sec"
    ],
    "backNote": "Keep ribs down, brace before every hinge, and stop if pain travels down the leg.",
    "badge": "Pull Builder"
  },
  {
    "day": 4,
    "week": 1,
    "weekday": "Thursday",
    "title": "Kettlebell Athletic",
    "focus": "Foundation + clean movement",
    "duration": "15-20 min",
    "difficulty": 2,
    "goal": "Explosive but controlled kettlebell work.",
    "warmup": [
      "30 sec rope",
      "8 halos with 26 lb KB",
      "6 hip hinges",
      "6 reverse lunges total"
    ],
    "main": [
      "EMOM 15",
      "Minute 1: 12 KB swings with 53 lb",
      "Minute 2: 6/side clean + press with 26 or 35 lb",
      "Minute 3: 10 reverse lunges total, bodyweight or vest",
      "Minute 4: 45 sec assault bike steady"
    ],
    "mobility": [
      "Pigeon stretch or figure-4 - 45 sec/side",
      "McGill curl-up - 5 reps/side",
      "Box breathing - 60 sec"
    ],
    "backNote": "Keep ribs down, brace before every hinge, and stop if pain travels down the leg.",
    "badge": "KB Athlete"
  },
  {
    "day": 5,
    "week": 1,
    "weekday": "Friday",
    "title": "Vest + Core",
    "focus": "Foundation + clean movement",
    "duration": "15-20 min",
    "difficulty": 2,
    "goal": "Low-impact conditioning with back-friendly core work.",
    "warmup": [
      "3 min easy walk",
      "6 glute bridges",
      "6 bird dogs/side",
      "30 sec 90/90 breathing"
    ],
    "main": [
      "20 min brisk incline walk or neighborhood walk with vest",
      "Every 5 minutes: stop and complete 6 slow step-ups/side if available",
      "Bird dog: 8/side",
      "Side plank: 20-35 sec/side",
      "Glute bridge: 12 reps"
    ],
    "mobility": [
      "90/90 hip switch - 45 sec",
      "Half-kneeling hip flexor stretch - 45 sec/side",
      "Dead bug - 6/side"
    ],
    "backNote": "Keep ribs down, brace before every hinge, and stop if pain travels down the leg.",
    "badge": "Core Guard"
  },
  {
    "day": 6,
    "week": 1,
    "weekday": "Saturday",
    "title": "Conditioning Mix",
    "focus": "Foundation + clean movement",
    "duration": "15-20 min",
    "difficulty": 2,
    "goal": "Sweat session using ropes, bike, and kettlebells.",
    "warmup": [
      "30 sec easy bike",
      "30 sec easy rope",
      "6 bodyweight squats",
      "6 arm circles each way"
    ],
    "main": [
      "4 rounds, move smooth not sloppy",
      "45 sec weighted jump rope",
      "12 KB swings with 35 or 53 lb",
      "8 push-ups",
      "8/side KB rows",
      "45 sec assault bike"
    ],
    "mobility": [
      "Child's pose breathing - 60 sec",
      "Bird dog - 6/side",
      "Hamstring floss - 8/side"
    ],
    "backNote": "Keep ribs down, brace before every hinge, and stop if pain travels down the leg.",
    "badge": "Engine"
  },
  {
    "day": 7,
    "week": 1,
    "weekday": "Sunday",
    "title": "Recovery / Optional Walk",
    "focus": "Foundation + clean movement",
    "duration": "10-30 min optional",
    "difficulty": 1,
    "goal": "Recover, reduce soreness, and prepare for the next week.",
    "warmup": [
      "Easy walk 5 min"
    ],
    "main": [
      "Optional easy walk",
      "10 min hip mobility",
      "No intense training today",
      "Take progress photos if this is the end of the week"
    ],
    "mobility": [
      "Couch stretch - 45 sec/side",
      "Side plank - 20 sec/side",
      "Glute bridge hold - 30 sec"
    ],
    "backNote": "Recovery counts. Keep this easy.",
    "badge": "Recovery"
  },
  {
    "day": 8,
    "week": 2,
    "weekday": "Monday",
    "title": "Strength Engine v2",
    "focus": "Conditioning base",
    "duration": "15-20 min",
    "difficulty": 3,
    "goal": "Build full-body strength while keeping your back protected.",
    "warmup": [
      "30 sec easy jump rope",
      "6 cat-cows",
      "6 hip hinges",
      "6 bodyweight squats",
      "4/side bird dogs"
    ],
    "main": [
      "3 rounds \u2014 8 goblet squats with 35 lb KB",
      "10 two-hand swings with 53 lb KB",
      "6/side single-arm floor press with 35 lb KB",
      "8/side suitcase rows with 35 or 53 lb KB",
      "30 sec front plank or elevated plank"
    ],
    "mobility": [
      "Pigeon stretch or figure-4 - 45 sec/side",
      "McGill curl-up - 5 reps/side",
      "Box breathing - 60 sec"
    ],
    "backNote": "Keep ribs down, brace before every hinge, and stop if pain travels down the leg.",
    "badge": "Foundation"
  },
  {
    "day": 9,
    "week": 2,
    "weekday": "Tuesday",
    "title": "Mountain Zone 2 v2",
    "focus": "Conditioning base",
    "duration": "25-40 min",
    "difficulty": 3,
    "goal": "Incline walking for fat loss, endurance, and mental reset.",
    "warmup": [
      "3 min easy walk",
      "8 leg swings/side",
      "30 sec hip flexor stretch/side",
      "6 glute bridges"
    ],
    "main": [
      "1.5 mile uphill mountain walk \u2014 no vest",
      "Keep pace conversational; nasal breathing if possible",
      "Last 3 minutes: slightly faster but controlled",
      "Log time and perceived effort",
      "Finish with hip mobility"
    ],
    "mobility": [
      "90/90 hip switch - 45 sec",
      "Half-kneeling hip flexor stretch - 45 sec/side",
      "Dead bug - 6/side"
    ],
    "backNote": "Keep ribs down, brace before every hinge, and stop if pain travels down the leg.",
    "badge": "Climber"
  },
  {
    "day": 10,
    "week": 2,
    "weekday": "Wednesday",
    "title": "Pull + Push Builder v2",
    "focus": "Conditioning base",
    "duration": "15-20 min",
    "difficulty": 3,
    "goal": "Upper-body strength, core stability, and conditioning.",
    "warmup": [
      "30 sec assault bike easy",
      "6 scap pull-ups",
      "8 incline push-ups",
      "4/side dead bugs"
    ],
    "main": [
      "Accumulate 18 strict pull-ups total; use singles/doubles as needed",
      "Accumulate 56 quality push-ups total",
      "Assault bike: 8 rounds of 20 sec hard / 40 sec easy",
      "Dead bug: 8/side",
      "Suitcase carry: 30 sec/side with 53 lb KB"
    ],
    "mobility": [
      "Child's pose breathing - 60 sec",
      "Bird dog - 6/side",
      "Hamstring floss - 8/side"
    ],
    "backNote": "Keep ribs down, brace before every hinge, and stop if pain travels down the leg.",
    "badge": "Pull Builder"
  },
  {
    "day": 11,
    "week": 2,
    "weekday": "Thursday",
    "title": "Kettlebell Athletic v2",
    "focus": "Conditioning base",
    "duration": "15-20 min",
    "difficulty": 3,
    "goal": "Explosive but controlled kettlebell work.",
    "warmup": [
      "30 sec rope",
      "8 halos with 26 lb KB",
      "6 hip hinges",
      "6 reverse lunges total"
    ],
    "main": [
      "EMOM 16",
      "Minute 1: 12 KB swings with 53 lb",
      "Minute 2: 6/side clean + press with 26 or 35 lb",
      "Minute 3: 10 reverse lunges total, bodyweight or vest",
      "Minute 4: 45 sec assault bike steady"
    ],
    "mobility": [
      "Couch stretch - 45 sec/side",
      "Side plank - 20 sec/side",
      "Glute bridge hold - 30 sec"
    ],
    "backNote": "Keep ribs down, brace before every hinge, and stop if pain travels down the leg.",
    "badge": "KB Athlete"
  },
  {
    "day": 12,
    "week": 2,
    "weekday": "Friday",
    "title": "Vest + Core v2",
    "focus": "Conditioning base",
    "duration": "15-20 min",
    "difficulty": 3,
    "goal": "Low-impact conditioning with back-friendly core work.",
    "warmup": [
      "3 min easy walk",
      "6 glute bridges",
      "6 bird dogs/side",
      "30 sec 90/90 breathing"
    ],
    "main": [
      "20 min brisk incline walk or neighborhood walk with vest",
      "Every 5 minutes: stop and complete 6 slow step-ups/side if available",
      "Bird dog: 8/side",
      "Side plank: 20-35 sec/side",
      "Glute bridge: 12 reps"
    ],
    "mobility": [
      "Pigeon stretch or figure-4 - 45 sec/side",
      "McGill curl-up - 5 reps/side",
      "Box breathing - 60 sec"
    ],
    "backNote": "Keep ribs down, brace before every hinge, and stop if pain travels down the leg.",
    "badge": "Core Guard"
  },
  {
    "day": 13,
    "week": 2,
    "weekday": "Saturday",
    "title": "Conditioning Mix v2",
    "focus": "Conditioning base",
    "duration": "15-20 min",
    "difficulty": 3,
    "goal": "Sweat session using ropes, bike, and kettlebells.",
    "warmup": [
      "30 sec easy bike",
      "30 sec easy rope",
      "6 bodyweight squats",
      "6 arm circles each way"
    ],
    "main": [
      "4 rounds, move smooth not sloppy",
      "45 sec weighted jump rope",
      "12 KB swings with 35 or 53 lb",
      "8 push-ups",
      "8/side KB rows",
      "45 sec assault bike"
    ],
    "mobility": [
      "90/90 hip switch - 45 sec",
      "Half-kneeling hip flexor stretch - 45 sec/side",
      "Dead bug - 6/side"
    ],
    "backNote": "Keep ribs down, brace before every hinge, and stop if pain travels down the leg.",
    "badge": "Engine"
  },
  {
    "day": 14,
    "week": 2,
    "weekday": "Sunday",
    "title": "Recovery / Optional Walk",
    "focus": "Conditioning base",
    "duration": "10-30 min optional",
    "difficulty": 1,
    "goal": "Recover, reduce soreness, and prepare for the next week.",
    "warmup": [
      "Easy walk 5 min"
    ],
    "main": [
      "Optional easy walk",
      "10 min hip mobility",
      "No intense training today",
      "Take progress photos if this is the end of the week"
    ],
    "mobility": [
      "Child's pose breathing - 60 sec",
      "Bird dog - 6/side",
      "Hamstring floss - 8/side"
    ],
    "backNote": "Recovery counts. Keep this easy.",
    "badge": "Recovery"
  },
  {
    "day": 15,
    "week": 3,
    "weekday": "Monday",
    "title": "Strength Engine v3",
    "focus": "Athletic power",
    "duration": "15-20 min",
    "difficulty": 3,
    "goal": "Build full-body strength while keeping your back protected.",
    "warmup": [
      "30 sec easy jump rope",
      "6 cat-cows",
      "6 hip hinges",
      "6 bodyweight squats",
      "4/side bird dogs"
    ],
    "main": [
      "4 rounds \u2014 8 goblet squats with 35 lb KB",
      "10 two-hand swings with 53 lb KB",
      "6/side single-arm floor press with 35 lb KB",
      "8/side suitcase rows with 35 or 53 lb KB",
      "30 sec front plank or elevated plank"
    ],
    "mobility": [
      "Couch stretch - 45 sec/side",
      "Side plank - 20 sec/side",
      "Glute bridge hold - 30 sec"
    ],
    "backNote": "Keep ribs down, brace before every hinge, and stop if pain travels down the leg.",
    "badge": "Foundation"
  },
  {
    "day": 16,
    "week": 3,
    "weekday": "Tuesday",
    "title": "Mountain Zone 2 v3",
    "focus": "Athletic power",
    "duration": "25-40 min",
    "difficulty": 3,
    "goal": "Incline walking for fat loss, endurance, and mental reset.",
    "warmup": [
      "3 min easy walk",
      "8 leg swings/side",
      "30 sec hip flexor stretch/side",
      "6 glute bridges"
    ],
    "main": [
      "1.5 mile uphill mountain walk \u2014 25 lb vest optional",
      "Keep pace conversational; nasal breathing if possible",
      "Last 3 minutes: slightly faster but controlled",
      "Log time and perceived effort",
      "Finish with hip mobility"
    ],
    "mobility": [
      "Pigeon stretch or figure-4 - 45 sec/side",
      "McGill curl-up - 5 reps/side",
      "Box breathing - 60 sec"
    ],
    "backNote": "Keep ribs down, brace before every hinge, and stop if pain travels down the leg.",
    "badge": "Climber"
  },
  {
    "day": 17,
    "week": 3,
    "weekday": "Wednesday",
    "title": "Pull + Push Builder v3",
    "focus": "Athletic power",
    "duration": "15-20 min",
    "difficulty": 3,
    "goal": "Upper-body strength, core stability, and conditioning.",
    "warmup": [
      "30 sec assault bike easy",
      "6 scap pull-ups",
      "8 incline push-ups",
      "4/side dead bugs"
    ],
    "main": [
      "Accumulate 21 strict pull-ups total; use singles/doubles as needed",
      "Accumulate 64 quality push-ups total",
      "Assault bike: 8 rounds of 20 sec hard / 40 sec easy",
      "Dead bug: 8/side",
      "Suitcase carry: 30 sec/side with 53 lb KB"
    ],
    "mobility": [
      "90/90 hip switch - 45 sec",
      "Half-kneeling hip flexor stretch - 45 sec/side",
      "Dead bug - 6/side"
    ],
    "backNote": "Keep ribs down, brace before every hinge, and stop if pain travels down the leg.",
    "badge": "Pull Builder"
  },
  {
    "day": 18,
    "week": 3,
    "weekday": "Thursday",
    "title": "Kettlebell Athletic v3",
    "focus": "Athletic power",
    "duration": "15-20 min",
    "difficulty": 3,
    "goal": "Explosive but controlled kettlebell work.",
    "warmup": [
      "30 sec rope",
      "8 halos with 26 lb KB",
      "6 hip hinges",
      "6 reverse lunges total"
    ],
    "main": [
      "EMOM 17",
      "Minute 1: 12 KB swings with 53 lb",
      "Minute 2: 6/side clean + press with 26 or 35 lb",
      "Minute 3: 10 reverse lunges total, bodyweight or vest",
      "Minute 4: 45 sec assault bike steady"
    ],
    "mobility": [
      "Child's pose breathing - 60 sec",
      "Bird dog - 6/side",
      "Hamstring floss - 8/side"
    ],
    "backNote": "Keep ribs down, brace before every hinge, and stop if pain travels down the leg.",
    "badge": "KB Athlete"
  },
  {
    "day": 19,
    "week": 3,
    "weekday": "Friday",
    "title": "Vest + Core v3",
    "focus": "Athletic power",
    "duration": "15-20 min",
    "difficulty": 3,
    "goal": "Low-impact conditioning with back-friendly core work.",
    "warmup": [
      "3 min easy walk",
      "6 glute bridges",
      "6 bird dogs/side",
      "30 sec 90/90 breathing"
    ],
    "main": [
      "20 min brisk incline walk or neighborhood walk with vest",
      "Every 5 minutes: stop and complete 6 slow step-ups/side if available",
      "Bird dog: 8/side",
      "Side plank: 20-35 sec/side",
      "Glute bridge: 12 reps"
    ],
    "mobility": [
      "Couch stretch - 45 sec/side",
      "Side plank - 20 sec/side",
      "Glute bridge hold - 30 sec"
    ],
    "backNote": "Keep ribs down, brace before every hinge, and stop if pain travels down the leg.",
    "badge": "Core Guard"
  },
  {
    "day": 20,
    "week": 3,
    "weekday": "Saturday",
    "title": "Conditioning Mix v3",
    "focus": "Athletic power",
    "duration": "15-20 min",
    "difficulty": 3,
    "goal": "Sweat session using ropes, bike, and kettlebells.",
    "warmup": [
      "30 sec easy bike",
      "30 sec easy rope",
      "6 bodyweight squats",
      "6 arm circles each way"
    ],
    "main": [
      "4 rounds, move smooth not sloppy",
      "45 sec weighted jump rope",
      "12 KB swings with 35 or 53 lb",
      "8 push-ups",
      "8/side KB rows",
      "45 sec assault bike"
    ],
    "mobility": [
      "Pigeon stretch or figure-4 - 45 sec/side",
      "McGill curl-up - 5 reps/side",
      "Box breathing - 60 sec"
    ],
    "backNote": "Keep ribs down, brace before every hinge, and stop if pain travels down the leg.",
    "badge": "Engine"
  },
  {
    "day": 21,
    "week": 3,
    "weekday": "Sunday",
    "title": "Recovery / Optional Walk",
    "focus": "Athletic power",
    "duration": "10-30 min optional",
    "difficulty": 1,
    "goal": "Recover, reduce soreness, and prepare for the next week.",
    "warmup": [
      "Easy walk 5 min"
    ],
    "main": [
      "Optional easy walk",
      "10 min hip mobility",
      "No intense training today",
      "Take progress photos if this is the end of the week"
    ],
    "mobility": [
      "90/90 hip switch - 45 sec",
      "Half-kneeling hip flexor stretch - 45 sec/side",
      "Dead bug - 6/side"
    ],
    "backNote": "Recovery counts. Keep this easy.",
    "badge": "Recovery"
  },
  {
    "day": 22,
    "week": 4,
    "weekday": "Monday",
    "title": "Strength Engine v4",
    "focus": "Volume build",
    "duration": "15-20 min",
    "difficulty": 4,
    "goal": "Build full-body strength while keeping your back protected.",
    "warmup": [
      "30 sec easy jump rope",
      "6 cat-cows",
      "6 hip hinges",
      "6 bodyweight squats",
      "4/side bird dogs"
    ],
    "main": [
      "4 rounds \u2014 8 goblet squats with 35 lb KB",
      "10 two-hand swings with 53 lb KB",
      "6/side single-arm floor press with 35 lb KB",
      "8/side suitcase rows with 35 or 53 lb KB",
      "30 sec front plank or elevated plank"
    ],
    "mobility": [
      "Child's pose breathing - 60 sec",
      "Bird dog - 6/side",
      "Hamstring floss - 8/side"
    ],
    "backNote": "Keep ribs down, brace before every hinge, and stop if pain travels down the leg.",
    "badge": "Foundation"
  },
  {
    "day": 23,
    "week": 4,
    "weekday": "Tuesday",
    "title": "Mountain Zone 2 v4",
    "focus": "Volume build",
    "duration": "25-40 min",
    "difficulty": 4,
    "goal": "Incline walking for fat loss, endurance, and mental reset.",
    "warmup": [
      "3 min easy walk",
      "8 leg swings/side",
      "30 sec hip flexor stretch/side",
      "6 glute bridges"
    ],
    "main": [
      "1.5 mile uphill mountain walk \u2014 25 lb vest optional",
      "Keep pace conversational; nasal breathing if possible",
      "Last 3 minutes: slightly faster but controlled",
      "Log time and perceived effort",
      "Finish with hip mobility"
    ],
    "mobility": [
      "Couch stretch - 45 sec/side",
      "Side plank - 20 sec/side",
      "Glute bridge hold - 30 sec"
    ],
    "backNote": "Keep ribs down, brace before every hinge, and stop if pain travels down the leg.",
    "badge": "Climber"
  },
  {
    "day": 24,
    "week": 4,
    "weekday": "Wednesday",
    "title": "Pull + Push Builder v4",
    "focus": "Volume build",
    "duration": "15-20 min",
    "difficulty": 4,
    "goal": "Upper-body strength, core stability, and conditioning.",
    "warmup": [
      "30 sec assault bike easy",
      "6 scap pull-ups",
      "8 incline push-ups",
      "4/side dead bugs"
    ],
    "main": [
      "Accumulate 24 strict pull-ups total; use singles/doubles as needed",
      "Accumulate 72 quality push-ups total",
      "Assault bike: 8 rounds of 20 sec hard / 40 sec easy",
      "Dead bug: 8/side",
      "Suitcase carry: 30 sec/side with 53 lb KB"
    ],
    "mobility": [
      "Pigeon stretch or figure-4 - 45 sec/side",
      "McGill curl-up - 5 reps/side",
      "Box breathing - 60 sec"
    ],
    "backNote": "Keep ribs down, brace before every hinge, and stop if pain travels down the leg.",
    "badge": "Pull Builder"
  },
  {
    "day": 25,
    "week": 4,
    "weekday": "Thursday",
    "title": "Kettlebell Athletic v4",
    "focus": "Volume build",
    "duration": "15-20 min",
    "difficulty": 4,
    "goal": "Explosive but controlled kettlebell work.",
    "warmup": [
      "30 sec rope",
      "8 halos with 26 lb KB",
      "6 hip hinges",
      "6 reverse lunges total"
    ],
    "main": [
      "EMOM 18",
      "Minute 1: 12 KB swings with 53 lb",
      "Minute 2: 6/side clean + press with 26 or 35 lb",
      "Minute 3: 10 reverse lunges total, bodyweight or vest",
      "Minute 4: 45 sec assault bike steady"
    ],
    "mobility": [
      "90/90 hip switch - 45 sec",
      "Half-kneeling hip flexor stretch - 45 sec/side",
      "Dead bug - 6/side"
    ],
    "backNote": "Keep ribs down, brace before every hinge, and stop if pain travels down the leg.",
    "badge": "KB Athlete"
  },
  {
    "day": 26,
    "week": 4,
    "weekday": "Friday",
    "title": "Vest + Core v4",
    "focus": "Volume build",
    "duration": "15-20 min",
    "difficulty": 4,
    "goal": "Low-impact conditioning with back-friendly core work.",
    "warmup": [
      "3 min easy walk",
      "6 glute bridges",
      "6 bird dogs/side",
      "30 sec 90/90 breathing"
    ],
    "main": [
      "20 min brisk incline walk or neighborhood walk with vest",
      "Every 5 minutes: stop and complete 6 slow step-ups/side if available",
      "Bird dog: 8/side",
      "Side plank: 20-35 sec/side",
      "Glute bridge: 12 reps"
    ],
    "mobility": [
      "Child's pose breathing - 60 sec",
      "Bird dog - 6/side",
      "Hamstring floss - 8/side"
    ],
    "backNote": "Keep ribs down, brace before every hinge, and stop if pain travels down the leg.",
    "badge": "Core Guard"
  },
  {
    "day": 27,
    "week": 4,
    "weekday": "Saturday",
    "title": "Conditioning Mix v4",
    "focus": "Volume build",
    "duration": "15-20 min",
    "difficulty": 4,
    "goal": "Sweat session using ropes, bike, and kettlebells.",
    "warmup": [
      "30 sec easy bike",
      "30 sec easy rope",
      "6 bodyweight squats",
      "6 arm circles each way"
    ],
    "main": [
      "5 rounds, move smooth not sloppy",
      "45 sec weighted jump rope",
      "12 KB swings with 35 or 53 lb",
      "8 push-ups",
      "8/side KB rows",
      "45 sec assault bike"
    ],
    "mobility": [
      "Couch stretch - 45 sec/side",
      "Side plank - 20 sec/side",
      "Glute bridge hold - 30 sec"
    ],
    "backNote": "Keep ribs down, brace before every hinge, and stop if pain travels down the leg.",
    "badge": "Engine"
  },
  {
    "day": 28,
    "week": 4,
    "weekday": "Sunday",
    "title": "Recovery / Optional Walk",
    "focus": "Volume build",
    "duration": "10-30 min optional",
    "difficulty": 1,
    "goal": "Recover, reduce soreness, and prepare for the next week.",
    "warmup": [
      "Easy walk 5 min"
    ],
    "main": [
      "Optional easy walk",
      "10 min hip mobility",
      "No intense training today",
      "Take progress photos if this is the end of the week"
    ],
    "mobility": [
      "Pigeon stretch or figure-4 - 45 sec/side",
      "McGill curl-up - 5 reps/side",
      "Box breathing - 60 sec"
    ],
    "backNote": "Recovery counts. Keep this easy.",
    "badge": "Recovery"
  },
  {
    "day": 29,
    "week": 5,
    "weekday": "Monday",
    "title": "Strength Engine v5",
    "focus": "Intensity",
    "duration": "15-20 min",
    "difficulty": 4,
    "goal": "Build full-body strength while keeping your back protected.",
    "warmup": [
      "30 sec easy jump rope",
      "6 cat-cows",
      "6 hip hinges",
      "6 bodyweight squats",
      "4/side bird dogs"
    ],
    "main": [
      "5 rounds \u2014 8 goblet squats with 35 lb KB",
      "10 two-hand swings with 53 lb KB",
      "6/side single-arm floor press with 35 lb KB",
      "8/side suitcase rows with 35 or 53 lb KB",
      "30 sec front plank or elevated plank"
    ],
    "mobility": [
      "90/90 hip switch - 45 sec",
      "Half-kneeling hip flexor stretch - 45 sec/side",
      "Dead bug - 6/side"
    ],
    "backNote": "Keep ribs down, brace before every hinge, and stop if pain travels down the leg.",
    "badge": "Foundation"
  },
  {
    "day": 30,
    "week": 5,
    "weekday": "Tuesday",
    "title": "Mountain Zone 2 v5",
    "focus": "Intensity",
    "duration": "25-40 min",
    "difficulty": 4,
    "goal": "Incline walking for fat loss, endurance, and mental reset.",
    "warmup": [
      "3 min easy walk",
      "8 leg swings/side",
      "30 sec hip flexor stretch/side",
      "6 glute bridges"
    ],
    "main": [
      "1.5 mile uphill mountain walk \u2014 25 lb vest optional",
      "Keep pace conversational; nasal breathing if possible",
      "Last 3 minutes: slightly faster but controlled",
      "Log time and perceived effort",
      "Finish with hip mobility"
    ],
    "mobility": [
      "Child's pose breathing - 60 sec",
      "Bird dog - 6/side",
      "Hamstring floss - 8/side"
    ],
    "backNote": "Keep ribs down, brace before every hinge, and stop if pain travels down the leg.",
    "badge": "Climber"
  },
  {
    "day": 31,
    "week": 5,
    "weekday": "Wednesday",
    "title": "Pull + Push Builder v5",
    "focus": "Intensity",
    "duration": "15-20 min",
    "difficulty": 4,
    "goal": "Upper-body strength, core stability, and conditioning.",
    "warmup": [
      "30 sec assault bike easy",
      "6 scap pull-ups",
      "8 incline push-ups",
      "4/side dead bugs"
    ],
    "main": [
      "Accumulate 27 strict pull-ups total; use singles/doubles as needed",
      "Accumulate 80 quality push-ups total",
      "Assault bike: 8 rounds of 20 sec hard / 40 sec easy",
      "Dead bug: 8/side",
      "Suitcase carry: 30 sec/side with 53 lb KB"
    ],
    "mobility": [
      "Couch stretch - 45 sec/side",
      "Side plank - 20 sec/side",
      "Glute bridge hold - 30 sec"
    ],
    "backNote": "Keep ribs down, brace before every hinge, and stop if pain travels down the leg.",
    "badge": "Pull Builder"
  },
  {
    "day": 32,
    "week": 5,
    "weekday": "Thursday",
    "title": "Kettlebell Athletic v5",
    "focus": "Intensity",
    "duration": "15-20 min",
    "difficulty": 4,
    "goal": "Explosive but controlled kettlebell work.",
    "warmup": [
      "30 sec rope",
      "8 halos with 26 lb KB",
      "6 hip hinges",
      "6 reverse lunges total"
    ],
    "main": [
      "EMOM 18",
      "Minute 1: 12 KB swings with 53 lb",
      "Minute 2: 6/side clean + press with 26 or 35 lb",
      "Minute 3: 10 reverse lunges total, bodyweight or vest",
      "Minute 4: 45 sec assault bike steady"
    ],
    "mobility": [
      "Pigeon stretch or figure-4 - 45 sec/side",
      "McGill curl-up - 5 reps/side",
      "Box breathing - 60 sec"
    ],
    "backNote": "Keep ribs down, brace before every hinge, and stop if pain travels down the leg.",
    "badge": "KB Athlete"
  },
  {
    "day": 33,
    "week": 5,
    "weekday": "Friday",
    "title": "Vest + Core v5",
    "focus": "Intensity",
    "duration": "15-20 min",
    "difficulty": 4,
    "goal": "Low-impact conditioning with back-friendly core work.",
    "warmup": [
      "3 min easy walk",
      "6 glute bridges",
      "6 bird dogs/side",
      "30 sec 90/90 breathing"
    ],
    "main": [
      "20 min brisk incline walk or neighborhood walk with vest",
      "Every 5 minutes: stop and complete 6 slow step-ups/side if available",
      "Bird dog: 8/side",
      "Side plank: 20-35 sec/side",
      "Glute bridge: 12 reps"
    ],
    "mobility": [
      "90/90 hip switch - 45 sec",
      "Half-kneeling hip flexor stretch - 45 sec/side",
      "Dead bug - 6/side"
    ],
    "backNote": "Keep ribs down, brace before every hinge, and stop if pain travels down the leg.",
    "badge": "Core Guard"
  },
  {
    "day": 34,
    "week": 5,
    "weekday": "Saturday",
    "title": "Conditioning Mix v5",
    "focus": "Intensity",
    "duration": "15-20 min",
    "difficulty": 4,
    "goal": "Sweat session using ropes, bike, and kettlebells.",
    "warmup": [
      "30 sec easy bike",
      "30 sec easy rope",
      "6 bodyweight squats",
      "6 arm circles each way"
    ],
    "main": [
      "5 rounds, move smooth not sloppy",
      "45 sec weighted jump rope",
      "12 KB swings with 35 or 53 lb",
      "8 push-ups",
      "8/side KB rows",
      "45 sec assault bike"
    ],
    "mobility": [
      "Child's pose breathing - 60 sec",
      "Bird dog - 6/side",
      "Hamstring floss - 8/side"
    ],
    "backNote": "Keep ribs down, brace before every hinge, and stop if pain travels down the leg.",
    "badge": "Engine"
  },
  {
    "day": 35,
    "week": 5,
    "weekday": "Sunday",
    "title": "Recovery / Optional Walk",
    "focus": "Intensity",
    "duration": "10-30 min optional",
    "difficulty": 1,
    "goal": "Recover, reduce soreness, and prepare for the next week.",
    "warmup": [
      "Easy walk 5 min"
    ],
    "main": [
      "Optional easy walk",
      "10 min hip mobility",
      "No intense training today",
      "Take progress photos if this is the end of the week"
    ],
    "mobility": [
      "Couch stretch - 45 sec/side",
      "Side plank - 20 sec/side",
      "Glute bridge hold - 30 sec"
    ],
    "backNote": "Recovery counts. Keep this easy.",
    "badge": "Recovery"
  },
  {
    "day": 36,
    "week": 6,
    "weekday": "Monday",
    "title": "Strength Engine v6",
    "focus": "Performance week",
    "duration": "15-20 min",
    "difficulty": 5,
    "goal": "Build full-body strength while keeping your back protected.",
    "warmup": [
      "30 sec easy jump rope",
      "6 cat-cows",
      "6 hip hinges",
      "6 bodyweight squats",
      "4/side bird dogs"
    ],
    "main": [
      "5 rounds \u2014 8 goblet squats with 35 lb KB",
      "10 two-hand swings with 53 lb KB",
      "6/side single-arm floor press with 35 lb KB",
      "8/side suitcase rows with 35 or 53 lb KB",
      "30 sec front plank or elevated plank"
    ],
    "mobility": [
      "Pigeon stretch or figure-4 - 45 sec/side",
      "McGill curl-up - 5 reps/side",
      "Box breathing - 60 sec"
    ],
    "backNote": "Keep ribs down, brace before every hinge, and stop if pain travels down the leg.",
    "badge": "Foundation"
  },
  {
    "day": 37,
    "week": 6,
    "weekday": "Tuesday",
    "title": "Mountain Zone 2 v6",
    "focus": "Performance week",
    "duration": "25-40 min",
    "difficulty": 5,
    "goal": "Incline walking for fat loss, endurance, and mental reset.",
    "warmup": [
      "3 min easy walk",
      "8 leg swings/side",
      "30 sec hip flexor stretch/side",
      "6 glute bridges"
    ],
    "main": [
      "1.5 mile uphill mountain walk \u2014 25 lb vest optional",
      "Keep pace conversational; nasal breathing if possible",
      "Last 3 minutes: slightly faster but controlled",
      "Log time and perceived effort",
      "Finish with hip mobility"
    ],
    "mobility": [
      "90/90 hip switch - 45 sec",
      "Half-kneeling hip flexor stretch - 45 sec/side",
      "Dead bug - 6/side"
    ],
    "backNote": "Keep ribs down, brace before every hinge, and stop if pain travels down the leg.",
    "badge": "Climber"
  },
  {
    "day": 38,
    "week": 6,
    "weekday": "Wednesday",
    "title": "Pull + Push Builder v6",
    "focus": "Performance week",
    "duration": "15-20 min",
    "difficulty": 5,
    "goal": "Upper-body strength, core stability, and conditioning.",
    "warmup": [
      "30 sec assault bike easy",
      "6 scap pull-ups",
      "8 incline push-ups",
      "4/side dead bugs"
    ],
    "main": [
      "Accumulate 30 strict pull-ups total; use singles/doubles as needed",
      "Accumulate 88 quality push-ups total",
      "Assault bike: 8 rounds of 20 sec hard / 40 sec easy",
      "Dead bug: 8/side",
      "Suitcase carry: 30 sec/side with 53 lb KB"
    ],
    "mobility": [
      "Child's pose breathing - 60 sec",
      "Bird dog - 6/side",
      "Hamstring floss - 8/side"
    ],
    "backNote": "Keep ribs down, brace before every hinge, and stop if pain travels down the leg.",
    "badge": "Pull Builder"
  },
  {
    "day": 39,
    "week": 6,
    "weekday": "Thursday",
    "title": "Kettlebell Athletic v6",
    "focus": "Performance week",
    "duration": "15-20 min",
    "difficulty": 5,
    "goal": "Explosive but controlled kettlebell work.",
    "warmup": [
      "30 sec rope",
      "8 halos with 26 lb KB",
      "6 hip hinges",
      "6 reverse lunges total"
    ],
    "main": [
      "EMOM 18",
      "Minute 1: 12 KB swings with 53 lb",
      "Minute 2: 6/side clean + press with 26 or 35 lb",
      "Minute 3: 10 reverse lunges total, bodyweight or vest",
      "Minute 4: 45 sec assault bike steady"
    ],
    "mobility": [
      "Couch stretch - 45 sec/side",
      "Side plank - 20 sec/side",
      "Glute bridge hold - 30 sec"
    ],
    "backNote": "Keep ribs down, brace before every hinge, and stop if pain travels down the leg.",
    "badge": "KB Athlete"
  },
  {
    "day": 40,
    "week": 6,
    "weekday": "Friday",
    "title": "Vest + Core v6",
    "focus": "Performance week",
    "duration": "15-20 min",
    "difficulty": 5,
    "goal": "Low-impact conditioning with back-friendly core work.",
    "warmup": [
      "3 min easy walk",
      "6 glute bridges",
      "6 bird dogs/side",
      "30 sec 90/90 breathing"
    ],
    "main": [
      "20 min brisk incline walk or neighborhood walk with vest",
      "Every 5 minutes: stop and complete 6 slow step-ups/side if available",
      "Bird dog: 8/side",
      "Side plank: 20-35 sec/side",
      "Glute bridge: 12 reps"
    ],
    "mobility": [
      "Pigeon stretch or figure-4 - 45 sec/side",
      "McGill curl-up - 5 reps/side",
      "Box breathing - 60 sec"
    ],
    "backNote": "Keep ribs down, brace before every hinge, and stop if pain travels down the leg.",
    "badge": "Core Guard"
  },
  {
    "day": 41,
    "week": 6,
    "weekday": "Saturday",
    "title": "Conditioning Mix v6",
    "focus": "Performance week",
    "duration": "15-20 min",
    "difficulty": 5,
    "goal": "Sweat session using ropes, bike, and kettlebells.",
    "warmup": [
      "30 sec easy bike",
      "30 sec easy rope",
      "6 bodyweight squats",
      "6 arm circles each way"
    ],
    "main": [
      "5 rounds, move smooth not sloppy",
      "45 sec weighted jump rope",
      "12 KB swings with 35 or 53 lb",
      "8 push-ups",
      "8/side KB rows",
      "45 sec assault bike"
    ],
    "mobility": [
      "90/90 hip switch - 45 sec",
      "Half-kneeling hip flexor stretch - 45 sec/side",
      "Dead bug - 6/side"
    ],
    "backNote": "Keep ribs down, brace before every hinge, and stop if pain travels down the leg.",
    "badge": "Engine"
  },
  {
    "day": 42,
    "week": 6,
    "weekday": "Sunday",
    "title": "Recovery / Optional Walk",
    "focus": "Performance week",
    "duration": "10-30 min optional",
    "difficulty": 1,
    "goal": "Recover, reduce soreness, and prepare for the next week.",
    "warmup": [
      "Easy walk 5 min"
    ],
    "main": [
      "Optional easy walk",
      "10 min hip mobility",
      "No intense training today",
      "Take progress photos if this is the end of the week"
    ],
    "mobility": [
      "Child's pose breathing - 60 sec",
      "Bird dog - 6/side",
      "Hamstring floss - 8/side"
    ],
    "backNote": "Recovery counts. Keep this easy.",
    "badge": "Recovery"
  }
];