import React from 'react';

export class WeatherForecast extends React.Component {
    
      
    render() {
        return (
            <div className='weatherForecast'>
                <p>Weather for city: {this.props.city}</p>
                <p>Temperature: {this.props.temperature}</p>
                <p>Wind: {this.props.wind}</p>
                <p>Clouds: {this.props.clouds}</p>
                <p>Rain: {this.props.rain}</p>
                <p>Humidity: {this.props.humidity}</p>
                </div>
        );

    }
}