function submitQuiz() {

    var correctAnswers = 0;
    var form = document.getElementById("quiz-form");
    var q1 = form["q1"].value;
    var q2 = form["q2"].value;
    var q3 = form["q3"].value;
    var q4 = form["q4"].value;
    var q5 = form["q5"].value;

    if (q1 === 'C') {
        correctAnswers++;
    }
    if (q2 === 'A') {
        correctAnswers++;
    }
    if (q3 === 'D') {
        correctAnswers++;
    }
    if (q4 === 'A') {
        correctAnswers++;
    }
    if (q5 === 'B') {
        correctAnswers++;
    }

    if (correctAnswers === 0) {
        alert("You got " + correctAnswers + " out of 5 correct! Have you even seen the movie?");
    }
    else if (correctAnswers <= 2) {
        alert("You got " + correctAnswers + " out of 5 correct! Better luck next time!");
    }
    else if (correctAnswers <= 4) {
        alert("You got " + correctAnswers + " out of 5 correct! Not bad!");
    }
    else {
        alert("You got " + correctAnswers + " out of 5 correct! Congrats!");
    }
};



