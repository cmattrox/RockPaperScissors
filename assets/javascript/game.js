$(document).ready(function() {
    var wins = 0;
    var losses = 0;
    var ties = 0;

    function manVsMachine () {
        if (wins > losses) {
            $("#manVsMachine").html("Man is greater than machine.")
        } else {
            $("#manVsMachine").html("Machine is greater than man.")
        }
    };

    $(".btn").click(function(res) {
        var userGuess = res.target.value
        console.log(userGuess)
        var computerGuess = Math.floor(Math.random() * 3) + 1;
        $("#wins").html(wins);
        $("#losses").html(losses);
        $("#ties").html(ties);

        if(computerGuess === 1) {
            $("#computerChoice").html("Rock")
        }
        else if (computerGuess === 2) {
            $("#computerChoice").html("Paper")
        } else {
            $("#computerChoice").html("Scissors")
        }

        if (userGuess === "1" && computerGuess === 1) {
            $("#winner").html("It's a tie");
            ties++;
            $("#ties").html(ties)
        }
        else if (userGuess === "1" && computerGuess === 2) {
            $("#winner").html("You lose");
            losses++;
            $("#losses").html(losses);
        }
        else if (userGuess === "1" && computerGuess === 3) {
            $("#winner").html("You win");
            wins++;
            $("#wins").html(wins);
        }
        else if (userGuess === "2" && computerGuess === 1) {
            $("#winner").html("You win");
            wins++;
            $("#wins").html(wins);
        }
        else if (userGuess === "2" && computerGuess === 2) {
            $("#winner").html("It's a tie");
            ties++;
            $("#ties").html(ties)
        }
        else if (userGuess === "2" && computerGuess === 3) {
            $("#winner").html("You lose");
            losses++;
            $("#losses").html(losses);
        }
        else if (userGuess === "3" && computerGuess === 1) {
            $("#winner").html("You lose");
            losses++;
            $("#losses").html(losses);
        }
        else if (userGuess === "3" && computerGuess === 2) {
            $("#winner").html("You win");
            wins++;
            $("#wins").html(wins);
        }
        if (userGuess === "3" && computerGuess === 3) {
            $("#winner").html("It's a tie");
            ties++;
            $("#ties").html(ties)
        }
        manVsMachine();
    })
})