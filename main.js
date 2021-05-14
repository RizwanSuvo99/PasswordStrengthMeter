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
  // This is for characters
  let passLength = pass.value.length;
  char.innerHTML = passLength + " characters";

  // Lowercase, Uppercase, Number, Symbol

  // Declaring the variables
  let i, character;
  let count = 0;
  let check = 0;
  let arr = [];
  let condText = document.getElementsByClassName("condition-text");
  let condImg = document.getElementsByClassName("condition-img");

  // Creating an array from Password value
  for (i = 0; i < passLength; i++) {
    character = pass.value.slice(i, i + 1);
    arr.push(character);
  }

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
      check++;
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
      check++;
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
      check++;
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
      check++;
    }
  }
  count = 0;

  //8 characters condition check.
  let eightText = document.getElementById("eight");
  if (passLength == 0) {
    eightText.style.visibility = "hidden";
  } else if (passLength < 8) {
    eightText.style.visibility = "visible";
    eightText.innerHTML = "Password must be at least 8 characters";
    eightText.style.color = "red";
  } else {
    check++;
    if (check == 5) {
      eightText.style.visibility = "visible";
      eightText.innerHTML = "Looks Like a Good Password!";
      eightText.style.color = "rgb(22,199,167)";
    } else {
      eightText.style.visibility = "visible";
      eightText.innerHTML = "Very Weak Password!";
      eightText.style.color = "orange";
    }
  }

  // This is for validation bar
  if (passLength == 0) {
    bar.style.width = "0%";
  } else if (passLength > 0 && passLength <= 4) {
    bar.style.width = "33%";
    bar.style.backgroundColor = "red";
  } else if (passLength > 4 && passLength <= 7) {
    bar.style.width = "66%";
    bar.style.backgroundColor = "orange";
  } else if (check == 5) {
    bar.style.width = "100%";
    bar.style.backgroundColor = "#16c7a1";
  }

  // Shield and Border color change
  if (passLength == 0) {
    root.style.setProperty("--visibility", "hidden");
    pass.style.borderColor = "gray";
    root.style.setProperty("--border", "2px solid gray");
    inputImg.style.borderColor = "gray";
  } else if (check >= 1 && check <= 4) {
    root.style.setProperty("--visibility", "visible");
    root.style.setProperty("--shield", "url(images/shield-x.svg)");
    pass.style.borderColor = "red";
    root.style.setProperty("--border", "2px solid red");
    inputImg.style.borderColor = "red";
  } else if (check == 5) {
    root.style.setProperty("--visibility", "visible");
    root.style.setProperty("--shield", "url(images/shield-check.svg)");
    pass.style.borderColor = "rgb(22,199,167)";
    root.style.setProperty("--border", "2px solid rgb(22,199,167)");
    inputImg.style.borderColor = "rgb(22,199,167)";
  }
});
