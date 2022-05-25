const input = document.querySelector('input');

input.addEventListener("keydown",function(e){
    console.log('keydown')
})

input.addEventListener("keyup",function(e){
    console.log('keyup')
})

input.addEventListener("keypress",function(e){
    console.log('keypress')
})


const addItemInput = document.querySelector("#addItem");
const itemsUl = document.querySelector('#items');

addItemInput.addEventListener("keypress",function(e){
if (e.key === 'Enter'){
    //add new item to list

    const newItemText = this.value;
    const newItem = document.createElement('li');
    newItem.innerText = newItemText;
    itemsUl.appendChild(newItem);
    this.value="";
}
});