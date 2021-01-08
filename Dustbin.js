class Dustbin
{
    constructor(x,y,width,height)
    {
        var boptions=
        {
            isStatic : true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.body=Bodies.rectangle(x,y,width,height,boptions)
        this.width=width;
        this.height=height;

    World.add(engine.world,this.body);
    }

    display()
    {
        fill("yellow");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}