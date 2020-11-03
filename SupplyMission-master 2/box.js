class Box{
    constructor(x,y,width,height){
     var body_options={
         restitution:0.8, 
        friction:0.5, 
         density:1.0
     }
        this.body = Bodies.rectangle(x,y,width,height,body_options);
     World.add(world,this.body);
     this.body.width = width;
     this.body.height = height;
    }
    display(){
        var angle = this.body.angle; 
        push(); 
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        

        
        
        this.body = createSprite(this.body.position.x,this.body.position.y,this.body.width,this.body.height);
        this.body.shapeColor = "red";
        pop();
    }
}