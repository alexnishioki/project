var Background = function(x,y,size,color,vs) {
	this.x = x
	this.y = y
	this.size = size
	this.color = color
	this.vs = [[x-size,y-size],[x+size,y-size],[x+size,y+size],[x-size,y+size]]
	

}

Background.prototype.draw = function(canvas) {
	if(canvas.getContext){
	  var ctx = canvas.getContext('2d');
	      ctx.beginPath();
	      ctx.arc(this.x,this.y,this.size,0,4 * Math.PI);
	      ctx.fillStyle = this.color;
	      ctx.alpha = '.8';
     ctx.shadowColor = '#999';
     ctx.shadowBlur = 20;
     ctx.shadowOffsetX = 15;
     ctx.shadowOffsetY = 15;
     ctx.fill();
     ctx.stroke();
	     
	}
}

Background.prototype.move2 = function(direction) {
	var proposedX = this.x
	var proposedY = this.y
	var i;
	for(i = 0; i < gameBoard.entities.length; i++) {

	if(direction === 'down') {
		proposedY += .1
	} 
	else if(direction ==='left') {
		proposedX -= .1
	} else if(direction ==='right') {
		proposedX += .05
	} else if(direction ==='up') {
		proposedY -= .04
	}
	if(this.y < 1800) {
		this.y = proposedY
	}
	if(this.x > -1500) {
		this.x = proposedX
	}
	} 

}




 

