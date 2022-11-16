let bill = document.querySelector('#bill');
let people = document.querySelector('#people');
let custom = document.querySelector('#custom');
const tip5 = Number(document.querySelector('#tip5').value.replace('%',''));
const tip10 = Number(document.querySelector('#tip10').value.replace('%',''));
const tip15 = Number(document.querySelector('#tip15').value.replace('%',''));
const tip20 = Number(document.querySelector('#tip20').value.replace('%',''));
const tip25 = Number(document.querySelector('#tip25').value.replace('%',''));
const reset = document.querySelector('#reset');

let billValue;
let peopleCount;

bill.addEventListener('change',() => {
    billValue = Number(bill.value);
    console.log(billValue)
})

people.addEventListener('change', () => {
    peopleCount = Number(people.value)
    console.log(peopleCount)
})

// Function to reset the bill
reset.addEventListener('click', () => {
    bill.value = '0';
    people.value = '0';
})


// const checkResetState = () => {
//     if ( bill.value && people.value ){
//         reset.disabled = false  
//     } else {
//         reset.disabled = true;
//     }
// }

// reset.addEventListener('keyup', checkResetState)