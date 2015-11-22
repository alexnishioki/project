//for vs, include the board and exclude entities (aka. Triangles)
var MainGuy = function(x,y,size,color,vs) {
	this.x = x
	this.y = y
	this.size = size
	this.color = color
	//I did not have vs as a parameter before today
	//this.vs = [[x-size,y-size],[x+size,y-size],[x+size,y+size],[x-size,y+size]]
	//this.vs = [[x-400,y-40],[x+size,y-size],[x+size,y+size],[x-400,y+40]]
	//this.vs = [[x-900,y-45],[x+size,y-size],[x+size,y+size],[x-900,y+35]]
	//this.vs = [[x-1160,y-55],[x+size,y-size],[x+size,y+size],[x-1160,y+70]] ||
	this.vs = [[x-1150,y-55],[x+size,y-size],[x+size,y+size],[x-1150,y+70]]
	}
		
/*MainGuy.prototype.changeMove = function() {
					this.vs = [[x-1200,y-55],[x+2000,y-200],[x+2000,y+2000],[x-1200,y+70]]
				}
	*/		
			  



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



/*MainGuy.prototype.move = function(direction,board) {
	console.log(direction)
	console.log(board)
	var proposedX = this.x
	var proposedY = this.y


	if(direction === 'left') {
		proposedX -= 1
	} else if(direction === 'right') {
		proposedX += 1
	} else if (direction === 'up') {
		proposedY -= 1
	} else if (direction === 'down') {
		proposedY += 1
	} 

	if(!board.collisionDetect(proposedX,proposedY) && !board.borderDetect(proposedX,proposedY)) {
		this.x = proposedX
		this.y = proposedY
	} 
}*/


MainGuy.prototype.move = function(direction,board) {
	console.log(direction)
	console.log(board)
	var proposedX = this.x
	var proposedY = this.y


	if(direction === 'left') {
		proposedX -= 4
	} else if(direction === 'right') {
		proposedX += 4
	} else if (direction === 'up') {
		proposedY -= 4
	} else if (direction === 'down') {
		proposedY += 1
	} 

	if(!board.collisionDetect(proposedX,proposedY) && !board.borderDetect(proposedX,proposedY)) {
		this.x = proposedX
		this.y = proposedY
	} 
}
//stuck points: x=1219-1228, y=15-24
































