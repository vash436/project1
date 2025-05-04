// const output = [];
// const count= 1;

// function sequence() {
//     if (count % 3 === 0 && count % 5 === 0) {
//         output.push("FizzBuzz") ;
//     }
//     else if (count % 3 === 0) {
//         output.push("Fizz") ;
//     }    
//     else if (count % 5 === 0) {
//         output.push("Buzz")
//     }
//     else { output.push(count);}
    
//    count++;

//    console.log(output);
// }

// sequence(5)


// function celsiusToFahrenheit(celsius) {
//     fahrenheit = (celsius * 9/5) + 32;
//     return fahrenheit;
// }

// function fahrenheitToCelsius(fahrenheit) {
//     celsius = (fahrenheit - 32) * 5/9;
//     return celsius;
// }

// console.log(celsiusToFahrenheit(50))
// console.log(fahrenheitToCelsius(60))

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        var li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        var span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData()
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
