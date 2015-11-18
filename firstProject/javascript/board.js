var Board = function (entities) {
	this.entities = entities
	this.canvas = document.createElement("canvas")
	this.canvas.height = 700
	this.canvas.width = 1300
}
Board.prototype.draw = function() {
	for(var i = 0; i < this.entities.length; i++) {
		this.entities[i].draw(this.canvas)
	}
}