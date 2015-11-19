var Board = function (entities) {
	this.entities = entities
	this.canvas = document.createElement("canvas")
	this.canvas.height = 700
	this.canvas.width = 1300
}
Board.prototype.draw = function() {
	if(this.canvas.getContext){
	  var ctx = this.canvas.getContext('2d')
	ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
	for(var i = 0; i < this.entities.length; i++) {
		this.entities[i].draw(this.canvas)
	}
}
}


//this.canvas.getContext('2d').clearRect(0,0, canvas.width,canvas.height)