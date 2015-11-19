
var MainGuy = function(x,y,size,color) {
	this.x = x
	this.y = y
	this.size = size
	this.color = color
	

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

MainGuy.prototype.move = function(direction) {

	if(direction === 'left') {
		this.x -= 8
		//add event listener?
	} else if(direction === 'right') {
		this.x += 8
	} else if (direction === 'up') {
		this.y += 8
	} else if (direction === 'down') {
		this.y -= 8
	}
}





canvasRef.addEventListener('keypress', function(event) {
	if(event.keycode === 37) {
		MainGuy.move
	}
})














