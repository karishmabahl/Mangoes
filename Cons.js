class Cons{

    
        constructor(bodyA, pointB){
            var options = {
                bodyA: bodyA,
                pointB: pointB,
                stiffness: 0.009,
                length: 5
                
            }
            this.sling = Matter.Constraint.create(options) ;
            World.add(world, this.sling);
        }

        attach(body){
            this.sling.bodyA = body;
        }
     

        fly(){
            this.sling.bodyA = null;
        }
    

        display(){
            
                if (this.sling.bodyA){
                    push();
                var pointA = this.sling.bodyA.position;
                var pointB = this.sling.pointB;
                strokeWeight(4);
                line(pointA.x, pointA.y, pointB.x, pointB.y);
                pop();
            }
        }
          
                
    
                
    }
    

 