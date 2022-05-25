const email = document.querySelector('input');


email.addEventListener('keypress',function(e){
    if(e.key === 'Enter'){
        console.log(email.value)

        email.value="";
    }
})


/////on sending should show a gif... sent