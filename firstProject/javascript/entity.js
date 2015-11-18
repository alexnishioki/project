var Entity = function(moveR,moveD,size,cutE) {
	this.moveR = moveR
	this.moveD = moveD
	this.size = size
	this.cutE = cutE

}

Entity.prototype.place = function() {
	if(canvas.getContext){
    var ctx = canvas.getContext('2d')
    ctx.beginPath()
    ctx.arc(this.moveR,this.moveD,this.size,this.cutE,2*Math.PI)
     ctx.stroke()
     ctx.fill()
}


 