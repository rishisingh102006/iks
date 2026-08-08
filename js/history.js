/* ==========================================
   Nyaya Logical Debate Evaluation System
   history.js
==========================================*/


// Get current user

const currentUser =
Database.getCurrentUser();



// Check login

if(!currentUser){

    window.location.href="login.html";

}



// History container

const historyList =
document.getElementById("historyList");




// Get user's debates

const debates =
Database.getUserDebates(
    currentUser.username
);





// Check if history exists

if(debates.length === 0){


    historyList.innerHTML = `

        <div class="empty">

            No debate evaluations found.

            <br><br>

            Start a new debate to see results here.

        </div>

    `;


}

else{



    debates.reverse();



    debates.forEach(function(debate){



        const card =
        document.createElement("div");


        card.className =
        "history-card";



        card.innerHTML = `


            <h3>
                ${debate.topic}
            </h3>


            <p>
                <strong>Score:</strong>

                <span class="score">

                    ${debate.score}/100

                </span>

            </p>


            <p>
                <strong>Pramāṇa:</strong>

                ${debate.pramana}

            </p>


            <p>
                <strong>Fallacies:</strong>

                ${debate.fallacies.join(", ")}

            </p>


            <p>
                <strong>Date:</strong>

                ${debate.date || "Not Available"}

            </p>


        `;



        historyList.appendChild(card);



    });


}