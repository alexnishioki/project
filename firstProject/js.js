var canvas = document.getElementById('myCanvas');
var drawTriangleTop = function(x,y) {
  if(canvas.getContext){
    var ctx = canvas.getContext('2d')
    ctx.beginPath()
    ctx.moveTo(x,y)
    ctx.lineTo(1200,12)
    ctx.lineTo(30,80)
    ctx.stroke()
    ctx.fill()
  }
}
var drawTriangleRight = function(x1,y1,x2,y2,x3,y3,x4,y4) {
  if(canvas.getContext){
    var ctx = canvas.getContext('2d')
    ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    ctx.lineTo(x3,y3)
    ctx.lineTo(x4,y4)
    ctx.fill()
    
     ctx.stroke()
    
  }
}

var drawTriangleLeft = function(x1,y1,x2,y2,x3,y3,x4,y4) {
  if(canvas.getContext){
    var ctx = canvas.getContext('2d')
    ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    ctx.lineTo(x3,y3)
    ctx.lineTo(x4,y4)
    ctx.stroke()
    ctx.fill()
    
    
  }
}

var drawTriangleRight2 = function(x1,y1,x2,y2,x3,y3,x4,y4) {
  if(canvas.getContext){
    var ctx = canvas.getContext('2d')
    ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    ctx.lineTo(x3,y3)
    ctx.lineTo(x4,y4)
     ctx.stroke()
     ctx.fill()
    
  }
}


drawTriangleTop(1,5)
drawTriangleRight(80,110,1300,40,1200,160,80,110)
drawTriangleLeft(40,250,1200,200,1,140,40,250)
drawTriangleRight2(50,290,1300,230,1200,350,55,290)
drawTriangleLeft(50,420,1200,400,1,320,40,400)
drawTriangleRight2(50,450,1300,430,1200,560,55,450)
drawTriangleLeft(50,580,1200,600,1,480,10,500)
drawTriangleRight2(1,800,1200,620,1200,620,40,605)
drawTriangleRight2(600,750,1300,640,1200,840,40,605)


