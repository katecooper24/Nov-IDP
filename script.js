var bird;
var pipes = [];
var score = 0;



function setup() {
  
  bird = new Bird();
  pipes.push(new Pipe());
  createCanvas(720, 400);
}

function draw() {
  background("lightblue");
  

  

  for (var i = pipes.length-1; i >= 0; i--) {
   pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      console.log("HIT");
    }

  // if (pipes[i].offscreen()) {
    // pipes.splice(i, 1);
    //}
    //gameOver = true;
  }

  bird.update();
  bird.show();

  if (frameCount % 75 == 0) {
    pipes.push(new Pipe());
  }




}

function keyPressed() {
  if (key == ' ') {
    bird.up();
    //console.log("SPACE");
  }
}

//WORKS CITED: https://editor.p5js.org/codingtrain/sketches/FtBc2BhHM 
