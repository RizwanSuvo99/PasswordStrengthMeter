let pass = document.getElementById("password");
let root = document.querySelector(":root");
let inputImg = document.getElementById("input-img");
let bar = document.getElementById("bar");
let char = document.getElementById("char");

inputImg.addEventListener("click", function () {
  if (inputImg.dataset.inputImgSrc == "images/eye-hide.png") {
    inputImg.setAttribute("src", "images/eye-show.png");
    pass.setAttribute("type", "text");
    inputImg.dataset.inputImgSrc = "images/eye-show.png";
  } else {
    inputImg.setAttribute("src", "images/eye-hide.png");
    pass.setAttribute("type", "password");
    inputImg.dataset.inputImgSrc = "images/eye-hide.png";
  }
});

pass.addEventListener("input", function () {
  // root.style.setProperty("--display", "block");

  // This is for characters
  let passLength = pass.value.length;
  char.innerHTML = passLength + " characters";
  // This is for validation bar
  if (passLength == 0) {
    bar.style.width = "0%";
  } else if (passLength > 0 && passLength <= 4) {
    bar.style.width = "25%";
    bar.style.backgroundColor = "red";
  } else if (passLength > 4 && passLength <= 8) {
    bar.style.width = "50%";
    bar.style.backgroundColor = "orange";
  } else if (passLength > 9 && passLength <= 12) {
    bar.style.width = "75%";
    bar.style.backgroundColor = "#ffe77aff";
  } else {
    bar.style.width = "100%";
    bar.style.backgroundColor = "#16c7a1";
  }

  // Lowercase, Uppercase, Number, Symbol

  // Creating an array from Password value
  let arr = [];
  let character;
  for (let i = 0; i < passLength; i++) {
    character = pass.value.slice(i, i + 1);
    arr.push(character);
  }

  /*
  
  This
  TAsk 
  is
  for 
  rizwan
  vai

  */

  // Declaring the variables
  let check = 0;
  let count = 0;
  let i = 0;
  let j = 0;
  let eightText = document.getElementById("eight");
  let condText = document.getElementsByClassName("condition-text");

  //8 characters condition check.
  if (passLength == 0) {
    eightText.style.display = "none";
  } else if (passLength >= 8) {
    check++;
    eightText.style.display = "none";
  } else {
    eightText.style.display = "block";
  }

  //common function for Lowercase, Uppercase, Number condition
});
