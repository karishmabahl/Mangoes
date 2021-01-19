class Mango{

constructor(x, y){

 var options = {
     isStatic : true,
     restitution: 0.2,
     friction: 1

 }   
 this.body = Bodies.rectangle(x, y, 50, 50, options);
 this.image = loadImage("mango.png");
 World.add(world, this.body);
// this.body.position.x = x;
// this.body.position.y = y;

}
display(){
   // var angle = this.body.angle;
        push();
     //   translate(this.body.position.x, this.body.position.y);
       // rotate(angle);
        
       imageMode(CENTER);
       image(this.image, this.body.position.x, this.body.position.y, 50, 50);
pop();

}


}