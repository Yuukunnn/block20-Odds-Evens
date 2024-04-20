// TODO: this file! :)

//references:
    const numberInput = document.getElementById('numberInput');
    const addNumberBtn = document.getElementById('addNumberBtn');
    const numberBankOutput = document.getElementById('numberBankOutput');
    const sortOneBtn = document.getElementById('sortOne');
    const sortAllBtn = document.getElementById('sortAll');
    const oddsNumberOutput = document.getElementById('oddsNumberOutput');
    const evensNumberOutput = document.getElementById('evensNumberOutput');

//After clicking "Add Number" button, the number bank output will reflect numbers

    addNumberBtn.addEventListener('click', function(event){
        event.preventDefault();
        const number = numberInput.value;
       
        if (typeof parseInt(number) !== "number" || isNaN(parseInt(number))) {
            alert ("valid numbers");
            return;
        }

        numberBankOutput.textContent += `${number} `;
        numberInput.value = '';

    })
//After clicking "Sort 1" button, the FIRST number in the number bank should be removed and placed into either the odd or even category and display

    sortOneBtn.addEventListener('click', function(event){
        event.preventDefault();
        const numArry1 = numberBankOutput.textContent.split(' ');

        if (typeof parseInt(numArry1) !== "number" || isNaN(parseInt(numArry1))) {
            alert ("valid numbers");
            return;
        }

        const firstNumToRemove = numArry1[0];
        numArry1.shift();
        numberBankOutput.textContent = numArry1.join(' ')

        if (firstNumToRemove % 2 === 0) {
            evensNumberOutput.textContent += `${firstNumToRemove} `;
        } else {
            oddsNumberOutput.textContent += `${firstNumToRemove} `;
        }
    }) 

//After clicking "Sort all" button, all numbers in number bank should be moved into either odd or even category and display
    
    sortAllBtn.addEventListener('click', function(event){
        event.preventDefault();
        const numArry2 = numberBankOutput.textContent.split(' ');

        if (typeof parseInt(numArry2) !== "number" || isNaN(parseInt(numArry2))) {
            alert ("valid numbers");
            return;
        }

        numberBankOutput.textContent = '';
        numArry2.forEach(function (number) {
            if (number % 2 === 0) {
                evensNumberOutput.textContent += `${number} `;
            } else {
                oddsNumberOutput.textContent += `${number} `;
            }
        })
    });

