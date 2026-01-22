function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const error = document.getElementById("error");

  // Hardcoded credentials (simple)
  const correctUser = "admin";
  const correctPass = "1234";

  if (user === correctUser && pass === correctPass) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "index.html";
  } else {
    error.innerText = "Username or Password is wrong!";
  }
}
