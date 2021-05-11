let pass = document.getElementsByClassName("password")[0];
let show = document.getElementsByClassName("show")[0];
let hide = document.getElementsByClassName("hide")[0];
let para = document.getElementsByClassName("test")[0];
let clear = document.getElementsByClassName("clear")[0];
let submit = document.getElementsByClassName("submit")[0];

show.addEventListener("click", function () {
  pass.setAttribute("type", "text");
  let val = pass.value;
  para.innerHTML = val;
});

hide.addEventListener("click", function () {
  pass.setAttribute("type", "password");
  let val = pass.value;
  para.innerHTML = val;
});

clear.addEventListener("click", function () {
  pass.value = "";
});

submit.addEventListener("click", function () {
  let arr = [];
  let char;
  let passLength = pass.value.length;
  for (let i = 0; i < passLength; i++) {
    char = pass.value.slice(i, i + 1);
    arr.push(char);
  }

  console.log(arr);

  let check=0;

  let count=0;

  if(passLength>=8){
    check++;
  }
  else{
    console.log("Password Must be at least Eight Character!");
  }

  for(let i=0;i<passLength;i++)
  {
    if(arr[i]>='a' && arr[i]<='z')
    {
      count++;
    }
  }
  if(count>0)
  {
    check++;
  }
  else{
    console.log("Password Must Contain a Lowercase Character!");
  }
  count=0;


  for(let i=0;i<passLength;i++)
  {
    if(arr[i]>='A' && arr[i]<='Z')
    {
      count++;
    }
  }
  if(count>0)
  {
    check++;
  }
  else{
    console.log("Password Must Contain a Uppercase Character!");
  }
  count=0;


  for(let i=0;i<passLength;i++)
  {
    if(arr[i]>='0' && arr[i]<='9')
    {
      count++;
    }
  }
  if(count>0)
  {
    check++;
  }
  else{
    console.log("Password Must Contain a Number!");
  }
  count=0;

  for(let i=0;i<passLength;i++)
  {
    if(!(arr[i]>='0' && arr[i]<='9') && !(arr[i]>='a' && arr[i]<='z') && !(arr[i]>='A' && arr[i]<='Z'))
    {
      count++;
    }
  }
  if(count>0)
  {
    check++;
  }
  else{
    console.log("Password Must Contain a Special Character!");
  }

  if(check==5){
    console.log("Password accepted");
  }
  else{
    console.log("Password Not Accepted");
  }
});
