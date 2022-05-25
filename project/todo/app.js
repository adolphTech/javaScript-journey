const input = document.querySelector('input');
input.addEventListener('keypress',function(e){
    if(e.key === 'Enter'){
        newToD0 = this.value;
        const newLine = document.createElement('li');
        newLine.innerText = newToD0;
        toDo.appendChild(newLine);
        this.value="";
    }
})