// fetch (`https://geo.ipify.org/api/v2/country?apiKey=at_5DAB1aP4WTrrt42V7haIbcR1oJLo0&`)
// .then((response)=>{
//     response.json()
//     .then((data)=>{
//         // console.log(data)
//         console.log=(`Your IP is ${data.ip}`)
//         // console.log(`Your internet route is ${data.as.route}`)
//         console.log(`Your Internet Service Provider is ${data.isp}`)
//         console.log(`Your country is ${data.location.country}`)
//         console.log(`You stay in ${data.location.region}`)
//         console.log(`Your timezone is ${data.location.timezone} GMT`)
//         console.log(`Your ISP Domain is ${data.as.domain}`)
        

//     })
// })

////////////////////////////asynch

async function getIP(){
response = await axios .get("https://geo.ipify.org/api/v2/country?apiKey=at_5DAB1aP4WTrrt42V7haIbcR1oJLo0&")

alert(response.data.ip)
}