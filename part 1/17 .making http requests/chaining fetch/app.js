fetch ('https://swapi.dev/api/planets')
.then((response)=>{
    if (!response.ok)
    throw new Error(`Status Code Error :${response.status}`);
    
    
   return response.json();
})
.then((data)=>{
    console.log("Fetche dthe first ten planets")
const filmURL = data.results[0].films[0];
return fetch(filmURL);
    })

.then((response)=>{
        if (!response.ok)
        throw new Error(`Status Code Error :${response.status}`);

        
      return  response.json()

})

.then((data)=>{
    console.log('FETCHED FIRST FILM,based off yhe first planet')
    console.log(data.title)
})

.catch((err) =>{
console.log("something went wrong")
console.log(err)
});