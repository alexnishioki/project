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
	for(var i = 0; i < this.entities.length; i++) {
		console.log(this.entities[i])
		if(pointinpolygon(x,y,entities[i].vs)) {
			return false

} else if(x < 76) {
			entities[i].vs = [[x-50,y-50],[x+1250,y-50],[x+1250,y+100],[x-20,y+30]];
		} else if(x > 1200 && y > 190) {
			entities[i].vs = [[x-1200,y-55],[x+10,y-2],[x+10,y+25],[x-1200,y+90]];
		} else if(y > 281 && x > 1290) {
			entities[i].vs = [[x-50,y-50],[x+1300,y-20],[x+1300,y+60],[x-20,y+30]];
		}  else if(x > 1220 && y > 410) {
		  	//entities[i].vs = [[x-50,y-50],[x-1300,y-20],[x-1300,y+100/*70*/],[x-50,y+20]]
		  	entities[i].vs = [[x-1200,y-55],[x+10,y-2],[x+10,y+25],[x-1200,y+90]];
		} else if(y > 550 && x > 48) {
			entities[i].vs = [[x-100,y-50],[x+1350/*1250*/,y-50],[x+1350/*1250*/,y+10/*4*/],[x-100,y+20/*40*/]];		
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











		

