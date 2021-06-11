class SlingShot{
    constructor(bodyA,pointB){
     var options={
          bodyA : bodyA,
         pointB: pointB,
          stiffness :0.04,
          length :80
}


this.pointB=pointB;
        this.SlingShot=Constraint.create(options)
        World.add(world,this.SlingShot)
    }

   fly(){

    this.SlingShot.bodyA=null;
}

display(){
   if(this.SlingShot.bodyA ){
    var posA=this.SlingShot.bodyA.position;
    var posB=this.pointB;
    
    strokeWeight(4)
    line(posA.x,posA.y,posB.x,posB.y) 
    
   }

    


}

}