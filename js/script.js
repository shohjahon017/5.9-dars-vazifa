const form = document.getElementById("form");
const send = document.getElementById("send");
const username = document.getElementById("username");
const password = document.getElementById("password");
const nationality = document.getElementById("nationality");
const desc = document.getElementById("desc");

// send && send.addEventListener('click',function)
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const user = {
    username: username.value,
    password: password.value,
    nationality: nationality.value,
    desc: desc.value,
  };
  console.log(user);
  form.reset();
});
