const result= document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const calculate=document.getElementById('calculate')
const plus=document.getElementById('plus')
const minus=document.getElementById('minus')
let action='+'

function printResult(resul){
    if (resul<0) {
            result.style.color='red'
        } else {
            result.style.color='green'
        }
        result.textContent = resul
}


plus.onclick=function(){
    action="+"
}
minus.onclick=function(){
    action="-"
}


console.log (result.textContent)

calculate.onclick = function() {
    if (action==="+") {
        const sum = Number(input1.value) + Number(input2.value)
        printResult(sum)
    }
    else if (action==="-") {
        const sum = Number(input1.value) - Number(input2.value)
        printResult(sum)
    }
}
