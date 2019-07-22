import React from 'react';
import {Search} from '../view/search.js'
import {Button} from '../view/button.js'
import {nativeCity} from '../model/nativeCity.js'
import {source2} from '../model/source2.js'
import './App.css';
import {WeatherForecast} from '../view/WeatherForecast.js'
class App extends React.Component {
  constructor(props){
super(props);
this.state = {city : '',weatherCity: '', temperature: '', wind: '', clouds: '', rain: '',humidity:''}
this.seachCity = this.seachCity.bind(this)
this.firstSource = this.firstSource.bind(this)
this.secondSource = this.secondSource.bind(this)
  }
  seachCity(city){
    this.setState({
      city: city
    });
    console.log(this.state.city)
  }
  async firstSource() {
    const correntCity =`http://api.apixu.com/v1/current.json?key=2d68821759544daa99f214023192107&q=${this.state.city}`

    const arrWeather= await source2(correntCity)
    console.log(arrWeather)
    this.setState({
      weatherCity: arrWeather[0],
      temperature: ` ${arrWeather[1]} degrees Celsius`,
      wind: ` ${arrWeather[2]} km/h`,
      clouds: arrWeather[3],
      rain: arrWeather[4],
      humidity:  ` ${arrWeather[5]} %`
    });
    localStorage.setItem('weatherCity', arrWeather[0]);
    localStorage.setItem('temperature',` ${arrWeather[1]} degrees Celsius`);
    localStorage.setItem('wind',` ${arrWeather[2]} km/h`);
    localStorage.setItem('clouds', arrWeather[3]);
    localStorage.setItem('rain',arrWeather[4]);
    localStorage.setItem('humidity', arrWeather[5]);
    const date =  Date.now();
    localStorage.setItem('date', date);
  }
  async secondSource() {
    const correntCity = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&APPID=94d6a1218ba19ff75a6cd648d9714be1`

    const arrWeather= await nativeCity(correntCity)
    console.log(arrWeather)
    this.setState({
      weatherCity: arrWeather[0],
      temperature: ` ${arrWeather[1]} degrees Celsius`,
      wind: ` ${arrWeather[2]} km/h`,
      clouds: arrWeather[3],
      rain: arrWeather[4],
      humidity:  ` ${arrWeather[5]} %`
    });
    localStorage.setItem('weatherCity', arrWeather[0]);
    localStorage.setItem('temperature',` ${arrWeather[1]} degrees Celsius`);
    localStorage.setItem('wind',` ${arrWeather[2]} km/h`);
    localStorage.setItem('clouds', arrWeather[3]);
    localStorage.setItem('rain',arrWeather[4]);
    localStorage.setItem('humidity', arrWeather[5]);
    const date =  Date.now();
    localStorage.setItem('date', date);
  }
   
  componentWillMount() {
  let dateCurrent =  Date.now();
 
   if(dateCurrent - localStorage['date'] < 7200000){
      this.setState({
        weatherCity: localStorage['weatherCity'],
        temperature:  localStorage['temperature'],
        wind:  localStorage['wind'],
        clouds:  localStorage['clouds'],
        rain:  localStorage['rain'],
        humidity:  localStorage['humidity']
       
      });
    
    }
    
   
  }
  render() {
   
    
  return (
    <div>
      <h1>WEATHER APP</h1>
<div><Search changeValue = {this.seachCity}/></div>
<div><Button content='First source' handleClick={this.firstSource}/></div>
<div><Button content='Second source' handleClick={this.secondSource}/></div>
<p class ='city'>Your city: <span id='user-city'></span> </p>
< WeatherForecast city = {this.state.weatherCity} temperature = {this.state.temperature} wind ={this.state.wind} rain = {this.state.rain} clouds= {this.state.clouds} humidity = {this.state.humidity}/>
    </div>
  );
  }
}


export default App;
