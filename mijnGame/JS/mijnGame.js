function setup() {
  canvas = createCanvas(1550,1550);
  canvas.parent('processing');
  frameRate(8);

  speler = new Pacman();
  vijand = new Spook(); 
  vijand1 = new Spook();
  vijand2 = new Spook();
}

function draw() {
  speler.beweeg();
  speler.teken();
  vijand.beweeg();
  vijand.teken();
  vijand1.teken();
  vijand1.beweeg();
  vijand2.teken();
  vijand2.beweeg();
  
   if (speler.wordtGeraakt(vijand) || speler.wordtGeraakt(vijand1) || speler.wordtGeraakt(vijand2)) {
     background('red');
     fill('white');
     text("Je hebt verloren!",50,400);
     noLoop();  }
}