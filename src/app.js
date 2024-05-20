
const c=document.getElementById("canvas");
c.width=window.innerWidth;
c.height=window.innerHeight;
const ctx=c.getContext("2d");


//  draw line
ctx.moveTo(0,0);
ctx.lineTo(window.innerWidth,window.innerHeight);
ctx.stroke();

// draw rectangle
ctx.beginPath();
ctx.rect(100,100,200,100); 
// ctx.rect(window.innerWidth/2-100,window.innerHeight/2-100,200,100);
ctx.strokeStyle ="green";
ctx.lineWidth=10;
ctx.stroke();
ctx.fillStyle ="red";
ctx.fill();

//Text
ctx.font="30px Arial";
ctx.textAlign="center";
ctx.fillText("Hello Shandiya",window.innerWidth/2,window.innerHeight/2);

//Image Rendering
const img=document.querySelector("img");
ctx.drawImage(img,100,100);