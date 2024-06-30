let game = document.getElementById('gameContainer');
    let ball = document.getElementById('ball');
    let paddle = document.getElementById('paddle');
    let x = 400, y = 300;
    let dx = 2, dy = -2;
    let paddleWidth = 96;
    let paddleX = (game.offsetWidth - paddleWidth) / 2;
    let rightPressed = false, leftPressed = false;

    document.addEventListener('keydown', keyDownHandler, false);
    document.addEventListener('keyup', keyUpHandler, false);

    function keyDownHandler(e) {
        if (e.key === 'ArrowRight') {
            rightPressed = true;
        } else if (e.key === 'ArrowLeft') {
            leftPressed = true;
        }
    }

    function keyUpHandler(e) {
        if (e.key === 'ArrowRight') {
            rightPressed = false;
        } else if (e.key === 'ArrowLeft') {
            leftPressed = false;
        }
    }

    function drawBall() {
        ball.style.left = x + 'px';
        ball.style.top = y + 'px';
    }

    function drawPaddle() {
        paddle.style.left = paddleX + 'px';
    }

    function draw() {
        drawBall();
        drawPaddle();

        if (rightPressed && paddleX < game.offsetWidth - paddleWidth) {
            paddleX += 5;
        } else if (leftPressed && paddleX > 0) {
            paddleX -= 5;
        }

        x += dx;
        y += dy;

        if (x + dx > game.offsetWidth - ball.offsetWidth || x + dx < 0) {
            dx = -dx;
        }

        if (y + dy < 0) {
            dy = -dy;
        } else if (y + dy > game.offsetHeight - ball.offsetHeight) {
            if (x > paddleX && x < paddleX + paddleWidth) {
                dy = -dy;
            } else {
                alert('Game Over');
                document.location.reload();
            }
        }
    }

    setInterval(draw, 10);