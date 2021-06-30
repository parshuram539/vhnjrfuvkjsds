class paper{
	constructor(x,y,r)
	{
		var options = {
      isStatic:false,
			'restitution':0.3,
			'friction':0,
			'density':1.2
		}
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("paper.png");
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		
		World.add(world, this.body);
	}
	display()
	{
		
			var paperObjectpos=this.body.position;		
			push()
			translate(paperObjectpos.x, paperObjectpos.y);
			imageMode(CENTER)

			//draw the  here to display the rubber ball
image(this.image,0,0,this.r,this.r);
			pop()
	}

}

