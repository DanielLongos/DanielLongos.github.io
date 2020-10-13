const heading1 = document.querySelector("h1");
heading1.textContent = "Hello World!";

/*document.querySelector("html").onclick = function(){
    alert("Ouch! Stop pocking me!");
}*/

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
let myImage = document.querySelector("img");

myImage.onclick = function(){
    let mySrc = myImage.getAttribute("src");

    if (mySrc == "images/owl.jpg") {
        myImage.setAttribute("src", "images/eren.jpg");
    } else {
        myImage.setAttribute("src", "images/owl.jpg");
    }
}

function setUserName() {
    let myName = prompt("Please enter your Name");
    
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla is cool, " + myName;
}

/*if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = "Mozilla is cool, " + storedName;
}*/
myButton.onclick = function (){
    setUserName();
}
