/* ==========================================
   Nyaya Logical Debate Evaluation System
   login.js
==========================================*/

const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {

        message.style.color = "red";
        message.textContent = "Please enter Username and Password.";

        return;
    }

    const success = Database.login(username, password);

    if (success) {

        message.style.color = "green";
        message.textContent = "Login Successful...";

        setTimeout(function () {

            window.location.href = "dashboard.html";

        }, 1000);

    } else {

        message.style.color = "red";
        message.textContent = "Invalid Username or Password.";

    }

});