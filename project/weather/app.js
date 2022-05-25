let getWeather =  function getSky(func){ 

        navigator.geolocation.getCurrentPosition( function(position){
          let lat = position.coords.latitude;
          let long = position.coords.longitude;
          

          async function getClimate(){
          response = await axios .get(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${long}&key=8786aa3e2ac848a28102fc3f98ac5529`)
         console.log(response.data)
          }        
    getClimate();
    })  
  };

getWeather();



