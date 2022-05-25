 const btn = document.querySelector('button');
// setTimeout(()=>{
//     btn.style.transform = `translateX(100px)` 
// },1000);

//CREATE A FUNCTION TO DO THIS

const moveX = (element,amount,delay,callback) => {
    const bodyBoundary = document.body.clientWidth;

    const elRight = element.getBoundingClientRect().right;
    
    setTimeout(()=> {
    element.style.transform = `translateX(${amount}px)`;
    if(callback)callback();
},delay);

};

moveX(btn,100,1000,()=>{
    moveX(btn,200 ,1000,()=>{
      moveX(btn,300,1000,()=>{
          moveX(btn,400,1000,()=>{
              moveX(btn,600,1000);
          });
      });
    });
});

Request()