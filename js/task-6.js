const control = document.querySelector('#controls');
const boxes = document.querySelector('#boxes');
const number = document.querySelector('input[type="number"]');
let value = 30;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



control.addEventListener("click", (event) => {
    if (event.target.hasAttribute("data-create")) {
        if (number.value < 101) {
            boxes.innerHTML = "";
            value = 30
            for (let i = 0; i < Number(number.value); i++) {
                const div = document.createElement("div");
                div.style.width = `${value}px`
                div.style.height = `${value}px`
                div.style.backgroundColor = getRandomHexColor();
                value += 10;
                boxes.append(div);
            }
            number.value = "";
        }
    }

    if (event.target.hasAttribute("data-destroy")) {
        boxes.innerHTML = "";
    }
})