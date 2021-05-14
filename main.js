// Declaring the variables

let pass = document.getElementById("password");
let root = document.querySelector(":root");
let inputImg = document.getElementById("input-img");
let bar = document.getElementById("bar");
let char = document.getElementById("char");

// Show Hide js
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

  //8 characters condition check.
  let eightText = document.getElementById("eight");
  if (passLength == 0) {
    eightText.style.display = "none";
  } else if (passLength >= 8) {
    eightText.style.display = "none";
  } else {
    eightText.style.display = "block";
  }

  // Lowercase, Uppercase, Number, Symbol

  // Declaring the variables
  let i, character;
  let count = 0;
  let arr = [];
  let condText = document.getElementsByClassName("condition-text");
  let condImg = document.getElementsByClassName("condition-img");

  // Creating an array from Password value
  for (i = 0; i < passLength; i++) {
    character = pass.value.slice(i, i + 1);
    arr.push(character);
  }
  console.log(arr);

  // This block is for lowercase letters.
  if (arr.length == 0) {
    condText[0].style.color = "#a4bcc3";
    condImg[0].setAttribute("src", "images/x.svg");
  } else {
    for (i = 0; i < passLength; i++) {
      if (arr[i] >= "a" && arr[i] <= "z") {
        count++;
      }
    }
    if (count <= 0) {
      condText[0].style.color = "red";
      condImg[0].setAttribute("src", "images/x-red.svg");
    } else {
      condText[0].style.color = "rgb(22, 199, 161)";
      condImg[0].setAttribute("src", "images/check.svg");
    }
  }
  count = 0;

  // This block is for Uppercase letters
  if (arr.length == 0) {
    condText[1].style.color = "#a4bcc3";
    condImg[1].setAttribute("src", "images/x.svg");
  } else {
    for (i = 0; i < passLength; i++) {
      if (arr[i] >= "A" && arr[i] <= "Z") {
        count++;
      }
    }
    if (count <= 0) {
      condText[1].style.color = "red";
      condImg[1].setAttribute("src", "images/x-red.svg");
    } else {
      condText[1].style.color = "rgb(22, 199, 161)";
      condImg[1].setAttribute("src", "images/check.svg");
    }
  }
  count = 0;

  // This block is for Numbers
  if (arr.length == 0) {
    condText[2].style.color = "#a4bcc3";
    condImg[2].setAttribute("src", "images/x.svg");
  } else {
    for (i = 0; i < passLength; i++) {
      if (arr[i] >= "0" && arr[i] <= "9") {
        count++;
      }
    }
    if (count <= 0) {
      condText[2].style.color = "red";
      condImg[2].setAttribute("src", "images/x-red.svg");
    } else {
      condText[2].style.color = "rgb(22, 199, 161)";
      condImg[2].setAttribute("src", "images/check.svg");
    }
  }
  count = 0;

  // This block is for Symbols
  if (arr.length == 0) {
    condText[3].style.color = "#a4bcc3";
    condImg[3].setAttribute("src", "images/x.svg");
  } else {
    for (i = 0; i < passLength; i++) {
      if (
        !(arr[i] >= "a" && arr[i] <= "z") &&
        !(arr[i] >= "A" && arr[i] <= "Z") &&
        !(arr[i] >= "0" && arr[i] <= "9")
      ) {
        count++;
      }
    }
    if (count <= 0) {
      condText[3].style.color = "red";
      condImg[3].setAttribute("src", "images/x-red.svg");
    } else {
      condText[3].style.color = "rgb(22, 199, 161)";
      condImg[3].setAttribute("src", "images/check.svg");
    }
  }
  count = 0;
});
