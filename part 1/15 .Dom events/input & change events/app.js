const form = document.querySelector('#signup-form');
const creditCardInput= document.querySelector("#cc");
const termsCheckbox = document.querySelector("#terms");
const veggieSelect = document.querySelector("#veggie");


const formData={};
// creditCardInput.addEventListener('input',function (e){
//     console.log('cc changed',e);
//     formData['cc'] = e.target.value;
// })

// veggieSelect.addEventListener('input',function (e){
//     console.log('veggie changed',e);
//     formData['vegie'] = e.target.value;
// })

// termsCheckbox.addEventListener('input',function (e){
//     console.log('CHECK BOX',e);
//     formData['AGREE TOTERMS'] = e.target.checked;
// })

for (let input of [creditCardInput,termsCheckbox,veggieSelect]){
    input.addEventListener('input',function(e){
       formData[e.target.name] = e.target.value;
    });
}