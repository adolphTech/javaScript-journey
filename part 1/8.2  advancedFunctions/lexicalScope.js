function outer (){
    let movie = 'Amadeus';

    function  inner(){
        console.log(movie.toUpperCase())
    }
    inner()
}
//nested functions are lexically bound to the scope of their parents and not to the child