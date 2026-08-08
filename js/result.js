/* ==========================================
   Nyāya Debate Result Display
========================================== */


// Get latest debate result

const debate =
JSON.parse(
localStorage.getItem("latestDebate")
);




// Check data

if(!debate){

    alert("No debate result found.");

    window.location.href="debate.html";

}





// Display Nyaya arguments


document.getElementById("topic").textContent =
debate.topic;



document.getElementById("claim").textContent =
debate.claim;



document.getElementById("reason").textContent =
debate.reason;



document.getElementById("example").textContent =
debate.example;



document.getElementById("application").textContent =
debate.application;



document.getElementById("conclusion").textContent =
debate.conclusion;







// Display Score


document.getElementById("score").textContent =
debate.score + "/100";






// Display Pramana


document.getElementById("pramana").textContent =
debate.pramana;






// Display Fallacies


if(Array.isArray(debate.fallacies)){


    document.getElementById("fallacies").textContent =
    debate.fallacies.join(", ");


}

else{


    document.getElementById("fallacies").textContent =
    debate.fallacies;


}








// Final evaluation message


let message = "";



if(debate.score >= 90){

    message =
    "Excellent logical argument. The Nyāya structure is strong.";

}

else if(debate.score >= 70){

    message =
    "Good argument with minor logical improvements possible.";

}

else if(debate.score >= 40){

    message =
    "Average argument. More evidence and reasoning are required.";

}

else{

    message =
    "Weak argument. Logical fallacies or insufficient reasoning detected.";

}




document.getElementById("evaluationText").textContent =
message;