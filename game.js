var bird;
var pipes = [];
function setup() {
  // put setup code here
  createCanvas(window.innerWidth, window.innerHeight)
  bird = new Bird();
}

function draw() {

    background(113, 143, 249)

    if (frameCount % 150 == 0) {
        pipes.push(new Pipe());
    }

    for (var pipe of pipes) {
        pipe.show();
        pipe.update();

        if (bird.touches(pipe)) {
            noLoop()
            console.log("Koniec Gry!")
        }

    }

    bird.show();
    bird.update();

}

function keyPressed() {
    if (key == ' ') {
        bird.fly();
    }
}
