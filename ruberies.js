class ruby {
    constructor (x,y){
    var option = {density:40 , friction:0.0000000000000001, restitution:0.000003}
    this.body = Bodies.circle(x,y,25,option)  
    this.radius=25
    World.add(world,this.body)
}
 display(){
  var pos = this.body.position
  var angle = this.body.angle 
  push()
  translate (pos.x,pos.y)
  rotate(angle)
  fill("pink")
  ellipseMode(CENTER)
  ellipse(0,0,this.radius,this.radius)
  pop()
 }
}