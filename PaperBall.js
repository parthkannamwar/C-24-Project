class Paperball
{
    constructor(x,y,radius)
    {
        var boptions=
        {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.body=Bodies.circle(x,y,radius,boptions)
        this.radius=radius;

    World.add(engine.world,this.body);
    }

    display()
    {
        fill("red");
        ellipse(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}