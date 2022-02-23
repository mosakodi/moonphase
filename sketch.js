let img1;
let moonphase;
let helper;
var angle = 0;


function preload() {
  img1 = loadImage('assets/outerwheel4.png');
}

function setup() {
 createCanvas (800,800);
}

function draw() {
	background(0);
	// img1 = loadImage('assets/outerwheel3.png');
	// helper = map(0, 0, 800, 0, 30);
	// print(helper);
	// moon(helper);

	push();
  	imageMode(CENTER);
  	translate(width/2, height/2);
  	// image(img1, 210, 400);
  	image(img1, 0, 0);
  	pop();

	push();
	angle+=-0.01
	translate(width/2,height/2);
	rotate(angle);
	// line(400, 350, 235, 305);
	stroke('red');
	strokeWeight(10);
	line(0, 0, 130, 130);
	pop();
  }

 //  	push();
	// stroke('red');
	// strokeWeight(10);
	// line(400, 350, 235, 305);
	// //where does this go to make the line rotate counter clockwise??
	// // rotation = rotation-0.25;
	// // rotation = rotation%360;
	// pop();


function moon(phase){//phase should be between 0-28
	phase = map(phase, 0, 30, 0, 360);
	// push();
	// stroke('red');
	// strokeWeight(10);
	// // rotate(radians(phase));
	// line(400, 350, 235, 305);
	//where does this go to make the line rotate counter clockwise??
	// rotation = rotation-0.25;
	// rotation = rotation%360;
	// pop();


}

	






	

//   function drawArrow(base, vec, myColor) {
//   	push();
//   	stroke(red);
//   	strokeWeight(6);
//   	fill(red);
//   	translate(400, 350);
//   	line(400, 350, vec.x, vec.y);
//   	rotate(vec.heading());
//   	let arrowSize = 7;
//   	translate(vec.mag() - arrowSize, 0);
//   	triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
//   	pop();
// }

  	//where are we block in p5?

  // image(moon[phase], xLoc, yLoc)

  // ellipse(xLoc, yLoc, phase*overallSize, phase*overallSize);







  // text("day of the month" +int(moonphase), 100, 100);



// let timer = 0;
// let moonphase;
// let monthInSeconds = 30;
// let frameRate = 60;
// let xLoc
// let yLoc

// function setup() {
//  createCanvas (800,800)
// }

// //what should go in moonfunction vs drawloop?
// //moonfuction should only contain what I need to draw the moon
// //draw function is just drawing it

// function draw() {
// background(0)
// timer++;
// timer = timer % (monthInSeconds * frameRate);
// // timer = timer % 300; //300 should be 5 seconds if we are at 60 framerate
// // moonphase = map(timer, 0, 300, 0, 30);
// moonphase = map(timer, 0, monthInSeconds * frameRate, 0, 30);
// fill(255);
// text("day of the month" +int(moonphase), 100, 100);
// // print(moonphase);
// moon(moonphase, width/2, height/2, 1);  

// //draw 28 different moons
// for (var i = 0; i < 30; i++){
//   moon(i, i*30, 50, 0.1);
//    // moon(i, i+100, 100); //circle with circles within
//  } 
// }

// function moon(phase, xLoc, yLoc, overallSize){//phase should be between 0-30
//   if (phase <= 15){
//     phase = map(phase, 0, 15, 0, 300);
//  }
//   else{
//     phase = map(phase, 15, 30, 300, 0);
//   }

//   // image(moon[phase], xLoc, yLoc)

//   ellipse(xLoc, yLoc, phase*overallSize, phase*overallSize);
// }



