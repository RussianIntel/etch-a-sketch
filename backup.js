const container = document.querySelector("#container");
const button = document.querySelector('.button');

function createBoxes(numBox) {
    for (let i = 0; i < numBox; i++) {
        let div = document.createElement("div");
        for (let j = 0; j < numBox; j++) {
            let square = document.createElement("div");
            square.setAttribute("class", "box");

            div.append(square);
        }
        container.append(div);
    }
}



document.onload = createBoxes(12);
