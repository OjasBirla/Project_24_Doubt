class Dustbin{
    constructor(x, y, width, height){
        var options = {
            isStatic: true,
            restitution: 1,
            friction: 0.3,
            density: 1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        World.add(world, this.body);
    }
    display(){
        rectMode(CENTER);
        rect(this.x, this.y, this.width, this.height);
    }
}