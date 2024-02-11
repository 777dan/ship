const directions = {
    37: "left",
    39: "right",
};
const shipSpeed = document.querySelector('#ship-speed');
const canvas = document.querySelector('#ship');
const context = canvas.getContext('2d');
let left = 0;
let keyPressed = false;

const drawShip = (left, shipRocking) => {
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.fillStyle = "#fc0";
    context.moveTo(20 + left, 90 + shipRocking);
    context.lineTo(60 + left, 40 + shipRocking);
    context.lineTo(60 + left, 90 + shipRocking);
    context.fill();

    context.beginPath();
    context.fillStyle = "#ccf";
    context.moveTo(0 + left, 90 + shipRocking);
    context.lineTo(30 + left, 120 + shipRocking);
    context.lineTo(70 + left, 120 + shipRocking);
    context.lineTo(100 + left, 90 + shipRocking);
    context.fill();

    context.beginPath();
    context.fillStyle = "#a60";
    context.fillRect(60 + left, 25 + shipRocking, 5, 65);

    context.beginPath();
    context.fillStyle = "#e49";
    context.fillRect(40 + left, 25 + shipRocking, 20, 10);

    context.fillStyle = '#00f';
    context.font = 'italic 20px sans-serif';
    context.textBaseline = 'top';
    context.fillText('SHIP', 25 + left, 95 + shipRocking);
}


let shipRocking = 0;
setInterval(() => {
    if (!keyPressed) drawShip(left, shipRocking);
    shipRocking = 10 * Math.sin(Date.now() / 1000);
}, 100);

const moveX = (directionX) => {
    if (directionX === 'right' && left < 600) {
        keyPressed = true;
        left += +shipSpeed.value;
        drawShip(left, shipRocking);
    } else if (directionX === 'left' && left > 20) {
        keyPressed = true;
        left -= +shipSpeed.value;
        drawShip(left, shipRocking);
    }

}

addEventListener("keydown", (event) => {
    let directionX = directions[event.keyCode];
    moveX(directionX);
});

addEventListener("keyup", (event) => {
    let directionX = directions[event.keyCode];
    if (directionX === 'right' || directionX === 'left') {
        keyPressed = false;
    }
});