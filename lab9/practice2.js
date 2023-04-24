function changeColor() {
    var modifiedText = document.getElementById("border");

	var redBorder = document.getElementById("redBorder").value;
    var greenBorder = document.getElementById("greenBorder").value;
    var blueBorder = document.getElementById("blueBorder").value;
	modifiedText.style.borderColor = `rgb( ${redBorder}, ${greenBorder}, ${blueBorder} )`;
	
    var borderWidth = document.getElementById("borderWidth").value;
	modifiedText.style.borderWidth = borderWidth + "px";
	
    var redBackground = document.getElementById("redBackground").value;
    var greenBackground = document.getElementById("greenBackground").value;
    var blueBackground = document.getElementById("blueBackground").value;
    modifiedText.style.backgroundColor = `rgb( ${redBackground}, ${greenBackground}, ${blueBackground} )`;
}