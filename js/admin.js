/* ==========================================
   Nyaya Logical Debate Evaluation System
   admin.js
==========================================*/


// Get current user

const currentUser =
Database.getCurrentUser();



// Check admin access

if(!currentUser || currentUser.username !== "admin"){


    alert("Access Denied. Admin Only.");


    window.location.href="dashboard.html";


}





// Get database data


const users =
Database.getUsers();



const debates =
Database.getDebates();





// Display counts


document.getElementById("userCount")
.textContent = users.length;



document.getElementById("debateCount")
.textContent = debates.length;






// Debate Table


const table =
document.getElementById("debateTable");





if(debates.length === 0){


    table.innerHTML = `

        <tr>

            <td colspan="5">

                No Debate Records Available

            </td>

        </tr>

    `;


}

else{


    debates.forEach(function(debate){



        const row =
        document.createElement("tr");



        row.innerHTML = `


        <td>
            ${debate.username}
        </td>


        <td>
            ${debate.topic}
        </td>


        <td>
            ${debate.score}/100
        </td>


        <td>
            ${debate.pramana}
        </td>


        <td>
            ${debate.date}
        </td>


        `;



        table.appendChild(row);



    });



}






// Logout

document
.getElementById("logoutBtn")
.addEventListener("click",function(){


    Database.logout();


    window.location.href="login.html";


});