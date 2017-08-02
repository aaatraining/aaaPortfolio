var image1=new Image()
image1.src="image/FactsAbout.jpg"
var image2=new Image()
image2.src="image/Maths.jpg"
var image3=new Image()
image3.src="image/cvlogo.jpg"



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
window.location="cv.html"
else if (whichimage==2)
window.location="cv.html"
else if (whichimage==3)
window.location="cv.html"
}