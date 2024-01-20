function changeColors() {
    const body = document.body;

    // Generate random RGB values for background color
    const randomColor = () => Math.floor(Math.random() * 256);
    const bgColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;

    body.style.backgroundColor = bgColor;
}