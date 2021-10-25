class Man  {
    constructor(x,y,width,height){
      var options = {
        isStatic: false
    }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("gun.gif");
      this.Image = loadImage("gun2.gif")
    }
  
    display() {
      // if(this.body.mousePressed < 3){
      //   super.display();
      //  }
      this.body.position.x = mouseX;
      push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        if(keyPressed("space")){
          image(this.image, 0, 0, this.width, this.height);
        }
        else{
          image(this.Image, 0, 0, this.width, this.height);
        }
        
        pop(); 
        

    }
    
  }