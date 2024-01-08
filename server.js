let passedNumber;
let currentNumber;
let combo = 0;
let highestCombo = 0;
document.body.style.backgroundColor = "LightSkyBlue";

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
        document.body.style.backgroundColor = "LimeGreen";

    }
    else if (currentNumber < passedNumber) {
        console.log("H Wrong")
        console.log("H current number =", currentNumber)
        //combo = 0;
        document.body.style.backgroundColor = "Crimson";
        higherCombo();

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
        document.body.style.backgroundColor = "LimeGreen";
    }
    else if (currentNumber > passedNumber) {
        console.log("L Wrong")
        console.log("L current number =", currentNumber)
        //combo = 0;
        document.body.style.backgroundColor = "Crimson";
        higherCombo();

    }
    console.log(currentNumber)
    document.getElementById("displayNumber").innerHTML = currentNumber;
    document.getElementById("currentCombo").innerHTML = combo;
    oldToNew();
});

// document.getElementById("getRidOfRules").addEventListener("click", function() {
//     document.getElementById("rules").style.display = "none";
//     document.getElementById("getRidOfRules").textContent = "Show";
// })

const hideOrShow = document.getElementById("getRidOfRules");

hideOrShow.addEventListener("click", function() {
    if (hideOrShow.textContent === "Hide") {
        document.getElementById("rules").style.display = "none";
    document.getElementById("getRidOfRules").textContent = "Show";
    }
    else if (hideOrShow.textContent === "Show") {
        document.getElementById("rules").style.display = "inline";
        document.getElementById("getRidOfRules").textContent = "Hide";
    }
})

function oldToNew() {
    passedNumber = currentNumber;
    console.log("this", passedNumber)
}

function higherCombo() {
    if (highestCombo <= combo) {
        highestCombo = combo;
        combo = 0;
        document.getElementById("disHighCombo").innerHTML = highestCombo;
    }
    else {
        combo = 0;
    }
    
    console.log("here", highestCombo)
}

randomInt();