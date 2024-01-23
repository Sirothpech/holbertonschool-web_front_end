function changeMode (size, weight, transform, background, color) {
    return function () {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

function main () {
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    let paragraph = document.createElement("p");
    paragraph.innerHTML = "Welcome Holberton!";
    document.body.appendChild(paragraph);

    let buttonSpooky = document.createElement("button");
    buttonSpooky.innerHTML = "Spooky";
    document.body.appendChild(buttonSpooky);
    buttonSpooky.onclick = spooky;

    let buttonDark = document.createElement("button");
    buttonDark.innerHTML = "Dark mode";
    document.body.appendChild(buttonDark);
    buttonDark.onclick = darkMode;

    let buttonScream = document.createElement("button");
    buttonScream.innerHTML = "Scream mode";
    document.body.appendChild(buttonScream);
    buttonScream.onclick = screamMode;
}

main();