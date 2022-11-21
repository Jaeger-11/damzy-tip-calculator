let bill = document.querySelector('#bill');
let people = document.querySelector('#people');
let custom = document.querySelector('#custom');
const reset = document.querySelector('#reset');
const warning = document.querySelector('#warning');
const tipAmount = document.querySelector('#tipAmount');
const totalAmount = document.querySelector('#totalAmount');
let billValue;
let peopleCount;
let tipPercent;
let tip;
let total;

document.querySelectorAll('.percent').forEach((percent) => {
    percent.addEventListener("click", () => {
        reset.style.opacity = '1';
        reset.style.cursor = "pointer";
        percent.classList.add('bg-strongcyan')
        let otherPercents = [...document.querySelectorAll(".percent")].filter(btn => {return btn != percent})
        otherPercents.forEach((otherpercent) => {
            otherpercent.classList.remove('bg-strongcyan')
        })
        peopleCount = Number(people.value)
        if (isNaN(peopleCount)){
            warning.innerHTML = "number only";
            warning.style.display = 'block';
            people.style.border = 'rgb(239 68 68) 2px solid'
        } else if(peopleCount === 0) {
            warning.innerHTML = "Can't be zero";
            warning.style.display = 'block';
            people.style.border = 'rgb(239 68 68) 2px solid'
        } else {
            warning.style.display = 'hidden'
            warning.innerHTML = ''
            people.style.border = 'none'
        }
        tipPercent = Number(percent.innerHTML.replace('%', ''))
        tip = ((tipPercent/100) * billValue * peopleCount).toFixed(2)
        total = (((tipPercent/100) * billValue * peopleCount) + billValue).toFixed(2)        
        tipAmount.innerHTML = `$${tip}`;
        totalAmount.innerHTML = `$${total}`;
    })
})

custom.addEventListener('change', () => {
    tipPercent = Number(custom.value);
    if(isNaN(customValue)){
        alert("Input a numeric figure")
    }
    peopleCount = Number(people.value)
    if (isNaN(peopleCount)){
        warning.innerHTML = "number only";
        warning.style.display = 'block';
        people.style.border = 'rgb(239 68 68) 2px solid';
    } else if(peopleCount === 0) {
        warning.innerHTML = "Can't be zero";
        warning.style.display = 'block';
        people.style.border = 'rgb(239 68 68) 2px solid';
    } else {
        warning.style.display = 'hidden'
        warning.innerHTML = ''
        people.style.border = 'none'
    }
    tip = ((tipPercent/100) * billValue * peopleCount).toFixed(2)
    total = (((tipPercent/100) * billValue * peopleCount) + billValue).toFixed(2)        
    tipAmount.innerHTML = `$${tip}`;
    totalAmount.innerHTML = `$${total}`;
})

bill.addEventListener('change',() => {
    billValue = Number(bill.value);
    if(isNaN(billValue)){
        alert("Input a numeric figure")
        tipAmount.innerHTML = `$0.00`;
        totalAmount.innerHTML = `$0.00`;
    }
    if( billValue != 0 ){
        reset.style.opacity = '1';
        reset.style.cursor = "pointer";
    } else {
        reset.style.opacity = "0.2";
        reset.style.cursor = "auto";
    }
    if ( peopleCount && tipPercent){
        tip = ((tipPercent/100) * billValue * peopleCount).toFixed(2)
        total = (((tipPercent/100) * billValue * peopleCount) + billValue).toFixed(2)
        tipAmount.innerHTML = `$${tip}`;
        totalAmount.innerHTML = `$${total}`;
    }
    
})

people.addEventListener('change', () => {
    peopleCount = Number(people.value)
    if (isNaN(peopleCount)){
        warning.innerHTML = "number only";
        warning.style.display = 'block';
        people.style.border = 'rgb(239 68 68) 2px solid'
    } else if(peopleCount === 0) {
        warning.innerHTML = "Can't be zero";
        warning.style.display = 'block';
        people.style.border = 'rgb(239 68 68) 2px solid'
    } else {
        warning.style.display = 'hidden'
        warning.innerHTML = ''
        people.style.border = 'none'
        tipAmount.innerHTML = `$${((tipPercent/100) * billValue * peopleCount).toFixed(2)}`
        totalAmount.innerHTML = `$${(((tipPercent/100) * billValue * peopleCount) + billValue).toFixed(2)}`
    }
    
})

// Function to reset the bill
reset.addEventListener('click', () => {
    if(people.value !== '' || bill.value !== ''){
        bill.value = '0';
        people.value = '0';
        totalAmount.innerHTML = '$0.00';
        tipAmount.innerHTML = '$0.00'
        reset.style.opacity = "0.2";
        reset.style.cursor = "auto";
    } else {
        reset.style.opacity = '1';
        reset.style.cursor = "pointer";
    }
})