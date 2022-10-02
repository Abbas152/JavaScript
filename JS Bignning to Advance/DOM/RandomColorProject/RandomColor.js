
// Change Random Body Color When Click On Button 

const btn = document.querySelector("button");
const body = document.querySelector("body");
const currentColor = document.querySelector("h1 strong");
const randomColorGenerator = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const rgb = `rgb(${red},${green},${blue})`;
    return rgb;
}


btn.addEventListener("click", () => {
    const random = randomColorGenerator();
    body.style.backgroundColor = random;
    currentColor.textContent = random;
});