const fakeRequest  = (url)=> {
return new Promise ((resolve,reject)=>{
setTimeout(()=>{
   const pages = {
       '/users':[
           {id:1 ,username:'Bilbo'},
           {id:5, username:'Esmarelda'}
       ],
       '/about': 'This is the about page'
   };
   const data = pages[url];
   if(data){
   resolve({status:200,data});
   }else
   {
       reject({status:404})
   }
},1000);
});
};
fakeRequest('/users')
.then((res)=>{
    console.log('status code',res.status);
    console.log('DATA', res.data);
    console.log("REQUEST WORKED");
})
.catch((res)=>{
    console.log("REQUEST FAILED");
    console.log(res.status)
});

fakeRequest('/dogs')
.then((res)=>{
    console.log('status code',res.status);
    console.log('DATA', res.data);
    console.log("REQUEST WORKED");
})
.catch((res)=>{
    console.log("REQUEST FAILED");
    console.log(res.status)
});