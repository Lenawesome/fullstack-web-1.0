$(document).ready(function () {

    const COLOR_LIMIT_VALUE = 255;
    initialize();
    



    function initialize(){
        setRandomColorList();
        bindResetEvent();
    }


    function bindResetEvent(){
        $('#btn-reset').on('click', function(){
            setRandomColorList();
        });
    }

    function setRandomColorList() {
    
        let circleList = $('.circle');
        let correctAnswer = randomValue(circleList.length - 1);
    
        for (let i = 0; i < circleList.length; i++) {
            $(circleList[i]).off("click");
            let red = randomValue(COLOR_LIMIT_VALUE);
            let green = randomValue(COLOR_LIMIT_VALUE);
            let blue = randomValue(COLOR_LIMIT_VALUE);
            setCircleColor(circleList[i], red, green, blue);
            if (correctAnswer === i) {
                $('#color-rgb').html(`(${red}, ${green}, ${blue})`);
                bindSuccessEvent(circleList[i]);
                continue;
            }
            bindFailedEvent(circleList[i]);
        }
    }
    

    function bindSuccessEvent(circle){
        $(circle).bind('click', function(){
            alert("You choose wisely!!!");
        });
    }

    function bindFailedEvent(circle){
        $(circle).bind('click', function(){
            alert("You choose poorly!!!");
        });
    }

    function randomValue(lastNumber) {
        return Math.floor(Math.random() * lastNumber);
    };
    
    function setCircleColor(circle, red, green, blue) {
        $(circle).css("background-color", `rgb(${red}, ${green}, ${blue})`);
    }

    
});

