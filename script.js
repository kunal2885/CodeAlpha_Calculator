let operand1=""
let operand2=""
let operator =""
let opChecker = false
let buttons = document.querySelectorAll(".button")
let output = document.getElementById("output")
const computeResult = ()=>{
    let a = Number(operand1)
    let b= Number(operand2)
    let c;
    switch (operator) {
        case "+":
            c= a+b
            break;
        case "-":
            c = a-b
            break;
        case "x":
            c = a*b
            break;
        case "/":
            c= a/b
            break;
        case "%":
            c=a%b
            break;
    
        default:
            return;
    }
    output.innerText = c;   
    operand1 = String(c);   // Store result as new operand1
    operand2 = "";
    operator = "";
    opChecker = false;
    for(let btn of buttons){
     btn.style.border = "none"
}
   

}
const rmvDigit = (operand1,operand2,opChecker)=>{
    if(opChecker){
        operand2 = operand2.slice(0,-1)
        return operand2
    }
    else{
        operand1 = operand1.slice(0,-1)
        return operand1
    }
}
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        button.style.border = "4px solid white"
        if(button.innerText === "AC"){
            output.innerText = "" 
            operand1 = ""
            operand2 = ""
            opChecker = false 
            operator = ""
            for(let btn of buttons){
                btn.style.border = "none"
            }
        }
        else if(button.classList.contains("operator")){
            if(!operator){
                operator = button.innerText
                opChecker = true
            }
            
        }
        else if(button.innerText === "<--"){
            const newvalue = rmvDigit(operand1,operand2,opChecker)
            if(opChecker){
                operand2 = newvalue
                output.innerText = operand2
            }else{
                operand1 = newvalue
                output.innerText = operand1
            }
            
        }
        else if(button.innerText === "="){
            computeResult()
        }
        else{
            if(opChecker){
                operand2 += button.innerText
                output.innerText = operand2
            }
            else{
                operand1 += button.innerText
                output.innerText = operand1
            }
        }
    })

})
