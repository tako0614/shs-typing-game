const question = [
  "lion",
  "tiger",
  "cat",
  "dog",
  "elephant",
  "giraffe",
  "zebra",
  "monkey",
  "panda",
  "koala",
  "kangaroo",
  "penguin",
  "dolphin",
  "whale",
  "shark",
  "octopus",
  "crocodile",
  "snake",
  "lizard",
];

let questionNumber = Math.floor(Math.random() * question.length);

let questioninit = 0;
let questionlength = question[questionNumber].length;

window.addEventListener("keydown", (event) => {
  let keyCode = event.key;
  if (questionlength == questionlength - questioninit) {
    document.getElementById("start").innerHTML = question[questionNumber]
      .substring(questioninit, questionlength);
  }

  if (question[questionNumber].charAt(questioninit) == keyCode) {
    questioninit++;
    document.getElementById("start").innerHTML = question[questionNumber]
      .substring(questioninit, questionlength);

    if (questionlength - questioninit === 0) {
      questionNumber = Math.floor(Math.random() * question.length);
      questioninit = 0;
      questionlength = question[questionNumber].length;
      document.getElementById("start").innerHTML = question[questionNumber]
        .substring(questioninit, questionlength);
    }
  }
});