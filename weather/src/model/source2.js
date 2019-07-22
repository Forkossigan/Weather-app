function getMainInformation(inform){
    if(!inform.error){
    const city = inform.location.name;
    const temperature = inform.current.temp_c;
    const wind = inform.current.wind_kph;
    const clouds = inform.current.cloud;
    const rain = inform.current.condition.text;
    const humidity = inform.current.humidity;
    return [city, temperature, wind,clouds, rain, humidity];
    }
       
       else{return['unknown city','','','','',''] }
  }
  
  export   async function source2(cityAPI){
     const freegeoipJson =  await fetch(cityAPI);
    const cityInform = await freegeoipJson.json();
    console.log(cityInform);
   const mainInf = await getMainInformation(cityInform);
  
    return mainInf;
  
  }