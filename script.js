"use strict";
const inputsColor = document.querySelectorAll(".inp-color");
const inputRange = document.querySelector(".inp-range");
const colorContainer = document.querySelector('.color-container');
const btns = document.querySelectorAll("button");
const fond = document.querySelector("body");
const inp1 = document.querySelector(".inp1");
const textWarning = document.querySelector('span');
const radonBtn = document.querySelector('.random');
let index = 3;
//DEMARRAGE;
let colorValue = ["#000", "#F4E2D8"];
let inclinaison = 45;
inputsColor[0].value = colorValue[0];
inputsColor[1].value = colorValue[1];
inputsColor[0].style.background = colorValue[0];
inputsColor[1].style.background = colorValue[1];
fond.style.background = `linear-gradient(${inclinaison}deg, ${colorValue})`;
// iNCLINAISION
inputRange.addEventListener('input', (e) => {
    inclinaison = e.target.value * 3.6;
    fond.style.background = `linear-gradient(${inclinaison}deg, ${colorValue})`;
});
// ADD AND REMOVE COLORS
btns.forEach(btn => {
    btn.addEventListener('click', rajouteEnleve);
});
function rajouteEnleve(e) {
    const allinputs = document.querySelectorAll('.inp-color');
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    console.log(randomColor);
    if (e.target.className === "plus") {
        textWarning.innerText = ` `;
        if (allinputs.length > 8) {
            return;
        }
        else {
            const newColor = document.createElement('input');
            newColor.setAttribute('class', 'inp-color');
            newColor.setAttribute('data-index', `${index}`);
            newColor.setAttribute('max-lenght', `7`);
            newColor.value = `#${randomColor.toUpperCase()}`;
            newColor.style.background = `#${randomColor}`;
            colorContainer.appendChild(newColor);
            colorValue.push(newColor.value);
            fond.style.background = `linear-gradient(${inclinaison}deg, ${colorValue})`;
        }
    }
    else if (e.target.className === "minus") {
        if (allinputs.length < 3) {
            textWarning.innerText = `it's the max`;
        }
        else {
            colorContainer.lastChild.remove();
            colorValue.pop();
            fond.style.background = `linear-gradient(${inclinaison}deg, ${colorValue})`;
        }
    }
}
radonBtn.addEventListener('click', () => {
    const allColor = document.querySelectorAll('.inp-color');
    for (let i = 0; i < colorValue.length; i++) {
        colorValue[i] = `#${Math.floor(Math.random() * 16888215).toString(16)}`;
        allColor[i].value = colorValue[i].toUpperCase();
        allColor[i].style.background = colorValue[i].toUpperCase();
        fond.style.background = `linear-gradient(${inclinaison}deg, ${colorValue})`;
    }
});
