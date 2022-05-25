async function bR(){
    response = await axios .get("https://www.breakingbadapi.com/api/")
  const picks =['characters','deaths','episodes','quotes']
  characters =await axios .get(`https://www.breakingbadapi.com/api/${picks[0]}`)
    for (chars of characters.data){
        console.log (chars)
    }
}
    bR();