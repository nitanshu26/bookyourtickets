function onlinebooking()
{
	window.location = "onlinebooking.html";
}
function sub()
{

	var x=Number(document.getElementById("price")).value;
	var y=Number(document.getElementById("not")).value;
	var z=x*y;
	alert(z);
}
function over(img,imgsrc)
{
	img.src=imgsrc;
}
function out(img,imgsrc)
{
	img.src=imgsrc;
}