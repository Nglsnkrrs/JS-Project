const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const plusBtn = document.getElementById('plusBtn')
const minusBtn = document.getElementById('minusBtn')
const multiplyBtn = document.getElementById('multiplyBtn')
const divisionBtn = document.getElementById('divisionBtn')
const clearAll = document.getElementById('clearAll')
const clearLasts = document.getElementById('clearLasts')
const resultBtn = document.getElementById('resultBtn')
const resultLabel = document.getElementById('result_label')
let action = '+'

plusBtn.onclick  = function() {
    action = '+'
}
minusBtn.onclick  = function() {
    action = '-'
}
multiplyBtn.onclick  = function() {
    action = '*'
}
divisionBtn.onclick  = function() {
    action = '/'
}

function actionBtn(inp1, inp2, act) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    if(act == '+'){
        return num1 + num2
    } else if(act == '-'){
        return num1 - num2
    }
    else if(act == '*'){
        return num1 * num2
    }
    else if(act == '/'){
        return num1 / num2
    }
}

resultBtn.onclick = function (){
    resultLabel.textContent = actionBtn(input1, input2, action)
}
clearAll.onclick = function () {
    input1.value = '';
    input2.value = '';
    resultLabel.textContent = '';
}
clearLasts.onclick = function() {
    input1.value = input1.value.slice(0, -1);
    input2.value = input2.value.slice(0, -1);
};