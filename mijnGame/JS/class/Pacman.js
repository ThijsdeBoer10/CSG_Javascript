class Pacman {
  constructor() {
      this.rij = 2;
      this.kolom = 2;
      this.kleur = null;
      this.vakje = 31;     

    this.n = 30;
    this.patroon = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
              1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,
              1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,
              1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,
              1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,
              1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,
              1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,
              1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,
              1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,
              1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,
              1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,
              1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,
              1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,
              1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,
              1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,
              1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,
              1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
    this.celgrootte = 50;
    if (this.patroon == 1 ) {
    this.kleur = 'black'
    }
    else {
    this.kleur = 'blue'
    }
    }

  beweeg() {
    if (keyIsDown(LEFT_ARROW) && this.patroon[this.vakje - 1] == 0) {
        this.kolom--;
        this.vakje--;
    }
    if (keyIsDown(RIGHT_ARROW) && this.patroon[this.vakje + 1] == 0) {
        this.kolom++;
        this.vakje++;
    }
    if (keyIsDown(UP_ARROW) && this.patroon[this.vakje - 30] == 0) {
        this.rij--;
        this.vakje-= 30;
    }
    if (keyIsDown(DOWN_ARROW) && this.patroon[this.vakje + 30] == 0) {
        this.rij++;
        this.vakje+= 30;
    }
  }


  wordtGeraakt(vijand) {
    if (this.rij == vijand.rij && this.kolom == vijand.kolom) {
      return true;
    }
    else {
      return false;
    }
  }

  tekenVeld() {
    var teller = 0;
    noStroke ();
    for (var rij=0; rij < 17;rij++) {
      for (var kolom=0; kolom < 30; kolom++) {
        //fill(this.patroon[teller]*100);


        if (this.patroon[teller] == 1) {
          this.kleur = 'black'}
         else {
           this.kleur = 'blue'}
         fill(this.kleur);


        rect(this.celgrootte*kolom,this.celgrootte*rij,this.celgrootte);
        teller++;
      }
    }
  }

  teken() {
    this.tekenVeld();
    push();
    noStroke();
    fill('yellow');
    ellipse((this.kolom-0.5)*this.celgrootte,(this.rij-0.5)*this.celgrootte,this.celgrootte*0.8);
    pop();
  }

}