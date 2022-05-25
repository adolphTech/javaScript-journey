fetch ('https://swapi.dev/api/planets')
.then((response)=>{
    if (!response.ok){
    throw new Error(`Status Code Error :${response.status}`);
    }
    else{
    response.json()
    .then((data)=>{

        for (let planet of data.results){
            console.log(planet.name)
        }
    });};
})

.catch((err) =>{
console.log("something went wrong")
console.log(err);
});
