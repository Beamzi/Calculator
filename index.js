//beware of eval()


let num = '1';
let addition = '+'
let multiply = 'x'



let num1 = document.querySelector('.btn1');
let num5 = document.querySelector('.btn5');

let resultContainer = document.querySelector('.resultContainer')

//let result = document.querySelector('.resultText');

let calculator = document.querySelector('.calculator')


//let allBtn = document.querySelectorAll('button');



let allBtn = Array.from(document.querySelectorAll('button'));


let add = document.querySelector('.addition')



let btnArray = [];
let intArr = [];

let operatorArr = [];

num5.addEventListener('click', (e) => {
    btnArray.push(5)
    e.target.style['background-color'] = 'red';
    console.log(btnArray)
});


let operators = document.querySelector('.operators')
let opBtns = operators.querySelectorAll('button');

opBtns.forEach((element, position) => {

    element.addEventListener('click', (e) => {
        let arrToString = btnArray.toString();
        let newString = arrToString.replace(/,/g, '')
        let num = parseInt(newString)
        
        intArr.push(num);
        btnArray.splice(0, btnArray.length)
    
        console.log(num)
        console.log(intArr)
    });
})

/*

add.addEventListener('click', (e) => {
    let arrToString = btnArray.toString();
    let newString = arrToString.replace(/,/g, '')
    let num = parseInt(newString)
    
    intArr.push(num);
    btnArray.splice(0, btnArray.length)

    console.log(num)
    console.log(intArr)
});

*/

let equals = document.querySelector('.equals')
let resultReturn


allBtn.forEach((element, index) => {
    element.addEventListener('click', function(e) {
        let result = document.createElement('span')
        resultContainer.prepend(result)
        if (index === 16) {
            result.textContent = '+'
            operatorArr.push('+')
        }
        else if (index === 15) {
            result.textContent = '-'
            operatorArr.push('-')
        }
        else if (index === 14) {
            result.textContent = 'x'
            operatorArr.push('*')
        }
        else if (index === 13) {
            result.textContent = '÷'
            operatorArr.push('%')
        }
        else if (index === 12) {
            window.location.reload()
        }
        else if (index === 11) {
            result.textContent = ''
           //result.textContent = `= ${resultReturn}`
        }
        else { 
            result.textContent = index + 1
        };
    });
});


equals.addEventListener('click', (e) => {
    let arrToString = btnArray.toString();
    let newString = arrToString.replace(/,/g, '')
    let num = parseInt(newString)
    
    intArr.push(num);
    btnArray.splice(0, btnArray.length)

    console.log(num)
    console.log(intArr)

    console.log(operatorArr)
    
    resultReturn = intArr.reduce((total, element) => {
        return total + element
    }, 0);
    console.log(resultReturn)
    
});


allBtn.forEach((element, index) => {
    element.addEventListener('click', function(e) {
        let result = document.createElement('span')
        resultContainer.prepend(result)
        if (index === 11) {
            result.textContent = `= ${resultReturn}`
        }
    });
});


