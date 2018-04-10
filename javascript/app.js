window.onload = function() {
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    $("#start").click(function(){
        $("#questions").css("visibility","visible");
        $("#start").remove();
    });
    $("#done").click(function(){
        $("#alldone").css("visibility","visible");
        $("#done").remove();
        $("#questions").remove();
    });

    $("input[name = 'CapitalUS']").click(function(){
        var valueUS = $(this).val();
        console.log (valueUS);
        correctanswer = "Washington";
        iscorrect = true;
        if(valueUS === correctanswer && iscorrect){ 
            correct++;
            iscorrect = false;
        }
        else{
            incorrect++;
            iscorrect = false;
            }
        $("#correct").html(correct); 
        $("#incorrect").html(incorrect);

        
        
        // if (valueUS === "Washington" && correctanswer === true){
        //     correctanswer = false; 
        //     correct++;
        //          
        // }
        // else {
        //     correctanswer = false; 
        //     incorrect++;
        //     
            
        // }

    });
    


};