var image1=new Image()
image1.src="image/sd1.png"
var image2=new Image()
image2.src="image/sd2.png"
var image3=new Image()
image3.src="image/sd3.png"



var step=1
var whichimage=1
function slideit(){
if (!document.images)
return
document.images.slide.src=eval("image"+step+".src")
whichimage=step
if (step<3)
step++
else
step=1
setTimeout("slideit()",1800)
}
slideit()
function slidelink(){
if (whichimage==1)
window.location="info1.html"
else if (whichimage==2)
window.location="info2.html"
else if (whichimage==3)
window.location="info3.html"
}