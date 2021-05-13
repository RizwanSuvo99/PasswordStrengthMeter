let pass = document.getElementById("password");
let root = document.querySelector(":root");
let inputImg = document.getElementById("input-img");
let bar = document.getElementById("bar");
let char = document.getElementById("char");

// Problem in this block of code
inputImg.addEventListener("click", function () {
  if ((inputImg.src = "images/eye-hide.png")) {
    inputImg.setAttribute("src", "images/eye-show.png");
    pass.setAttribute("type", "text");
  } else {
    inputImg.setAttribute("src", "images/eye-hide.png");
    pass.setAttribute("type", "password");
  }
});

pass.addEventListener("input", function () {
  // root.style.setProperty("--display", "block");

  // This is for validation bar
  let inputVal = pass.value;
  char.innerHTML = inputVal.length + " characters";
  switch (inputVal.length) {
    case 1:
    case 2:
    case 3:
    case 4:
      bar.style.width = "25%";
      bar.style.backgroundColor = "red";
      break;
    case 5:
    case 6:
    case 7:
    case 8:
      bar.style.width = "50%";
      bar.style.backgroundColor = "orange";
      break;
    case 9:
    case 10:
    case 11:
    case 12:
      bar.style.width = "70%";
      bar.style.backgroundColor = "#ffe77aff";
      break;
    case 13:
    case 14:
    case 15:
    case 16:
      bar.style.width = "100%";
      bar.style.backgroundColor = "#16c7a1";
      break;
    default:
      if (inputVal.length >= 16) {
        bar.style.width = "100%";
        bar.style.backgroundColor = "#16c7a1";
      } else {
        bar.style.width = "100%";
        bar.style.backgroundColor = "transparent";
      }
  }
});
