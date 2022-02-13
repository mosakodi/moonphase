let timer = 0;
let moonphase;
let monthInSeconds = 30;
let frameRate = 60;
let xLoc
let yLoc

function setup() {
 createCanvas (800,800)
}

//what should go in moonfunction vs drawloop?
//moonfuction should only contain what I need to draw the moon
//draw function is just drawing it

function draw() {
background(0)
timer++;
timer = timer % (monthInSeconds * frameRate);
// timer = timer % 300; //300 should be 5 seconds if we are at 60 framerate
// moonphase = map(timer, 0, 300, 0, 30);
moonphase = map(timer, 0, monthInSeconds * frameRate, 0, 30);
fill(255);
text("day of the month" +int(moonphase), 100, 100);
// print(moonphase);
moon(moonphase, width/2, height/2, 1);  

//draw 28 different moons
for (var i = 0; i < 30; i++){
  moon(i, i*30, 50, 0.1);
   // moon(i, i+100, 100); //circle with circles within
 } 
}

function moon(phase, xLoc, yLoc, overallSize){//phase should be between 0-30
  if (phase <= 15){
    phase = map(phase, 0, 15, 0, 300);
 }
  else{
    phase = map(phase, 15, 30, 300, 0);
  }

  // image(moon[phase], xLoc, yLoc)

  ellipse(xLoc, yLoc, phase*overallSize, phase*overallSize);
}



