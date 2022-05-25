let getWeather = function() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position){
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        console.log(lat, long)
      })
    }
       else {
            window.alert("Could not get location");
      }
  }