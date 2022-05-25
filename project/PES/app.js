async function pes(){
    response = await axios .get("https://www.anapioficeandfire.com/api/characters")
    for (names of response.data){
console.log(names.aliases)
    }

    }
    pes();