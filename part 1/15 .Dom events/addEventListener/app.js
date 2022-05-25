const btn = document.querySelector('button');

btn.addEventListener('click',function () {
    alert("clicked");
});

    btn.addEventListener('click',function(){
        console.log('second thing');
    });
//////////////////////////////////////mouseover ////////////
btn.addEventListener('mouseover',function (){
    btn.innerText = "don't touch me"
})

btn.addEventListener('mouseout',function (){
    btn.innerText = "click me"
})


//////////////////scroll events //////////////
window.addEventListener('scroll',function (){
    console.log('stop scrolling')
})