var GuyTwo = function(x,y,size,color,vs) {
	this.x = x
	this.y = y
	this.size = size
	this.color = color
	this.vs = [[x-size,y-size],[x+size,y-size],[x+size,y+size],[x-size,y+size]]
	
	

}

GuyTwo.prototype.draw = function(canvas) {
	if(canvas.getContext){
	  var ctx = canvas.getContext('2d')
	      ctx.beginPath();
	      ctx.arc(this.x,this.y,this.size,0,2 * Math.PI);
	      ctx.fillStyle = this.color;
	      ctx.fill();
	      ctx.lineWidth = 1;
	      ctx.stroke();
	}

}

/*GuyTwo.prototype.move = function(direction,board) {

	if(direction === 'left') {
		this.x += .2
	} else if(direction === 'right') {
		this.x -= .2
	} else if (direction === 'up') {
		this.y -= .05
	} else if (direction === 'down') {
		this.y += .05


	} 
}*/