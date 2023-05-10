const screen = document.querySelector(".screen")
const button = document.querySelectorAll(".btn")
const clear  =  document.querySelector(".btn-clear")
const equal  =  document.querySelector(".btn-equal")


button.forEach(function(item){
    item.addEventListener("click", function(e){
        let generatedValue = e.target.dataset.id
        //console.log(generatedValue)

        screen.value += generatedValue


    });

    
});


//This styling is for the Equalto button 

equal.addEventListener("click", function(e){
    if (screen.value === ''){
        screen.value = "";
    }
    else{
        let answer = eval(screen.value);
        screen.value = answer
    }
});



//This Styling is for the Clear Button
clear.addEventListener("click", function(e){
    if(!screen.value === ''){
        screen.value= "";
    
    }
    else{
        screen.value= "";
    }
})


//now let Place the Dark-Mode Button

const Btn = document.querySelector(".Dark-btn")
const calculator = document.querySelector(".calculator")
const heading = document.querySelector(".heading")
const yellow = document.querySelectorAll(".btn-yellow")
let count = 0;

Btn.addEventListener("click", function(e){
    count++
    //console.log(count)

    function Dark(){
        if(count%2 != 0){
            document.body.style = " background-color : black; cursor"
            calculator.style = " background-color : rgba(112, 113, 114, 0.947)"
            screen.style = " background-color :  rgba(213, 215, 218, 0.947);"
            heading.style.color = "white"
            screen.style.color = "black"
            yellow.forEach(function(colors){
                colors.style = "background-color : rgba(10, 21, 230, 0.937)  "
            })

            

    
        }

    }
     if(count% 2 == 0){
        document.body.style = " background-color : white; cursor"
        calculator.style = " background-color :rgba(2, 2, 32, 0.947);"
        screen.style = " background-color :  black;"
        heading.style.color = "black"
        screen.style.color = "white"
        yellow.forEach(function(colors){
            colors.style = "background-color : rgba(230, 146, 10, 0.937)"
        })

    }

    Dark()



    
}) 








