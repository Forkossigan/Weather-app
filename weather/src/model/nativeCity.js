
function getMainInformation(inform){
  if(inform.cod!=='400'&&inform.cod!=='404'){
  const city = inform.name;
  const temperature = inform.main.temp - 273.15;
  const wind = inform.wind.speed;
  const clouds = inform.clouds.all;
  const rain = inform.weather[0].description;
  const humidity = inform.main.humidity;
  return [city, temperature, wind,clouds, rain, humidity]
  }
  else{return['unknown city','','','','',''] }
}

export   async function nativeCity(cityAPI){
   const freegeoipJson =  await fetch(cityAPI);
  const cityInform = await freegeoipJson.json();
  console.log(cityInform);
 const mainInf = await getMainInformation(cityInform);
  return mainInf;
}