
let fInput = document.getElementById('firstInput');
let sInput = document.getElementById('secondInput');
let operator = document.getElementById('operator');
let userAns = document.getElementById('userAns');
let showScore = document.getElementById('showScore');
let showNoCorrect = document.getElementById('showNoCorrect');
let showNoWrong = document.getElementById('showNoWrong');
let showResult = document.getElementById('showResult');
let ids = document.getElementById('showTime');




showScore.value = 0;
showNoCorrect.value = 0;
showNoWrong.value = 0;
let correctAns

// Choose operator
let arr = ["+", "-", "*", "/"]
randomNo = Math.floor(Math.random() * 4)
operator.value = arr[randomNo]

const getRandNum = (e) => {
    if (arr[randomNo] == "+") {
        value1 = Math.floor(Math.random() * 100);
        value2 = Math.floor(Math.random() * 80);
    }

    else if (arr[randomNo] == "-") {
        value1 = Math.floor(Math.random() * 100);
        value2 = Math.floor(Math.random() * 50);
    }

    else if (arr[randomNo] == "*") {
        value1 = Math.floor(Math.random() * 20);
        value2 = Math.floor(Math.random() * 10);
    }

    else if (arr[randomNo] == "/") {
        value1 = Math.floor(Math.random() * 20);
        value2 = Math.floor(Math.random() * 5);
    }
}

const calculate = (e) => {
    if (userAns.value == correctAns) {
        alert(`Your answer ${userAns.value} is Correct`);
        showScore.value = parseInt(showScore.value) + 5;
        showNoCorrect.value = parseInt(showNoCorrect.value) + 1;
        let correctAudio = new Audio('Correct_Buzzer.m4a');
        correctAudio.play();
    }

    else {
        alert(`Your answer ${userAns.value} is Wrong. The correct ans is ${correctAns}`);
        let wrongAudio = new Audio('Wrong_Buzzer.m4a');
        wrongAudio.play();
        showNoWrong.value = parseInt(showNoWrong.value) + 1;
        showScore.value = parseInt(showScore.value) - 3;


    }

    fInput.value = " ";
    sInput.value = " ";
    userAns.value = "";
    // value1 =  Math.floor(Math.random()*50);
    // value2 =  Math.floor(Math.random()*50);
    getRandNum();
    randomNo = Math.floor(Math.random() * 4)
    operator.value = arr[randomNo]
    process();
    showResult.value = " "
    // timeOut();    

};

const process = (e) => {
    fInput.value = value1;
    sInput.value = value2;
    // correctAns = value1 + value2;
    if (arr[randomNo] == "+") {
        correctAns = value1 + value2;
    }

    else if (arr[randomNo] == "-") {
        correctAns = value1 - value2;
    }

    else if (arr[randomNo] == "*") {
        correctAns = value1 * value2;
    }

    else if (arr[randomNo] == "/") {
        correctAns = value1 / value2;
    }
};
document.getElementById("btn").addEventListener('click', calculate);
const helpAns = (e) => {
    showResult.value = correctAns;
}

// setTimeout(timeOut , 1000)
    
document.getElementById('showHelp').addEventListener('click', helpAns);
getRandNum();
process();

