/* ==========================================
   Nyaya Logical Debate Evaluation System
   dashboard.js
==========================================*/


// Get logged in user

const currentUser = Database.getCurrentUser();


// Check login status

if(!currentUser){

    window.location.href = "login.html";

}


// Display username

document.getElementById("username").textContent =
currentUser.name;



// Get user's debates

const debates =
Database.getUserDebates(currentUser.username);



// Display total debates

document.getElementById("totalDebates").textContent =
debates.length;




// Calculate average score

let totalScore = 0;


debates.forEach(function(debate){

    totalScore += debate.score;

});



let average = 0;


if(debates.length > 0){

    average =
    Math.round(totalScore / debates.length);

}



document.getElementById("averageScore").textContent =
average + "/100";




// Logout Function


const logoutBtn =
document.getElementById("logoutBtn");



logoutBtn.addEventListener("click",function(){


    Database.logout();


    window.location.href="login.html";


});
