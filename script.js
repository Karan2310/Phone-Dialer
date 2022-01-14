const display = document.querySelector("#display")
const button = document.querySelector("#openbtn")
const dial_body = document.querySelector("#dial-btn")
let inputArray = []

button.addEventListener('click', () => {
    dial_body.classList.add("show")
})

const close = document.querySelector("#close-dial")
close.addEventListener('click', () => {
    dial_body.classList.remove("show")
    inputArray = []
    display.innerText = ""
})

const inputNumber = (e) => {
    inputArray.push(e)
    if (inputArray.length <= 12) {
        display.innerHTML = inputArray.join("")
        navigator.vibrate(50);
    } else {
        navigator.vibrate(100);
        alert("Maximum 12 digits allowed")
    }
}

const backspace = document.getElementById("backspace")
backspace.addEventListener("click", () => {
    inputArray.pop(inputArray)
    display.innerHTML = inputArray.join("")
    navigator.vibrate(50);
})

const callBtn = document.getElementById("callbtn");
callBtn.addEventListener("click", () => {
    if (inputArray.length === 0) {
        navigator.vibrate(100);
        alert("Input is Empty, Call not Connected!")
    } else {
        alert("Call Connected")
        navigator.vibrate(100);
        inputArray = []
        display.innerHTML = inputArray
    }
})


// Toggle Theme

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

toggleTheme = (event) => {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', toggleTheme);