const form = document.querySelector('#signup-form');
const creditCardInput= document.querySelector("#cc");
const termsCheckbox = document.querySelector("#terms");
const veggieSelect = document.querySelector("#veggie");

form.addEventListener('submit',function(e){
    alert('submitted the form')
    console.log('cc',creditCardInput.value);
    console.log('terms', termsCheckbox.checked); //for check bxes
    console.log("veggie",veggieSelect.value)
e.preventDefault();//prevent normal behaviour
});