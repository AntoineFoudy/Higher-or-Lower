let passedNumber;
let currentNumber;
let combo;

function randomInt() {
    passedNumber = Math.floor(Math.random() * 101);
    console.log(passedNumber)
    document.getElementById("displayNumber").innerHTML = passedNumber;
}

document.getElementById("higher").addEventListener("click", function() {
    currentNumber = Math.floor(Math.random() * 101);
    if (currentNumber > passedNumber) {
        console.log("H Correct")
        console.log("H current number =", currentNumber)
    }
    else if (currentNumber < passedNumber) {
        console.log("H Wrong")
        console.log("H current number =", currentNumber)
    }
    console.log(currentNumber)
    document.getElementById("displayNumber").innerHTML = currentNumber;
    oldToNew();
});

document.getElementById("lower").addEventListener("click", function() {
    currentNumber = Math.floor(Math.random() * 101);
    if (currentNumber < passedNumber) {
        console.log("L Correct")
        console.log("L current number =", currentNumber)
    }
    else if (currentNumber > passedNumber) {
        console.log("L Wrong")
        console.log("L current number =", currentNumber)
    }
    console.log(currentNumber)
    document.getElementById("displayNumber").innerHTML = currentNumber;
    oldToNew();
});

function oldToNew() {
    passedNumber = currentNumber;
    console.log("this", passedNumber)
}

randomInt();