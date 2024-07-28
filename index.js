const button = document.querySelectorAll('button');
const displayBox = document.querySelector('.displayBox');

let protoArray = [];
let opsArray = [];
let primeArray = [];
let sumArr

button.forEach((element, index) => {
    element.addEventListener('click', (e) => {
        const span = document.createElement('span')
        span.textContent = element.textContent
        displayBox.append(span);

        protoArray.push(parseInt(element.textContent))
        console.log(protoArray)
        let joinVar = parseInt(protoArray.join(''));
        console.log(joinVar)

        if (index > 9) {
            primeArray.push(joinVar);
            console.log(primeArray);
            protoArray = [];
        };

        if (index > 9) {
            sumArr = opCalc(primeArray[0], primeArray[1])
            //console.log(sumArr)
        }

        if (primeArray.length > 1) {
            primeArray = [];
            console.log(sumArr)
           primeArray.push(sumArr)
            console.log(primeArray)
        }

        if (index === 14) {
            span.textContent = `=${sumArr}`
        }

        if (index > 9 && index < 14) {
            opsArray[0] = element.textContent
            console.log(opsArray)
            //opsArray.push(element.textContent)
        };
    });
});

let opCalc = (a, b) => {
    if (opsArray.includes('+') === true) {
        return a + b
    }  
    else if (opsArray.includes('-') === true) {
        return a - b
    }
    else if (opsArray.includes('x') === true) {
        return a * b
    }
    else if (opsArray.includes('÷') === true) {
        return a / b
    }
}


