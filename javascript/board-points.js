var Point = function(x,y,size,color,vs) {
	this.x = x
	this.y = y
	this.size = size
	this.color = color
	this.vs = [[x-size,y-size],[x+size,y-size],[x+size,y+size],[x-size,y+size]]
}

Point.prototype.draw = function(canvas) {
	if(canvas.getContext){
	  var ctx = canvas.getContext('2d')
	      ctx.beginPath();
	      ctx.arc(this.x,this.y,this.size,0,2 * Math.PI);
	      ctx.fillStyle = this.color;
	      ctx.lineWidth = 0;
     	   ctx.shadowColor = 'red';
     	   ctx.shadowBlur = 20;
     	   ctx.border = 0;
     	   ctx.shadowOffsetX = 15;
     	   ctx.shadowOffsetY = 15;
     	   ctx.fill();
     	   ctx.stroke()
	     
	}

}

Point.prototype.pickUp = function(direction,board) {
	//var proposedY = this.y
//for(var i = 0, count = 0; i < gameBoard.entities.length; i++) {
		if(direction === 'up') {
			this.y -= 2

		}
	}

