var FallingRocks = function(x,y,size,color) {
	this.x = x
	this.y = y
	this.size = size
	this.color = color
	this.vs = [[x-size,y-size],[x+size,y-size],[x+size,y+size],[x-size,y+size]]
	

}

FallingRocks.prototype.draw = function(canvas) {
	if(canvas.getContext){
	  var ctx = canvas.getContext('2d');
	      ctx.beginPath();
	      ctx.arc(this.x,this.y,this.size,0,4 * Math.PI);
	      ctx.fillStyle = this.color;
     ctx.shadowColor = '#999';
     ctx.shadowBlur = 20;
     ctx.shadowOffsetX = 15;
     ctx.shadowOffsetY = 15;
     ctx.fill();
     ctx.stroke();
	     
	}
}




 

