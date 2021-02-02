
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;
	
    plane= new Plane(500,height,1200,30)
    g1 = new gold (100,550)
	g2 = new gold (100,500)
	g3 = new gold (100,450)
	g4 = new gold (100,400)
	s1 = new silver(200,550)
	s2 = new silver(200,500)
	s3 = new silver(200,450)
	s4 = new silver(200,400)
	r1 = new ruby (300,550)
	r2 = new ruby (300,500)
	r3 = new ruby (300,450)
	r4 = new ruby (300,400)
	w1 = new wood (400,550)
	w2 = new wood (400,500)
	w3 = new wood (400,450)
	w4 = new wood (400,400)
	
	g5 = new gold (500,550)
	g6 = new gold (500,500)
	g7 = new gold (500,450)
	g8 = new gold (500,400)
	s5 = new silver(600,550)
	s6 = new silver(600,500)
	s7 = new silver(600,450)
	s8 = new silver(600,400)
	r5 = new ruby (700,550)
	r6 = new ruby (700,500)
	r7 = new ruby (700,450)
	r8 = new ruby (700,400)
	w5 = new wood (800,550)
	w6 = new wood (800,500)
	w7 = new wood (800,450)
	w8 = new wood (800,400)
	//Engine.run(engine);
  
}


function draw() {
  background(224,255,255);
  Engine.update(engine)
 
  plane.display()
  g1.display()
  g2.display()
  g3.display()
  g4.display()
   s1.display()
   s2.display()
   s3.display()
   s4.display()
   r1.display()
   r2.display()
   r3.display()
   r4.display()
   w1.display()
   w2.display()
   w3.display()
   w4.display()   

   
  g5.display()
  g6.display()
  g7.display()
  g8.display()
   s5.display()
   s6.display()
   s7.display()
   s8.display()
   r5.display()
   r6.display()
   r7.display()
   r8.display()
   w5.display()
   w6.display()
   w7.display()
   w8.display()  
  
}



