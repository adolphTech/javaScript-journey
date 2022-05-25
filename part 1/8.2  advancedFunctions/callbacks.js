function grumpus(){
    alert("GAHHHH GO AWAY")
}
setTimeout(grumpus,5000)

//////////anon function////////////
setTimeout(function (){
    alert("welcome nigga")
},5000)


///////////////////from   html ////////////////

const btn =document.querySelector('button');
//btn.addEventListener('click',grumpus);
btn.addEventListener('click',function (){
    alert("YOH YOH YOH MY NIGGA")
})


