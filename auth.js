
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
let isLogin = true;

function toggleForm() {
    isLogin = !isLogin;

    document.getElementById("title").innerText = isLogin ? "Login" : "Sign Up";
    document.querySelector("button").innerText = isLogin ? "Login" : "Sign Up";
    document.querySelector(".switch").innerHTML =
        isLogin
        ? `Don't have an account? <span onclick="toggleForm()">Sign Up</span>`
        : `Already have an account? <span onclick="toggleForm()">Login</span>`;

    document.getElementById("name").style.display = isLogin ? "none" : "block";
    document.getElementById("msg").innerText = "";
}

function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const msg = document.getElementById("msg");

    if (!email || !pass || (!isLogin && !name)) {
        msg.innerText = "Please fill all fields ❗";
        return;
    }

    if (isLogin) {
        msg.style.color = "green";
        msg.innerText = "Login Successful ✅";
    } else {
        msg.style.color = "green";
        msg.innerText = "Account Created Successfully 🎉";
    }
}
document.getElementById("loginForm").onsubmit = function (e) {
    e.preventDefault();
    window.location.href = "index.html";
};

