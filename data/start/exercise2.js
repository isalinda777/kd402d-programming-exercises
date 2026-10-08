// Exercise 2: build a note from parts

const pitchName = "A";
let octave = 4;
let fullNote = pitchName + (octave + 1);
console.log("Exercise 2: fullNote is " + fullNote);
const pitchName2 = "D";
let octave2 = 3;
let fullNote2 = pitchName2 + octave2;
console.log("Exercise 2 fullNote2 is " + fullNote2);

// TODO 2a: raise the octave by one: octave = octave + 1;
// TODO 2b: log fullNote again. Predict first: has it changed?
// TODO 2c: rebuild it from its parts (fullNote = pitchName + octave;) and log it once more.

function exercise2(start) {
  synth.triggerAttackRelease(fullNote, "4n", start);
  synth.triggerAttackRelease(fullNote2, "4n", start + 0.5);
}

// ---------- You don't need to change anything below this line ----------

playOnClick("play-2", exercise2);
