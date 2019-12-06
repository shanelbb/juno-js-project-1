$(function() {
  const quizData = {
    quiz: [
      {
        name: "Question 1",
        question:
          "What charm did Professor McGonagall use to bring the statues and suits of armour to life in Deathy Hallows",
        answers: [
          {
            value: "Petrificus Totalis"
          },
          {
            value: "Piertotum Locomotor"
          },
          {
            value: "Priori Incantato"
          },
          {
            value: "Homenum Revelio"
          }
        ],
        correctAnswer: 1
      },
      {
        name: "Question 2",
        question: "What does the spell Tarantallegra do?",
        answers: [
          {
            value: "Shoots spiders from the end of the wand"
          },
          {
            value: "Causes the victim to be covered in pasta"
          },
          {
            value: "Makes the victim's legs dance uncontrollably"
          },
          {
            value: "Makes the victim break into song"
          }
        ],
        correctAnswer: 2
      },
      {
        name: "Question 3",
        question: "Who tried to use the 'spell' Peskipiksi Pesternomi?",
        answers: [
          {
            value: "Gilderoy Lockhart"
          },
          {
            value: "Bellatrix Lestrange"
          },
          {
            value: "Severus Snape"
          },
          {
            value: "Remus Lupin"
          }
        ],
        correctAnswer: 0
      },
      {
        name: "Question 4",
        question: "What floor was the Room of Requirement located on?",
        answers: [
          {
            value: "Seventh"
          },
          {
            value: "Fourth"
          },
          {
            value: "Third"
          },
          {
            value: "First"
          }
        ],
        correctAnswer: 0
      },
      {
        name: "Question 5",
        question:
          "Hermione accidentally turned herself into a cat in Chamber of Secrets - but who did she intend to transform into?",
        answers: [
          {
            value: "Daphne Greengrass"
          },
          {
            value: "Millicent Bulstrode"
          },
          {
            value: "Pansy Parkinson"
          },
          {
            value: "Tracey Davis"
          }
        ],
        correctAnswer: 1
      },
      {
        name: "Question 6",
        question:
          "How many hours of good luck were contained in the bottle of Felix Felicis Professor Slughorn offered as a prize?",
        answers: [
          {
            value: "48 hours"
          },
          {
            value: "24 hours"
          },
          {
            value: "12 hours"
          },
          {
            value: "6 hours"
          }
        ],
        correctAnswer: 2
      },
      {
        name: "Question 7",
        question:
          "In the Triwizard Tournament's third task, which magical creature asked Harry a riddle?",
        answers: [
          {
            value: "Pixie"
          },
          {
            value: "Centaur"
          },
          {
            value: "Giant"
          },
          {
            value: "Sphinx"
          }
        ],
        correctAnswer: 3
      },
      {
        name: "Question 8",
        question: "What does S.P.E.W stand for?",
        answers: [
          {
            value: "Society for the Protection of Elfish Ways"
          },
          {
            value: "Society for the Power of Elfish Well-being"
          },
          {
            value: "Society for the Promotion of Elfish Welfare"
          },
          {
            value: "Society for the Protection of Elves and Wizards"
          }
        ],
        correctAnswer: 2
      },
      {
        name: "Question 9",
        question: "What time does the Hogwarts Express depart?",
        answers: [
          {
            value: "11:30am"
          },
          {
            value: "11am"
          },
          {
            value: "12pm"
          },
          {
            value: "10am"
          }
        ],
        correctAnswer: 1
      },
      {
        name: "Question 10",
        question:
          "What animal does Draco Malfoy get turned into in Goblet of Fire?",
        answers: [
          {
            value: "Guinea Pig"
          },
          {
            value: "Rat"
          },
          {
            value: "Snake"
          },
          {
            value: "Ferret"
          }
        ],
        correctAnswer: 3
      }
    ],
    score: 0
  };

  // $(function() {
  //   const quizData = {
  //     quiz: [
  //       {
  //         name: "Question 1",
  //         question:
  //           "In Harry's first lesson with Snape, what is the first potion the class learns to make?",
  //         answers: [
  //           {
  //             value: "A potion to cure boils"
  //           },
  //           {
  //             value: "Confusing Concoction"
  //           },
  //           {
  //             value: "Polyjuice Potion"
  //           },
  //           {
  //             value: "An antidote for common poisons"
  //           }
  //         ],
  //         correctAnswer: 0
  //       },
  //       {
  //         name: "Question 2",
  //         question:
  //           "What would you get if you added powdered root of asphodel to an infusion of wormwood?",
  //         answers: [
  //           {
  //             value: "Pepperup Potion"
  //           },
  //           {
  //             value: "Wolfsbane Potion"
  //           },
  //           {
  //             value: "Draught of Living Death"
  //           },
  //           {
  //             value: "Draught of Peace"
  //           }
  //         ],
  //         correctAnswer: 2
  //       },
  //       {
  //         name: "Question 3",
  //         question:
  //           "What is the incantation of the spell that can expel a boggart?",
  //         answers: [
  //           {
  //             value: "Waddiwasi"
  //           },
  //           {
  //             value: "Riddikulus"
  //           },
  //           {
  //             value: "Dissendium"
  //           },
  //           {
  //             value: "Morsmordre"
  //           }
  //         ],
  //         correctAnswer: 1
  //       },
  //       {
  //         name: "Question 4",
  //         question: "What does Neville Longbottom use to kill Nagini?",
  //         answers: [
  //           {
  //             value: "A knife"
  //           },
  //           {
  //             value: "Basilisk Fang"
  //           },
  //           {
  //             value: "His wand"
  //           },
  //           {
  //             value: "The sword of Gryffindor"
  //           }
  //         ],
  //         correctAnswer: 3
  //       },
  //       {
  //         name: "Question 5",
  //         question: "What was the first name of Sirius Black's mother?",
  //         answers: [
  //           {
  //             value: "Willhemina"
  //           },
  //           {
  //             value: "Walburga"
  //           },
  //           {
  //             value: "Winnifred"
  //           },
  //           {
  //             value: "Warmina"
  //           }
  //         ],
  //         correctAnswer: 1
  //       },
  //       {
  //         name: "Question 6",
  //         question:
  //           "What spell do Death Eaters use to conjure up the Dark Mark in the sky?",
  //         answers: [
  //           {
  //             value: "Morsmordre"
  //           },
  //           {
  //             value: "Piertotum Locomotor"
  //           },
  //           {
  //             value: "Stupefy"
  //           },
  //           {
  //             value: "Avada Kedavra"
  //           }
  //         ],
  //         correctAnswer: 0
  //       },
  //       {
  //         name: "Question 7",
  //         question: "What is Albus Dumblesdore's full name?",
  //         answers: [
  //           {
  //             value: "Albus Peter Weatherby Barnabus Dumbledore"
  //           },
  //           {
  //             value: "Albus Polonius Wilfred Bertram Dumbledore"
  //           },
  //           {
  //             value: "Albus Percival Wulfric Brian Dumbledore"
  //           },
  //           {
  //             value: "Albus Pericles Wolfgang Bernard Dumbledore"
  //           }
  //         ],
  //         correctAnswer: 2
  //       },
  //       {
  //         name: "Question 8",
  //         question: "What form does Hermione's Patronus take?",
  //         answers: [
  //           {
  //             value: "Dove"
  //           },
  //           {
  //             value: "Jack Russell Terrier"
  //           },
  //           {
  //             value: "Otter"
  //           },
  //           {
  //             value: "Hare"
  //           }
  //         ],
  //         correctAnswer: 2
  //       },
  //       {
  //         name: "Question 9",
  //         question: "What materials was Harry's wand made out of?",
  //         answers: [
  //           {
  //             value: "Hawthorn and unicorn hair"
  //           },
  //           {
  //             value: "Holly and phoenix feather"
  //           },
  //           {
  //             value: "Vine and dragon heartstring"
  //           },
  //           {
  //             value: "Willow and unicorn hair"
  //           }
  //         ],
  //         correctAnswer: 1
  //       },
  //       {
  //         name: "Question 10",
  //         question: "Which family did Winky the house elf serve?",
  //         answers: [
  //           {
  //             value: "Malfoys"
  //           },
  //           {
  //             value: "Diggorys"
  //           },
  //           {
  //             value: "Potters"
  //           },
  //           {
  //             value: "Crouches"
  //           }
  //         ],
  //         correctAnswer: 3
  //       }
  //     ],
  //     score: 0
  //   };

  // Cached Selectors
  const $welcome = $("#welcome");
  const $start = $("#start");
  const $game = $("#game");
  const $content = $(".content");
  const $scoreBoard = $(".score-board");

  // let shuffledQuestions;

  $game.addClass("hide");
  $scoreBoard.addClass("hide");

  $start.on("click", () => {
    $game.removeClass("hide");
    $welcome.addClass("hide");
  });

  let correctArray = quizData.quiz.map(function(question) {
    return question.correct;
  });

  const formSubmit = function(i) {
    $("form").on("click", "button", function(e) {
      e.preventDefault();
      const userChoice = $(this)
        .prev()
        .children("input[type='radio']:checked")
        .val();
      const userChoiceNumber = parseInt(userChoice);
      const fieldSetID = $(this)
        .prev()
        .attr("id");
      const correctAnswer = quizData.quiz[fieldSetID].correctAnswer;
      if (userChoiceNumber === correctAnswer) {
        alert("Correct!");
        quizData.score++;
        showScore();
      } else {
        alert("Wrong");
        quizData.score;
        showScore();
      }
      $(this).hide();
      $(this)
        .prev()
        .hide();
      showNextQuestion(parseInt(fieldSetID));
    });
  };
  const showNextQuestion = index => {
    if (index === quizData.quiz.length - 1) {
      showFinalScreen();
    } else {
      showQuestion(index + 1);
    }
  };
  const showScore = function(score) {
    console.log(quizData.score);
    $scoreBoard.html(`<h4 class="scoreTotal">${quizData.score * 10} </h4>`);
  };
  const showQuestion = function(i) {
    const htmlToAppend = `
      <fieldset id=${i}>
        <legend><h4>${quizData.quiz[i].question}</h4></legend>
        <input value="0" type="radio" name=${quizData.quiz[i].name} id="answer1"/>
        <label value="0" for="answer1">${quizData.quiz[i].answers[0].value}</label>
        <input  value="1" type="radio" name=${quizData.quiz[i].name} id="answer2"/>
        <label value="1" for="answer2">${quizData.quiz[i].answers[1].value}</label>
        <input  value="2" type="radio" name=${quizData.quiz[i].name} id="answer3"/>
        <label value="2" for="answer3">${quizData.quiz[i].answers[2].value}</label>
        <input  value="3" type="radio" name=${quizData.quiz[i].name} id="answer4"/>
        <label value="3" for="answer4">${quizData.quiz[i].answers[3].value}</label>
      </fieldset>
      <button id="next">next</button>
    `;
    $content.append(htmlToAppend);
  };
  const showFinalScreen = () => {
    const htmlToAppend = `
    <div class="finalScreen">
    <h4 class="finite">Finite Incantatem!</h4>
    <img
        class="finalImg"
        src="./assets/deathly-hallows.png"
        alt="Deathly Hallows illustration"
    />
    <h4 class="scoreTotal">Your final score is:</h4>
  </div>
  `;

    $scoreBoard.removeClass("hide");
    $content.html(htmlToAppend);
  };
  const init = function() {
    showQuestion(0);
    formSubmit();
    showScore();
  };

  init();
});
