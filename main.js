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
  let inputVal = pass.value;
  char.innerHTML = inputVal.length + " characters";
  // This is for validation bar
  if (inputVal.length == 0) {
    bar.style.width = "0%";
  } else if (inputVal.length > 0 && inputVal.length <= 4) {
    bar.style.width = "25%";
    bar.style.backgroundColor = "red";
  } else if (inputVal.length > 4 && inputVal.length <= 8) {
    bar.style.width = "50%";
    bar.style.backgroundColor = "orange";
  } else if (inputVal.length > 9 && inputVal.length <= 12) {
    bar.style.width = "75%";
    bar.style.backgroundColor = "#ffe77aff";
  } else {
    bar.style.width = "100%";
    bar.style.backgroundColor = "#16c7a1";
  }
});
