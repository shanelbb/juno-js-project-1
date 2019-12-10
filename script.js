$(function() {
  const quizData = {
    quiz: [
      {
        name: "Question1",
        question:
          "In Harry's first lesson with Snape, what is the first potion the class learns to make?",
        answers: [
          {
            value: "A potion to cure boils"
          },
          {
            value: "Confusing Concoction"
          },
          {
            value: "Polyjuice Potion"
          },
          {
            value: "An antidote for common poisons"
          }
        ],
        correctAnswer: 0
      },
      {
        name: "Question2",
        question:
          "What would you get if you added powdered root of asphodel to an infusion of wormwood?",
        answers: [
          {
            value: "Pepperup Potion"
          },
          {
            value: "Wolfsbane Potion"
          },
          {
            value: "Draught of Living Death"
          },
          {
            value: "Draught of Peace"
          }
        ],
        correctAnswer: 2
      },
      {
        name: "Question3",
        question:
          "What is the incantation of the spell that can expel a boggart?",
        answers: [
          {
            value: "Waddiwasi"
          },
          {
            value: "Riddikulus"
          },
          {
            value: "Dissendium"
          },
          {
            value: "Morsmordre"
          }
        ],
        correctAnswer: 1
      },
      {
        name: "Question4",
        question: "What does Neville Longbottom use to kill Nagini?",
        answers: [
          {
            value: "A knife"
          },
          {
            value: "Basilisk Fang"
          },
          {
            value: "His wand"
          },
          {
            value: "The sword of Gryffindor"
          }
        ],
        correctAnswer: 3
      },
      {
        name: "Question5",
        question: "What was the first name of Sirius Black's mother?",
        answers: [
          {
            value: "Willhemina"
          },
          {
            value: "Walburga"
          },
          {
            value: "Winnifred"
          },
          {
            value: "Warmina"
          }
        ],
        correctAnswer: 1
      },
      {
        name: "Question6",
        question:
          "What spell do Death Eaters use to conjure up the Dark Mark in the sky?",
        answers: [
          {
            value: "Morsmordre"
          },
          {
            value: "Sectumsempra"
          },
          {
            value: "Stupefy"
          },
          {
            value: "Avada Kedavra"
          }
        ],
        correctAnswer: 0
      },
      {
        name: "Question7",
        question: "What is Albus Dumblesdore's full name?",
        answers: [
          {
            value: "Albus Peter Weatherby Barnabus Dumbledore"
          },
          {
            value: "Albus Polonius Wilfred Bertram Dumbledore"
          },
          {
            value: "Albus Percival Wulfric Brian Dumbledore"
          },
          {
            value: "Albus Pericles Wolfgang Bernard Dumbledore"
          }
        ],
        correctAnswer: 2
      },
      {
        name: "Question8",
        question: "What form does Hermione's Patronus take?",
        answers: [
          {
            value: "Dove"
          },
          {
            value: "Jack Russell Terrier"
          },
          {
            value: "Otter"
          },
          {
            value: "Hare"
          }
        ],
        correctAnswer: 2
      },
      {
        name: "Question9",
        question: "What materials was Harry's wand made out of?",
        answers: [
          {
            value: "Hawthorn and unicorn hair"
          },
          {
            value: "Holly and phoenix feather"
          },
          {
            value: "Vine and dragon heartstring"
          },
          {
            value: "Willow and unicorn hair"
          }
        ],
        correctAnswer: 1
      },
      {
        name: "Question10",
        question: "Which family did Winky the house elf serve?",
        answers: [
          {
            value: "Malfoys"
          },
          {
            value: "Diggorys"
          },
          {
            value: "Potters"
          },
          {
            value: "Crouches"
          }
        ],
        correctAnswer: 3
      },
      {
        name: "Question11",
        question:
          "What charm did Professor McGonagall use to bring the statues and suits of armour to life in Deathly Hallows",
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
        name: "Question12",
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
        name: "Question13",
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
        name: "Question14",
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
        name: "Question15",
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
        name: "Question16",
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
        name: "Question17",
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
        name: "Question18",
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
        name: "Question19",
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
        name: "Question20",
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

  // Cached Selectors
  const $welcome = $("#welcome");
  const $start = $("#start");
  const $game = $("#game");
  const $content = $(".content");
  const $scoreBoard = $(".score-board");
  const $restart = $(".restart");

  // Welcome page
  const startPage = function() {
    $game.addClass("hide");
    $scoreBoard.addClass("hide");
    $restart.addClass("hide");
    // goes to first question when start button is clicked
    $start.on("click", () => {
      $game.removeClass("hide");
      $welcome.addClass("hide");
    });
  };

  const formSubmit = function(i) {
    $("form").on("click", "button", function(e) {
      e.preventDefault();
      const userChoice = $(this)
        .prev()
        .children("input[type='radio']:checked")
        .val();
      console.log(userChoice);
      const userChoiceNumber = parseInt(userChoice);
      const fieldSetID = $(this)
        .prev()
        .attr("id");

      const correctAnswer = quizData.quiz[fieldSetID].correctAnswer;
      if (userChoiceNumber === correctAnswer) {
        // alert("You are CORRECT!");
        quizData.score++;
        showScore();
      } else {
        // alert(`WRONG. The correct answer is option ${correctAnswer + 1}`);
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

  const labelClicked = function() {
    $("form").on("click", "label", function() {
      let inputID = $(this).attr("for");
      $(`input[id='${inputID}']`).prop("checked", true);
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
    if (quizData.score >= 17) {
      $scoreBoard.html(
        `<div class="finalScreen">
        <img
        class="finalImg"
        src="./assets/deathly-hallows.png"
        alt="Deathly Hallows illustration"/>
        <h4 class="scoreTotal">You're a Harry Potter expert!</h4> 
        <h4>You scored ${quizData.score} / 20</h4>
        </div>`
      );
    } else if (quizData.score >= 14 && quizData.score < 17) {
      $scoreBoard.html(
        `<div class="finalScreen">
        <img
        class="finalImg"
        src="./assets/lightning-bolt.png"
        alt="Lightning bolt illustration"/>
        <h4 class="scoreTotal">Well done! You know a lot about Harry Potter.</h4> 
        <h4>You scored ${quizData.score} / 20</h4>
        </div>`
      );
    } else if (quizData.score >= 10 && quizData.score < 14) {
      $scoreBoard.html(
        `<div class="finalScreen">
        <img
        class="finalImg"
        src="./assets/glasses.png"
        alt="Harry Potter glasses illustration"/>
        <h4 class="scoreTotal">Not bad but you could use a Harry Potter refresher.</h4> 
        <h4>You scored ${quizData.score} / 20</h4>
        </div>`
      );
    } else if (quizData.score >= 5 && quizData.score < 10) {
      $scoreBoard.html(
        `<div class="finalScreen">
        <img
        class="finalImg"
        src="./assets/letter.png"
        alt="Letter illustration"/>
    <h4 class="scoreTotal">Hmmm, maybe you should re-read the books.</h4> 
        <h4>You scored ${quizData.score} / 20</h4>
        </div>`
      );
    } else {
      $scoreBoard.html(
        `<div class="finalScreen">
        <img
        class="finalImg"
        src="./assets/broom.png"
        alt="Wizard broom illustration"/>
    <h4 class="scoreTotal">Have you even read the books!</h4> 
        <h4>You scored ${quizData.score} / 20</h4>
        </div>`
      );
    }
  };

  const showQuestion = function(i) {
    const htmlToAppend = `
      <fieldset id=${i}>
        <legend>
        <h5>${i + 1} of 20</h5>
        <h4>${quizData.quiz[i].question}</h4></legend>
        <input value="0" type="radio" name=${
          quizData.quiz[i].name
        } id="answer1"/>
        <label for="answer1">${quizData.quiz[i].answers[0].value}</label>
        <input  value="1" type="radio" name=${
          quizData.quiz[i].name
        } id="answer2"/>
        <label for="answer2">${quizData.quiz[i].answers[1].value}</label>
        <input  value="2" type="radio" name=${
          quizData.quiz[i].name
        } id="answer3"/>
        <label for="answer3">${quizData.quiz[i].answers[2].value}</label>
        <input  value="3" type="radio" name=${
          quizData.quiz[i].name
        } id="answer4"/>
        <label for="answer4">${quizData.quiz[i].answers[3].value}</label>
      </fieldset>
      <button id="next">next</button>
    `;
    $content.append(htmlToAppend);
  };
  const showFinalScreen = () => {
    const htmlToAppend = `
    <div class="finalScreen">
    <h4 class="finite">Finite Incantatem!</h4>
  </div>
  `;
    $scoreBoard.removeClass("hide");
    $content.html(htmlToAppend);
    $restart.removeClass("hide");
  };

  const startOver = function() {
    $restart.on("click", function() {
      location.reload();
    });
  };

  const init = function() {
    startPage();
    showQuestion(0);
    labelClicked();
    formSubmit();
    showScore();
    startOver();
  };

  init();
});
