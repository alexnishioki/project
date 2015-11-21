var Board = function (entities) {
	this.entities = entities
	this.canvas = document.createElement("canvas")
	this.canvas.height = 685
	this.canvas.width = 1273
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
Board.prototype.collisionDetect = function(x,y) {
	console.log("hello")
	for(var i = 0; i < this.entities.length; i++) {
		console.log(this.entities[i])
		if(pointinpolygon(x,y,entities[i].vs)) {
			return false
		}

	}
	return true
		
}


Board.prototype.borderDetect = function(x,y) {
	if(x < 0 || x > this.canvas.width) {
	  return true
}   if(y < 0 || y > this.canvas.height) {
	  return true
}
return false
}

	
function pointinpolygon(x,y,vs) {
	// thanks to https://github.com/substack/point-in-polygon/blob/master/index.js
	// ray-casting algorithm based on
    // http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html
    
    
    var inside = false;
    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        var xi = vs[i][0], yi = vs[i][1];
        var xj = vs[j][0], yj = vs[j][1];
        
        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    
    return inside;
}











		

/* MainGuy.prototype.move = function(direction,board) {
	var proposedX = this.x
	var proposedY = this.y
	if(direction === 'left') {
		proposedX -= 8
	} else if(direction === 'right') {
		proposedX += 8
	} else if (direction === 'up') {
		proposedY -= 8
	} else if (direction === 'down') {
		proposedY += 8
	} 
	var collisionDetect = board.collisionDetect(proposedX,proposedY)
	if(collisionDetect) {
		this.x = proposedX
		this.y = proposedY
	} 
}
*/




//this.canvas.getContext('2d').clearRect(0,0, canvas.width,canvas.height)