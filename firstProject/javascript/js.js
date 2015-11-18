var canvas = document.getElementById('myCanvas');
var drawTriangle = function(x1,y1,x2,y2,x3,y3,x4,y4) {
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

//top triangle
drawTriangle(1,5,1200,12,30,80,0,0)
//level 1
drawTriangle(80,110,1300,40,1200,160,80,110)
//level 2
drawTriangle(40,250,1200,200,1,140,40,250)
//level 3
drawTriangle(50,290,1300,230,1200,350,55,290)
//level 4
drawTriangle(50,420,1200,400,1,320,40,400)
//level 5
drawTriangle(50,450,1300,430,1200,560,55,450)
//level 6
drawTriangle(50,580,1200,600,1,480,10,500)
//level 7
drawTriangle(1,800,1200,620,1200,620,40,605)
//level 8
drawTriangle(600,750,1300,640,1200,840,40,605)