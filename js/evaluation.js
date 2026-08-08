/* ==========================================
   Nyāya Debate Evaluation System
   Evaluation Engine
========================================== */


const form =
document.getElementById("debateForm");



form.addEventListener("submit", function(e){


    e.preventDefault();




    let topic =
    document.getElementById("topic").value;



    let claim =
    document.getElementById("claim").value;



    let reason =
    document.getElementById("reason").value;



    let example =
    document.getElementById("example").value;



    let application =
    document.getElementById("application").value;



    let conclusion =
    document.getElementById("conclusion").value;







    let score = 50;

    let pramana = "Anumāna (Inference)";

    let fallacies = [];






    /*
       Check database for matching debate
    */


    let matchedDebate =
    defaultDebates.find(function(debate){


        return debate.topic === topic;


    });






    if(matchedDebate){


        score =
        matchedDebate.score;



        pramana =
        matchedDebate.pramana;



        fallacies =
        matchedDebate.fallacies;


    }

    else{


        // Manual evaluation


        if(
        claim &&
        reason &&
        example &&
        application &&
        conclusion
        ){

            score = 75;

        }



        else{


            score = 25;


            fallacies.push(
            "Incomplete Nyāya Structure"
            );


        }


    }








    let result = {


        topic:topic,

        claim:claim,

        reason:reason,

        example:example,

        application:application,

        conclusion:conclusion,


        score:score,


        pramana:pramana,


        fallacies:fallacies


    };








    localStorage.setItem(
        "latestDebate",
        JSON.stringify(result)
    );






    window.location.href =
    "result.html";



});