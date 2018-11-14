$(document).ready(function() {
  // declare variables

  var magicNumber;
  var totalScore = 0;
  var wins = 0;
  var losses = 0;
  var crystal1Num;
  var crystal2Num;
  var crystal3Num;
  var crystal4Num;

  // Establish random magic number and random crystal numbers

  function newNumbers() {
    magicNumber = Math.floor(Math.random() * 110) + 20;
    crystal1Num = Math.ceil(Math.random() * 12);
    crystal2Num = Math.ceil(Math.random() * 12);
    crystal3Num = Math.ceil(Math.random() * 12);
    crystal4Num = Math.ceil(Math.random() * 12);
  }

  //assign numbers to crystals, magic number and score

  function newGame() {
    newNumbers();
    totalScore = 0;
    $("#magicNumber").text(magicNumber);
    $("#totalScore").text(totalScore);
    $("#crystal1").attr("data-crystalvalue", crystal1Num);
    $("#crystal2").attr("data-crystalvalue", crystal2Num);
    $("#crystal3").attr("data-crystalvalue", crystal3Num);
    $("#crystal4").attr("data-crystalvalue", crystal4Num);
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#winOrLose").text("");

    // debugging

    console.log(crystal1Num, crystal2Num, crystal3Num, crystal4Num);
  }

  // generate winning message

  function youWin() {
    $("#winOrLose").text("YOU WIN!");
    wins++;
    $("#wins").text(wins);
  }

  // generate losing message

  function youLose() {
    $("#winOrLose").text("YOU LOSE");
    losses++;
    $("#losses").text(losses);
  }

  // hover make it pretty :)

  newGame();

  $(".crystalimg").hover(
    function() {
      $(this).css({ opacity: 0.3 });
    },
    function() {
      $(this).css({ opacity: 1 });
    }
  );

  // add crystal values together and setting winning/losing parameters
  // also on click function to make crystal buttons work

  $(".crystalimg").on("click", function() {
    if (totalScore >= magicNumber) {
      return;
    }

    var crystalValue = $(this).attr("data-crystalvalue");
    crystalValue = parseInt(crystalValue);
    totalScore += crystalValue;
    $("#totalScore").text(totalScore);

    if (totalScore === magicNumber) {
      youWin();
    } else if (totalScore > magicNumber) {
      youLose();
    }
  });

  // button to restart game

  $(".btn").on("click", function() {
    newGame();
  });
});
