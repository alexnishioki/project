var Triangle = function(x1,y1,x2,y2,x3,y3,x4,y4) {
	this.x1 = x1
	this.y1 = y1
	this.x2 = x2
	this.y2 = y2
	this.x3 = x3
	this.y3 = y3
	this.x4 = x4
	this.y4 = y4

}
Triangle.prototype.draw = function(canvas) {
	if(canvas.getContext){
    var ctx = canvas.getContext('2d')
    ctx.beginPath()
    ctx.moveTo(this.x1,this.y1)
    ctx.lineTo(this.x2,this.y2)
    ctx.lineTo(this.x3,this.y3)
    ctx.lineTo(this.x4,this.y4)
     ctx.fillStyle = 'black';
     ctx.shadowColor = '#999';
     ctx.shadowBlur = 20;
     ctx.shadowOffsetX = 15;
     ctx.shadowOffsetY = 15;
     ctx.fill();
     ctx.stroke()
    
  }
}