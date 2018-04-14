window.onload = function() {

    var capitals = [
        {
        question: "US",
        city: [
                {
                name: "Atlanta",
                value: "incorrect",
                },
                {
                name: "Charlotte",
                value: "incorrect",
                },
                {
                name: "New York",
                value: "incorrect",
                },
                {
                name: "Washington DC",
                value: "correct",
                },
            ]
        }, 
        {
        question: "Russia",
        city: [
                {
                name: "St.Petersburg",
                value: "incorrect",
                },
                {
                name: "Moscow",
                value: "correct",
                },
                {
                name: "Warsaw",
                value: "incorrect",
                },
                {
                name: "Minsk",
                value: "incorrect",
                },
            ]
            }, 
            {
        question: "China",
        city: [
                {
                name: "Beijing",
                value: "incorrect",
                },
                {
                name: "Shanghai",
                value: "correct",
                },
                {
                name: "Hong Kong",
                value: "incorrect",
                },
                {
                name: "Tianjin",
                value: "incorrect",
                },
            ]
            }, 
        {
        question: "Estonia",
        city: [
                {
                name: "Riga",
                value: "incorrect",
                },
                {
                name: "Helsinki",
                value: "incorrect",
                },
                {
                name: "Vilnius",
                value: "incorrect",
                },
                {
                name: "Tallinn",
                value: "correct",
                },
            ]
            }, 
            {
        question: "Canada",
        city: [
                {
                name: "Ontario",
                value: "incorrect",
                },
                {
                name: "Toronto",
                value: "incorrect",
                },
                {
                name: "Ottawa",
                value: "correct",
                },
                {
                name: "Vancouver",
                value: "incorrect",
                },
            ]
            }, 
            {
        question: "Tonga",
        city: [
                {
                name: "Tongatapu",
                value: "incorrect",
                },
                {
                name: "Nukuʻalofa",
                value: "correct",
                },
                {
                name: "Honiara",
                value: "incorrect",
                },
                {
                name: "Suva",
                value: "incorrect",
                },
            ]
            }
    ];
    var correct = 0;
    var incorrect = 0;
    console.log(capitals.length);
    var html = '';
    for (var i = 0; i <capitals.length; i++) {
        var capital = capitals[i];
        var text = '<h4> What is the Capital of ' + capital.question + '?</h4>';
        for (var y = 0; y<capital.city.length; y++){
            var city = capital.city[y];
            text += '<input type="radio" name="group-' + i + '" value="' + city.value + '">' + city.name;
        }
        

        html += text;
        
    }
    $(".capitals").html(html); 
   
    var totalquestion = $("h4").length;
    $("#unanswered").text(totalquestion);

    $("#start").click(function(){
        $("#questions").css("visibility","visible");
        $("#start").remove();
        timer(5);
    });

    $("#done").click(function(){
        $("#alldone").css("visibility","visible");
        $("#done").remove();
        $("#questions").remove();
        $("#correct").text(correct); 
        $("#incorrect").text(incorrect);
    });

    function timer(t){
        var start = t;
        $('progress').attr("max", start);
        var intervalId = setInterval(function(){
            if (start <= 0){
                clearInterval(intervalId);
                $("#alldone").css("visibility","visible");
                $("#done").remove();
                $("#questions").remove();
            }
            else{
                start--;
                $("#timer").text(start);             
                $('progress').attr("value", start);
            }
        } ,1000)
    }
    

    var answers = $('input[type="radio"]')
    answers.click(function(){
        var correct = 0;
        var incorrect = 0;
        answers.each(function(){
            if(this.checked === true){
                if(this.value === "correct"){
                    correct++;
                }
                else{
                    incorrect++;
                };
            };
             
       });   
        unanswered = totalquestion - correct - incorrect;
        console.log(unanswered);
        $("#correct").text(correct); 
        $("#incorrect").text(incorrect);
        $("#unanswered").text(unanswered);
        
    }); 

    
};