let img1;
var angle = 0;


function preload() {
  	img1 = loadImage('assets/innerwheel2.png');
}

function setup() {
 	createCanvas (800,800);
}

function draw() {
	background(0);

  	push();
  	imageMode(CENTER);
  	translate(width/2, height/2);
  	image(img1, 0, 0);
  	pop();

	// angle+=-0.0025
	angle+= -0.5;
	angle = angle%360;

  	moon(angle);
  	// print(angle);
  }

  function moon(phase){
	push();
	translate(width/2,height/2);
	rotate(radians(phase));
	stroke('red');
	strokeWeight(10);
	line(0, 0, 130, 130);
	pop();
}



