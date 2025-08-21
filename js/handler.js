document
  .getElementById("btn-update-title")
  .addEventListener("click", function () {
    // console.log("btn clicked ok")
    const pageTitleElement = document.getElementById("page-title");
    //   console.log(pageTitleElement);
    pageTitleElement.innerText = "Event Handler Updated";
  });

document.getElementById("login-btn").addEventListener("click", function () {
  const loginElement = document.getElementById("login-p");
  loginElement.innerText = "You are successfully logged in";
  loginElement.style.color = "green";
});

// set event listener
document.getElementById("btn-update").addEventListener("click", function () {
  // step-2: get the text from the input field
  const nameInput = document.getElementById("input-name");
  const name = nameInput.value;
//   console.log("name", name);
  // set the name
  const nameP = document.getElementById("name");
  nameP.innerText = name;
});
