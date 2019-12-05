// Harry Potter Trivia Quiz
// 10 - 20 questions (randomized?)
// Have multiple choice answers
// Alert that indicates if the user answered right or wrong with the correct answer highlighted
// Final score tallied at the end
// different messages depending on score ie. 40% or less, 50% to 60%, %70 - 80%, 90% to 100%
// Play Again button takes back to beginning of quiz

// create an array with questions and answers

// const quiz = [
//   {
//     question:
//       "What charm did Professor McGonagall use to bring the statues and suits of armour to life in Deathy Hallows",
//     choices: [
//       "Petrificus Totalis",
//       "Piertotum Locomotor",
//       "Priori Incantato",
//       "Homenum Revelio"
//     ],
//     correctAnswer: 1
//   },
//   {
//     question: "What does the spell Tarantallegra do?",
//     choices: [
//       "Shoots spiders from the end of the wand",
//       "Causes the victim to be covered in pasta",
//       "Makes the victim's legs dance uncontrollably",
//       "Makes the victim break into song"
//     ],
//     correctAnswer: 2
//   },
//   {
//     question: "Who tried to use the 'spell' Peskipiksi Pesternomi?",
//     choices: [
//       "Gilderoy Lockhart",
//       "Bellatrix Lestrange",
//       "Severus Snape",
//       "Remus Lupin"
//     ],
//     correctAnswer: 1
//   },
//   {
//     question: "What floor was the Room of Requirement located on?",
//     choices: ["Seventh", "Fourth", "Third", "First"],
//     correctAnswer: 0
//   },
//   {
//     question:
//       "Hermione accidentally turned herself into a cat in Chamber of Secrets - but who did she intend to transform into?",
//     choices: [
//       "Daphne Greengrass",
//       "Millicent Bulstrode",
//       "Pansy Parkinson",
//       "Tracey Davis"
//     ],
//     correctAnswer: 1
//   },
//   {
//     question:
//       "How many hours of good luck were contained in the bottle of Felix Felicis Professor Slughorn offered as a prize?",
//     choices: ["48 hours", "24 hours", "12 hours", "6 hours"],
//     correctAnswer: 2
//   },
//   {
//     question:
//       "In the Triwizard Tournament's third task, which magical creature asked Harry a riddle?",
//     choices: ["Pixie", "Centaur", "Giant", "Sphinx"],
//     correctAnswer: 3
//   },
//   {
//     question: "What does S.P.E.W stand for?",
//     choices: [
//       "Society for the Protection of Elfish Ways",
//       "Society for the Power of Elfish Well-being",
//       "Society for the Promotion of Elfish Welfare",
//       "Society for the Protection of Elves and Wizards"
//     ],
//     correctAnswer: 2
//   },
//   {
//     question: "What time does the Hogwarts Express depart?",
//     choices: ["11:30am", "11am", "12pm", "10am"],
//     correctAnswer: 1
//   },
//   {
//     question:
//       "What animal does Draco Malfoy get turned into in Goblet of Fire?",
//     choices: ["Guinea Pig", "Rat", "Snake", "Ferret"],
//     correctAnswer: 3
//   }
// ];

const quiz = [
  {
    question:
      "In Harry's first lesson with Snape, what is the first potion the class learns to make?",
    choices: [
      "A potion to cure boils",
      "Confusing Concoction",
      "Polyjuice Potion",
      "An antidote for common poisons"
    ],
    correctAnswer: 0
  },
  {
    question:
      "What would you get if you added powdered root of asphodel to an infusion of wormwood?",
    choices: [
      "Pepperup Potion",
      "Wolfsbane Potion",
      "Draught of Living Death",
      "Draught of Peace"
    ],
    correctAnswer: 2
  },
  {
    question: "What is the incantation of the spell that can expel a boggart?",
    choices: ["Waddiwasi", "Riddikulus", "Dissendium", "Morsmordre"],
    correctAnswer: 1
  },
  {
    question: "What does Neville Longbottom use to kill Nagini?",
    choices: [
      "A knife",
      "Basilisk Fang",
      "His wand",
      "The sword of Gryffindor"
    ],
    correctAnswer: 3
  },
  {
    question: "What was the first name of Sirius Black's mother?",
    choices: ["Willhemina", "Walburga", "Winnifred", "Warmina"],
    correctAnswer: 1
  },
  {
    question:
      "What spell do Death Eaters use to conjure up the Dark Mark in the sky?",
    choices: ["Morsmordre", "Piertotum Locomotor", "Stupefy", "Avada Kedavra"],
    correctAnswer: 0
  },
  {
    question: "What is Albus Dumblesdore's full name?",
    choices: [
      "Albus Peter Weatherby Barnabus Dumbledore",
      "Albus Polonius Wilfred Bertram Dumbledore",
      "Albus Percival Wulfric Brian Dumbledore",
      "Albus Pericles Wolfgang Bernard Dumbledore"
    ],
    correctAnswer: 2
  },
  {
    question: "What form does Hermione's Patronus take?",
    choices: ["Dove", "Jack Russell Terrier", "Otter", "Hare"],
    correctAnswer: 2
  },
  {
    question: "What materials was Harry's wand made out of?",
    choices: [
      "Hawthorn and unicorn hair",
      "Holly and phoenix feather",
      "Vine and dragon heartstring",
      "Willow and unicorn hair"
    ],
    correctAnswer: 1
  },
  {
    question: "Which family did Winky the house elf serve?",
    choices: ["Malfoys", "Diggorys", "Potters", "Crouches"],
    correctAnswer: 3
  }
];

// Cached Selectors
const $quiz = $("#quiz");
const $welcome = $("#welcome");
const $start = $("#start");
const $question = $("#question");
const $answer = $("#answer");
const $controls = $("#controls");
const $back = $("#back");
const $next = $("#next");
const $results = $("#results");

let shuffledQuestions;

$question.addClass("hide");
$answer.addClass("hide");
$controls.addClass("hide");
$results.addClass("hide");

$start.on("click", () => {
  quiz.forEach(function(index) {
    shuffledQuestions = quiz.sort(() => Math.random() - 0.5);

    const htmlToQuestion = `<h4>${index.question}</h4>`;

    const htmlToForm = `
    <fieldset>
    <input value="0" name="question" type="radio" id="answer0"/>
    <label for="answer0">${index.choices[0]}</label>
    <input value="1" name="question" type="radio" id="answer1"/>
    <label for="answer1">${index.choices[1]}</label>
    <input value="2" name="question" type="radio" id="answer2"/>
    <label for="answer2">${index.choices[2]}</label>
    <input value="3" name="question" type="radio" id="answer3"/>
    <label for="answer3">${index.choices[3]}</label>
    </fieldset>
    <button type="submit" id="submit" class="submitButton">Submit</button>`;
    // <button type="submit" class="nextButton" id="submitButton">Next</button>

    $question.html(htmlToQuestion);
    // $answer.html(htmlToAnswer);
    $("form").html(htmlToForm);

    $question.removeClass("hide");
    $answer.removeClass("hide");
    $next.removeClass("hide");
    $controls.removeClass("hide");

    $welcome.addClass("hide");
    $back.addClass("hide");
  });
});

const createScoreBoard = function(score) {
  $(".score-board").html(score);
  console.log("Board:", score);
};

const storeUserSelection = function() {
  let score = 0;

  $answer.on("submit", "form", function(event) {
    event.preventDefault();
    const choice = $("input[type='radio']:checked").val();

    const numberSelection = parseInt(choice);
    scoreKeeper(numberSelection);

    console.log("test:", choice);
  });
  console.log("store:", score);
};

storeUserSelection();

const scoreKeeper = function(userChoice) {
  let score = 0;
  let correct = quiz[0].correctAnswer;
  console.log("Correct Answer:", correct);
  if (userChoice === correct) {
    score = score + 10;
  } else {
    score = score;
  }
  createScoreBoard(score);
};
