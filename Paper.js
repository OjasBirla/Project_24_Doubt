class Paper{
    constructor(){
        var option = {
            isStatic: false,
            restitution: 3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.rectangle(50, 675, 20, 20, option);
        World.add(world, this.body);
    }
    display(){
        ellipseMode(CENTER);
        ellipse(50, 650, 20, 20);
    }
}