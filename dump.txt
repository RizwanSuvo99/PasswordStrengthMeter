//Declaring the variables.
let pass = document.getElementsByClassName("password")[0];
let show = document.getElementsByClassName("show")[0];
let hide = document.getElementsByClassName("hide")[0];
let clear = document.getElementsByClassName("clear")[0];
let submit = document.getElementsByClassName("submit")[0];

//Common function for show hide
function showHide(btn, type) {
  btn.addEventListener("click", function () {
    pass.setAttribute("type", type);
  });
}

showHide(show, "text");
showHide(hide, "password");

//clear button js
clear.addEventListener("click", function () {
  pass.value = "";
});

//submit button js
submit.addEventListener("click", function () {
  //creating an array from each characters of input value.
  let arr = [];
  let char;
  let passLength = pass.value.length;
  for (let i = 0; i < passLength; i++) {
    char = pass.value.slice(i, i + 1);
    arr.push(char);
  }
  console.log(arr);

  //password validation code.

  //declaring variables.
  let check = 0;
  let count = 0;
  let i = 0;

  //8 characters condition check.
  if (passLength >= 8) {
    check++;
  } else {
    console.log("Password Must be at least Eight Character!");
  }

  //common function for Lowercase, Uppercase, Number condition
  function condition(start, end, msg) {
    for (i = 0; i < passLength; i++) {
      if (arr[i] >= start && arr[i] <= end) {
        count++;
      }
    }
    if (count > 0) {
      check++;
    } else {
      console.log(msg);
    }
    count = 0;
  }

  condition("a", "z", "Password Must Contain a Lowercase Character!");
  condition("A", "Z", "Password Must Contain a Uppercase Character!");
  condition("0", "9", "Password Must Contain a Number!");

  //Special character condition check.
  for (i = 0; i < passLength; i++) {
    if (
      !(arr[i] >= "0" && arr[i] <= "9") &&
      !(arr[i] >= "a" && arr[i] <= "z") &&
      !(arr[i] >= "A" && arr[i] <= "Z")
    ) {
      count++;
    }
  }
  if (count > 0) {
    check++;
  } else {
    console.log("Password Must Contain a Special Character!");
  }
  count = 0;

  //password validation
  if (check == 5) {
    console.log("Password accepted");
  } else {
    console.log("Password Not Accepted");
  }
});
