function validatePasswords() {
    var firstPassword = document.getElementById("firstPassword").value;
	
    var secondPassword = document.getElementById("secondPassword").value;

    if (firstPassword.length < 8 ) {
        alert("The length of the first password is less than 8 letters!")
    } else  if (secondPassword.length < 8 ) {
        alert("The length of the second password is less than 8 letters!")
	} else if (firstPassword !== secondPassword) {
        alert("Two passwords don't match!")
    } else {
        alert("Everything is good!")
    }
}
