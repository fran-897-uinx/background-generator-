const color1 = document.querySelector('.color1');
// const color2 = document.querySelector('.color2');
 const body = document.getElementById("gradient");

const setGradient = () => {
    body.style.background = color1.value;
    header3.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
// color2.addEventListener("input", setGradient);


// "linear-gradient(to right,"+ color1.value +", "+ color2.value + ")"