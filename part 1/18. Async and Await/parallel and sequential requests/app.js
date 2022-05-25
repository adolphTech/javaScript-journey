
////////////////sequential requests
async function get3Pokemon(){
   const poke1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1")
   const poke2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2")
   const poke3 = await axios.get("https://pokeapi.co/api/v2/pokemon/3")
   console.log(poke1.data);
   console.log(poke2.data);
   console.log(poke3.data);

}

//get3Pokemon();

////////////////parallel requests
// async function get3Pokemon(){
//    const prom1 =  axios.get("https://pokeapi.co/api/v2/pokemon/1")
//    const prom2 =  axios.get("https://pokeapi.co/api/v2/pokemon/2")
//    const prom3 =  axios.get("https://pokeapi.co/api/v2/pokemon/3")
//   const poke1 = await prom1
//   const poke2 = await prom2
//   const poke3 = await prom3
//    console.log(poke1.data);
//    console.log(poke2.data);
//    console.log(poke3.data);

// }

// get3Pokemon();

//////////light show

async function changesCol(color,delay){
   new Promise((resolve,reject)=>{
      setTimeout(()=>{

         document.body.style.backgroundColor=color;

      },delay)
   resolve()
   })
}

async function lightShow(){
  await changesCol('Red',1000)
  await changesCol('orange',2000)
  await changesCol('yellow',3000)
  await changesCol('green',4000)
  await changesCol('blue',5000)
  await changesCol('indigo',6000)
  await changesCol('violet',7000)
}

lightShow();