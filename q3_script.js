window.addEventListener("load", () => {
    document.body.style.cursor = 'none';
    const questionContainer = document.getElementById("question-container");
    const questionInput = document.getElementById("question-input");
    questionInput.tabIndex = -1;

    questionContainer.addEventListener("mouseover", () => {
        questionContainer.style.backgroundColor = getRandomHexColor();
    });

    questionInput.addEventListener("mouseover", () => {
        questionInput.style.height = Math.random() * 150 + "px";
        questionInput.style.width = Math.random() * 150 + "px";
    })

    document.addEventListener('mousemove', function(event) {
        const icon = document.getElementById("icon");
        const mouseX = event.clientX;
        const mouseY = event.clientY;
    
        icon.style.left = mouseY + 'px';
        icon.style.top = mouseX * 0.7 + 'px';

    });

    document.addEventListener('keyup', (event) => {
        if (event.keyCode === 27) {
            window.location.href = "question4.html";

        }
    });

});

function getRandomHexColor() {
    
    var red = Math.floor(Math.random() * 256); 
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    var redHex = red.toString(16).padStart(2, '0'); 
    var greenHex = green.toString(16).padStart(2, '0');
    var blueHex = blue.toString(16).padStart(2, '0');

    var hexColor = '#' + redHex + greenHex + blueHex;

    return hexColor;
}
