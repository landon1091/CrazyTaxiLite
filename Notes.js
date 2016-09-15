window.addEventListener('load', function () {
    let y = 0;
    let x = 0;
    let Score = 0;


    let Up = document.getElementById("Up")
    Up.addEventListener('click', function () {
        if (y <= 9) {
            y++
        }

        let coordinates = x.toString() + ", " + y.toString();
        if (x === 4 && y === 2) {
            Score++
            console.log("Score: " + Score)
        }
        console.log(coordinates);
    })
    let Down = document.getElementById("Down")
    Down.addEventListener('click', function () {
        if (y >= 1) {
            y--
        }
        let coordinates = x.toString() + ", " + y.toString();
        if (x === 4 && y === 2) {
            Score++
            console.log("Score: " + Score)
        }
        console.log(coordinates);
    })
    let Left = document.getElementById("Left")
    Left.addEventListener('click', function () {
        if (x >= 1) {
            x--
        }

        let coordinates = x.toString() + ", " + y.toString();
        if (x === 4 && y === 2) {
            Score++
            console.log("Score: " + Score)
        }
        console.log(coordinates);
    })
    let Right = document.getElementById("Right")
    Right.addEventListener('click', function () {
        if (x <= 9) {
            x++
        }

        let coordinates = x.toString() + ", " + y.toString();
        if (x === 4 && y === 2) {
            Score++
            console.log("Score: " + Score)
        }
        console.log(coordinates);
    })





})