var entities = []
    //board triangles
    entities.push(new Triangle(1,5,1200,12,30,80,0,0));
    entities.push(new Triangle(80,110,1300,40,1200,160,80,110));
    entities.push(new Triangle(40,250,1200,200,1,140,40,250));
    entities.push(new Triangle(50,290,1300,230,1200,350,55,290));
    entities.push(new Triangle(50,420,1200,400,1,320,40,400));
    entities.push(new Triangle(50,450,1300,430,1200,560,55,450));
    entities.push(new Triangle(50,580,1200,600,1,480,10,500));
    entities.push(new Triangle(1,800,1200,620,1200,620,40,605));
    entities.push(new Triangle(600,750,1300,640,1200,840,40,605));
  
    var newBackground = new Background(103,-650,400,'#840101')
    entities.unshift(newBackground)
    var newBackground2 = new Background(2000,-145,400,'#840101')
    entities.unshift(newBackground2)
    var newBackground3 = new Background(1000,1400,400,'#840101')
    entities.unshift(newBackground3)
    var newBackground4 = new Background(-1200,800,400,'#840101')
    entities.unshift(newBackground4)
    
    //guy
    var newMainGuy = new MainGuy(1224,32,7,'black')
    entities.push(newMainGuy);
    //other guy
    var newGuyTwo = new GuyTwo(1240,640,8,'black')
    entities.push(newGuyTwo)

//listen for keypress on canvas
//based on what key is pressed call the move method
    var gameBoard = new Board(entities)
    var game = document.getElementById("gameBoard")
    game.appendChild(gameBoard.canvas)
    gameBoard.draw()

//MainGuy movement
document.body.addEventListener('keydown', function(event) {
  if(event.keyCode === 37 || event.keyCode === 65) {
    newMainGuy.move('left',gameBoard)
  }
  if(event.keyCode === 39 || event.keyCode === 68) {
    newMainGuy.move('right',gameBoard)
  }
  if(event.keyCode === 40 || event.keyCode === 83) {
    newMainGuy.move('up',gameBoard)
  }
  if(event.keyCode === 38 || event.keyCode === 87) {
    newMainGuy.move('down',gameBoard)
  }
  gameBoard.draw()
})

setInterval(function() {
  newMainGuy.move('down',gameBoard) 
  gameBoard.draw()
},100)


setInterval(function() {
  newBackground.move2('down',gameBoard)
  gameBoard.draw()
},60)

setInterval(function() {
  newBackground2.move2('left',gameBoard)
  gameBoard.draw()
},60)

setInterval(function() {
  newBackground3.move2('up',gameBoard)
  gameBoard.draw()
},60)

setInterval(function() {
  newBackground4.move2('right',gameBoard)
  gameBoard.draw()
},60)
var point1 = new Point(1204,38,3,'#840101')
entities.push(point1)
var point2 = new Point(184,93,3,'#840101')
entities.push(point2)
//var point3 = new Point(464,154,3,'#840101')
//entities.push(point3)
//var point4 = new Point(944,177,3,'#840101')
//entities.push(point4)
//var point5 = new Point(744,244,3,'#840101')
//entities.push(point5)
//var point6 = new Point(1144,227,3,'#840101') //
//entities.push(point6)
//var point7 = new Point(304,268,3,'#840101')
//entities.push(point7)
//var point8 = new Point(530,347,3,'#840101')
//entities.push(point8)
//var point9 = new Point(994,378,3,'#840101')
//entities.push(point9)
//var point10 = new Point(680,434,3,'#840101')
//entities.push(point10)
//var point11 = new Point(724,65,3,'#840101') //
//entities.push(point11)
//var point12 = new Point(200,494,3,'#840101')
//entities.push(point12)

function pointRemove(point,cx,cy) {
setInterval(function() {
    if(newMainGuy.x >= cx && newMainGuy.y >= cy) {
    point.pickUp('up',gameBoard)
    gameBoard.draw()
    } if(point.y < -3) {
    delete point.y
    delete point.x
    delete point.size
    delete point.color

    gameBoard.draw()
  }
},5)
}



pointRemove(point1,1204,38)
pointRemove(point2,184,93)
pointRemove(point3,464,154)
pointRemove(point4,944,178)
pointRemove(point5,744,247)
pointRemove(point6,1144,227) //
pointRemove(point7,304,268)
pointRemove(point8,530,347)
pointRemove(point9,994,378)
pointRemove(point10,680,434)
pointRemove(point11,724,65)
pointRemove(point12,200,494)


//help bubble

var help1 = new Point(1230,632,1,'black')
entities.push(help1)
var help2 = new Point(1227,625,1,'black')
entities.push(help2)