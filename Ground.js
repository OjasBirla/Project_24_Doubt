class Ground{
    constructor(){
        var option = {
            isStatic: false
        }
        this.body = Bodies.rectangle(400, 690, 800, 20, option);
        World.add(world, this.body);
    }
    display(){
        rectMode(CENTER);
        rect(400, 690, 800, 20);
    }
}