/* ==========================================
   Nyaya Logical Debate Evaluation System
   register.js
==========================================*/


const registerForm = document.getElementById("registerForm");

const message = document.getElementById("message");


registerForm.addEventListener("submit", function(event){


    event.preventDefault();


    // Getting values

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const username = document.getElementById("username").value.trim();

    const password = document.getElementById("password").value.trim();

    const confirmPassword =
    document.getElementById("confirmPassword").value.trim();



    // Password checking

    if(password !== confirmPassword){


        message.style.color="red";

        message.textContent=
        "Passwords do not match.";

        return;

    }



    // Check existing users

    const users = Database.getUsers();


    const existingUser =
    users.find(user =>
        user.username === username
    );



    if(existingUser){


        message.style.color="red";

        message.textContent=
        "Username already exists.";

        return;

    }



    // Create new user


    const newUser = {


        name:name,

        email:email,

        username:username,

        password:password


    };



    // Save user

    Database.addUser(newUser);



    message.style.color="green";

    message.textContent=
    "Registration Successful! Redirecting...";



    // Redirect to login

    setTimeout(function(){


        window.location.href="login.html";


    },1500);



});