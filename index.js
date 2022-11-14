const bill = document.querySelector('#bill').value;
const people = document.querySelector('#people').value;
const custom = document.querySelector('#custom');
const tip5 = document.querySelector('#tip5').value.replace('%','');
const tip10 = document.querySelector('#tip10').value.replace('%','');
const tip15 = document.querySelector('#tip15').value.replace('%','');
const tip20 = document.querySelector('#tip20').value.replace('%','');
const tip25 = document.querySelector('#tip25').value.replace('%','');
const reset = document.querySelector('#reset');

// Function to reset the bill
reset.addEventListener('click', () => {
    bill.value='';
    people.value='';
})

const billValue = Number(bill)