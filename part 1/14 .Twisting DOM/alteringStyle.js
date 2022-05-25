const h1 =document.querySelector('h1');
h1.style.color ='orchid' //changes the color

const p = document.querySelector('p');
p.style.color ='white';
p.style.backgroundColor ='yellow';

const alilis = document.querySelectorAll('li');
const colors = ['red','orchird','yellow','brown','orange']

alilis.forEach((el,i)=>{
    const color = colors[i];
    li.style.color=color
})