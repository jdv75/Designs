
let num1 = null;
let num2 = null;
let op = null;
let currentInput = "";
let justCalculated = false;
let operation = ""
let Hasop = false;

for(let i=0; i<document.querySelectorAll(".num").length; i++){
    document.querySelectorAll(".num")[i].addEventListener("click", function(){

        if(justCalculated) {
            num1 = null;
            num2 = null;
            op = null;
            document.querySelector("#solution").textContent = ""
            currentInput = "";
            justCalculated = false;
        }

        currentInput += this.textContent.trim();
        operation += this.textContent.trim();
        document.querySelector(".operation").textContent = operation;
        document.querySelector("#solution").textContent = currentInput;
        
        if(op===null) {
            num1 = Number(currentInput);
        } else {    
            num2 = Number(currentInput);
        }
    });
}

for (let i =0; i<document.querySelectorAll(".key").length; i++) {
    document.querySelectorAll(".key")[i].addEventListener("click", function() {
        actButton = this;
        this.classList.add("pressed");
        setTimeout(function() {
            actButton.classList.remove("pressed")
        }, 100);
    });
}

for(let i=0; i<document.querySelectorAll(".ope span").length; i++) {
    document.querySelectorAll(".ope span")[i].addEventListener("click", function() {
        operator(this.innerHTML);
        if(!Hasop) {
            operation += ` ${op} `;
            Hasop = true;
        }
        currentInput = "";
        document.querySelector("#solution").textContent = "0";
    });
}

document.getElementById("equal").addEventListener("click", function(){
    if(num1 === null || num2 === null) {
        alert("Missing one number");
    } else if (op === null) {
        alert("Missing the operator");
    } else {
        switch (op) {
            case "/":
                document.querySelector("#solution").innerHTML = num1 / num2;
                break;
            case "+":
                document.querySelector("#solution").innerHTML = num1 + num2;
                break;
            case "-":
                document.querySelector("#solution").innerHTML = num1 - num2;
                break;
            case "x":
                document.querySelector("#solution").innerHTML = num1 * num2;
                break;
            case "%":
                document.querySelector("#solution").innerHTML = num1 % num2;
                break;
        
            default:
                break;
        }

        document.querySelector(".operation").innerHTML = (num1 +" " +op+ " "+ num2)

        let now = new Date();
        let time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        if(document.querySelectorAll(".op").length === 4) {
            document.querySelector(".record").removeChild(document.querySelector(".record").lastElementChild);
        }

        let newDiv = document.createElement("div");
        newDiv.classList.add("op");
        newDiv.innerHTML = `<span>${time}</span><span>${num1} ${op} ${num2}</span>`;
        document.querySelector(".record").prepend(newDiv);

        num1 = null;
        num2 = null;
        op = null;
        operation = "";
        justCalculated = true;
        Hasop = false;
    }
});



function operator(e) {
    switch (e) {
        case "percent":
            op = "%";
            break;

        case "pen_size_2":
            op = "/";
            break;

        case "close":
            op = "x";
            break;

        case "remove":
            op = "-";
            break;

        case "add":
            op = "+";
            break;
    
        default: alert("Error")
            break;
    }
}

document.querySelector(".delete").addEventListener("click", function () {
    operation = operation.replace(document.querySelector("#solution").textContent, "");
    document.querySelector("#solution").innerHTML = 0;

    if(op===null) {
        num1 = null;
        currentInput = "";
        
    }
    else {
        num2 = null;
        currentInput = "";
    }
});

