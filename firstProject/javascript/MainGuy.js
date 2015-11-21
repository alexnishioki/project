
var MainGuy = function(x,y,size,color) {
	this.x = x
	this.y = y
	this.size = size
	this.color = color
	this.vs = [[x-size,y-size],[x+size,y-size],[x+size,y+size],[x-size,y+size]]

}

MainGuy.prototype.draw = function(canvas) {
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

MainGuy.prototype.move = function(direction,board) {
	console.log(direction)
	console.log(board)
	var proposedX = this.x
	var proposedY = this.y


	if(direction === 'left') {
		proposedX -= 2
	} else if(direction === 'right') {
		proposedX += 2
	} else if (direction === 'up') {
		proposedY -= 2
	} else if (direction === 'down') {
		proposedY += 2
	} 

	if(!board.collisionDetect(proposedX,proposedY) && !board.borderDetect(proposedX,proposedY)) {
		this.x = proposedX
		this.y = proposedY
	} 
}



































