let bill = document.querySelector('#bill');
let people = document.querySelector('#people');
let custom = document.querySelector('#custom');
// const tip5 = Number(document.querySelector('#tip5').value.replace('%',''));
// const tip10 = Number(document.querySelector('#tip10').value.replace('%',''));
// const tip15 = Number(document.querySelector('#tip15').value.replace('%',''));
// const tip20 = Number(document.querySelector('#tip20').value.replace('%',''));
// const tip25 = Number(document.querySelector('#tip25').value.replace('%',''));
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
        const percentValue = Number(percent.innerHTML.replace('%', ''))
        tipPercent = percentValue

        // if (percentValue === 5){
        //     console.log('5%');
        // } else if (percentValue === 10) {
        //     console.log('10%')
        // } else if (percentValue === 15) {
        //     console.log('15%')
        // } else if (percentValue === 20) {
        //     console.log('20%')
        // } else if (percentValue === 25) {
        //     console.log('25%')
        // }
    })
})

bill.addEventListener('change',() => {
    billValue = Number(bill.value);
    if( billValue != 0 ){
        reset.style.opacity = '1';
        reset.style.cursor = "pointer";
    } else {
        reset.style.opacity = "0.2";
        reset.style.cursor = "auto";
    }
 
})

people.addEventListener('change', () => {
    peopleCount = Number(people.value)
    console.log(peopleCount);
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
})

// Function to reset the bill
reset.addEventListener('click', () => {
    if(people.value !== '' || bill.value !== ''){
        bill.value = '0';
        people.value = '0';
        reset.style.opacity = "0.2";
        reset.style.cursor = "auto";
    } else {
        reset.style.opacity = '1';
        reset.style.cursor = "pointer";
    }
})


// if ( bill.value == "" && people.value == "" ){
//     reset.style.opacity = "0.2";
//     reset.style.cursor = "auto";
// } else {
//     reset.style.opacity = '1';
//     reset.style.cursor = "pointer";
// }