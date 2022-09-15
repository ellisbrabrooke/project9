
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);

}

function draw() 
{

  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  

  
  
  
    // write the code to change background color 
    // to red when RIGHT_ARROW is pressed
    
    
  
    if (keyIsDown('w')) 
    {
      background("blue");
      
    }
   
      if (keyIsDown('a')) 
    {
      background("yellow");
     
    }
  
    if (keyIsDown('s')) 
    {
      background("green");
   
    }
  
    if (keyIsDown('d'))
    {
      background("green");
    }
  
  
    
    drawSprites();
  
  

}