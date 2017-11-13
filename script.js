var information = "Here, statement(s) may be a single statement or a block of statements."+
						"The condition may be any expression, and true is any non zero value."+
						"When executing, if the boolean_expression result is true, then the actions"+
						"inside the loop will be executed. This will continue as long as the expression"+
						"result is true. When the condition becomes false, program control passes to" +
						"the line immediately following the loop.";

var image = "https://www.tutorialspoint.com/java/images/nm,mn.jpg";
function show(){
	document.getElementById("content").innerHTML=information;
}

function showMessage() {

	var yourSelect = document.getElementById( "select_box" );
	if( yourSelect.options[ yourSelect.selectedIndex ].value == "java"){
		document.getElementById("content").innerHTML=information;
		document.getElementById("image").src=image;
	}
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function resizeIMGClass(class_name,width,height){
  var myImage = document.getElementsByClassName(class_name + ' img');
  console.log(myImage);
  myImage.style.width=width;
  myImage.style.height=height;
  document.getElementsByClassName(class_name + ' img').style.height=height+'px';
}
