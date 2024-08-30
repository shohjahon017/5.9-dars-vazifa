const form = document.getElementById("form");
const send = document.getElementById("send");
const username = document.getElementById("username");
const password = document.getElementById("password");
const nationality = document.getElementById("nationality");
const desc = document.getElementById("desc");
const block = document.querySelector("#block");

function validate(username, password, nationality, desc) {
  if (username.value.length < 3) {
    alert("Username is not valid");
    username.focus();
    username.style.outlineColor = "red";
    return false;
  }
  if (password.value.length < 3) {
    alert("Password is not valid");
    password.focus();
    password.style.outlineColor = "red";
    return false;
  }
  if (nationality.value.length < 3) {
    alert("Nationality is not valid");
    nationality.focus();
    nationality.style.outlineColor = "red";
    return false;
  }
  if (desc.value.length < 0) {
    alert("Description is not valid");
    desc.focus();
    desc.style.outlineColor = "red";
    return false;
  }
  return true;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const isValid = validate(username, password, nationality, desc);
  if (!isValid) {
    return;
  }
  const user = {
    username: username.value,
    password: password.value,
    nationality: nationality.value,
    desc: desc.value,
  };
  console.log(user);
  form.reset();
});
send &&
  send.addEventListener("click", function (event) {
    event.preventDefault();
    const div = document.createElement("div");
    div.innerHTML = `Username: ${username.value}, Nationality: ${nationality.value}, Description: ${desc.value}`;
    div.style.border = "1px solid #ccc";
    div.style.padding = "10px";
    div.style.margin = "10px 0";
    div.style.borderRadius = "5px";
    div.style.backgroundColor = "#f9f9f9";
    div.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
    block.append(div);
  });
