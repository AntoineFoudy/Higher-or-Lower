let passedNumber;
let currentNumber;
let combo = 0;

function randomInt() {
    passedNumber = Math.floor(Math.random() * 101);
    console.log(passedNumber)
    document.getElementById("displayNumber").innerHTML = passedNumber;
    document.getElementById("currentCombo").innerHTML = combo;
}

document.getElementById("higher").addEventListener("click", function() {
    currentNumber = Math.floor(Math.random() * 101);
    if (currentNumber > passedNumber) {
        console.log("H Correct")
        console.log("H current number =", currentNumber)
        combo ++;
        document.body.style.backgroundColor = "green";

    }
    else if (currentNumber < passedNumber) {
        console.log("H Wrong")
        console.log("H current number =", currentNumber)
        combo = 0;
        document.body.style.backgroundColor = "red";

    }
    console.log(currentNumber)
    document.getElementById("displayNumber").innerHTML = currentNumber;
    document.getElementById("currentCombo").innerHTML = combo;
    oldToNew();
});

document.getElementById("lower").addEventListener("click", function() {
    currentNumber = Math.floor(Math.random() * 101);
    if (currentNumber < passedNumber) {
        console.log("L Correct")
        console.log("L current number =", currentNumber)
        combo ++;
        document.body.style.backgroundColor = "green";
    }
    else if (currentNumber > passedNumber) {
        console.log("L Wrong")
        console.log("L current number =", currentNumber)
        combo = 0;
        document.body.style.backgroundColor = "red";

    }
    console.log(currentNumber)
    document.getElementById("displayNumber").innerHTML = currentNumber;
    document.getElementById("currentCombo").innerHTML = combo;
    oldToNew();
});

function oldToNew() {
    passedNumber = currentNumber;
    console.log("this", passedNumber)
}

randomInt();