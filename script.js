const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (number) => {
    calculatorScreen.value = number
}

const calculatorInput = document.querySelector('.calculator-input')
const updateInput = (prevNumber, operator, currentNumber) => {
    number_txt = prevNumber+operator+currentNumber
    calculatorInput.value = number_txt
}

const numbers = document.querySelectorAll(".number")
numbers.forEach((number)=>{
    number.addEventListener("click", (event)=> {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'
let number_txt = ''

const inputNumber = (number) => {
    if(currentNumber==='0'){
        currentNumber = number
    }else{
        currentNumber += number
    }
}

const operators = document.querySelectorAll(".operator")
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) =>{
    if (calculationOperator===''){
        prevNumber = currentNumber
    }
    calculationOperator=operator
    currentNumber='0'
}

const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click', ()=>{
    updateInput(prevNumber,calculationOperator,currentNumber)
    calculate()
    updateScreen(currentNumber)
})

const calculate = () =>{
    let result = ''
    switch(calculationOperator){
        case '+':
            result = parseFloat(prevNumber)+parseFloat(currentNumber)
            break
        case '-':
            result = parseFloat(prevNumber)-parseFloat(currentNumber)
            break
        case '/':
            result = parseFloat(prevNumber)/parseFloat(currentNumber)
            break
        case '*':
            result = parseFloat(prevNumber)*parseFloat(currentNumber)
            break
        default:
            break
    }
    currentNumber = result
    calculationOperator = ''
}

const clearAllBtn = document.querySelector('.all-clear')
clearAllBtn.addEventListener('click', ()=>{
    clearAll()
    updateScreen(currentNumber)
    updateInput(prevNumber,calculationOperator,currentNumber)
})

const clearAll = () =>{
    prevNumber = ''
    calculationOperation = ''
    currentNumber = '0'
}

const clearBtn = document.querySelector('.clear')
clearBtn.addEventListener('click',()=>{
    currentNumber = '0'
    updateScreen(currentNumber)
})

const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (event)=>{
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

const inputDecimal = (dot) =>{
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

const percent = document.querySelector('.percentage')
percent.addEventListener('click',(event)=>{
    inputPercent()
    updateScreen(currentNumber)
})

const inputPercent = () =>{
    currentNumber /= 100
}

const minplus = document.querySelector('.plus-min')
minplus.addEventListener('click',()=>{
    currentNumber *= -1
    updateScreen(currentNumber)
})