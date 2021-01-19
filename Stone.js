class Stone {

    constructor(x, y, w, h) {

        var options = {
            isStatic: false,
            density: 0.9
        }

        this.body = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.body)
        this.width = w;
        this.height = h;
        //this.body.position.x = x;
        //this.body.position.y = y;

        this.image = loadImage("stone.png");

    }

    display() {

        //this.body.position.y = y;
        //push();
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        //pop();
    }

}