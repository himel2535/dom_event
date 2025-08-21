// option 2 to do handle event-->
function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// option 3 to do handle event (get element by id and then onclick)-->
const btnMakeBlue = document.getElementById("btn-make-blue");
// console.log(btnMakeBlue);
btnMakeBlue.onclick = function makeBlue() {
  document.body.style.backgroundColor = "blue";
};

// option 3 different version to do make handler event-->
const btnMakePurple = document.getElementById("btn-make-purple");
// console.log(btnMakePurple)
btnMakePurple.onclick = makePurple;
function makePurple() {
  document.body.style.backgroundColor = "purple";
}
