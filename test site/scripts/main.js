const myImage = document.querySelector ("img");

myImage.onclick = function(){
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.jpg") {
    myImage.setAttribute("src","images/firefox2.jpg");
  }  else{
    myImage.setAttribute("src", "images/firefox-icon.jpg");
  }
}

let myButton = document.querySelector ("button")
let myHeading = document.querySelector ('h1')

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
   setUserName();
  } else {
   localStorage.setItem("name", myName);
   myHeading.textContent = `My cat attitude, ${myName}`;
  }
}

  if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `My cat attitude, ${storedName}`;
}

  myButton.onclick = function(){
    setUserName();
  };