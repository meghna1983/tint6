class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,


      }
      this.visiblity=255
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      if(this.body.speed<2.5){
        
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);

    }

  else{
  World.remove(world,this.body)
  push ();
  this.visiblity=this.visiblity-5
   tint(225,this.visiblity)
   
   pop ()
  }}}