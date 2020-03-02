import React, { Component } from 'react';
import WeatherBlock from '../weatherBlock/WeatherBlock';
import '../../index.scss';

import cloud from '../../Images/weatherBackgroundImages/cloud.jpg';
import morning1 from '../../Images/weatherBackgroundImages/morning1.jpg';
import rainMorning from '../../Images/weatherBackgroundImages/rainMorning.jpg';
import snowStorm from '../../Images/weatherBackgroundImages/snowStorm.jpg';
import stormMorning from '../../Images/weatherBackgroundImages/stormMorning.jpg';
import day from '../../Images/weatherBackgroundImages/day.jpg';
import night from '../../Images/weatherBackgroundImages/night.jpg';

// import cityList from './city.list.json';

const API_KEY = 'd1663099de2c72e24962a3ac1d663db6';

class WeatherGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      nameCity: '',
      currentTemperature: '',
      minTemperature: '',
      maxTemperature: '',
      cloudiness: '',
      humidity: '',
      sunrise: '',
      sunset: '',
      wind: '',
      pressure: '',
      weatherConditions: '',
      fiveDays: [],
      currentDayData: '',
    };
  }

  componentWillMount() {
    
  }

  weatherBackground = weatherConditions => {
    if (this.state.nameCity) {
      switch (weatherConditions) {
        case 'Thunderstorm':
          return `${stormMorning}`;
        case 'Drizzle':
        case 'Rain':
          return `${rainMorning}`;
        case 'Snow':
          return `${snowStorm}`;
        case 'Clear':
          return `${morning1}`;
        case 'Clouds':
          return `${cloud}`;
        default:
          break;
      }
    }
  };



  weatherBackgroundDayOrNight = () => {
    let d = new Date();
    let hour = d.getHours();

    if (hour > 7 && hour < 18) {
      return day;
    }
    return night;
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const myInit = { method: 'GET', mode: 'cors' };
    const requestCurrentDay = fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&appid=${API_KEY}`,
      myInit
    );
    const requestFiveDays = fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&units=metric&appid=${API_KEY}`,
      myInit
    );

    if (this.state.city) {
      Promise.all([requestCurrentDay, requestFiveDays]).then(elements => {
        return Promise.all(elements.map(response => response.json()))
          .then(([currentDay, fiveDays]) => {
            const fiveDaysData = fiveDays.list.filter(value =>
              value.dt_txt.includes('15:00:00')
            );

            this.setState({
              nameCity: currentDay.name,
              currentTemperature: currentDay.main.temp,
              maxTemperature: `${currentDay.main.temp_max}°`,
              cloudiness: currentDay.weather[0].description,
              humidity: `${currentDay.main.humidity}%`,
              sunrise: currentDay.sys.sunrise,
              sunset: currentDay.sys.sunset,
              wind: currentDay.wind,
              pressure: currentDay.main.pressure,
              weatherConditions: currentDay.weather[0].main,
              currentDayData: currentDay.weather[0].icon,
              fiveDays: fiveDaysData,
              icon: `https://openweathermap.org/img/wn/${currentDay.weather[0].icon}@2x.png`,
            });
          })
          .catch(error => console.error(`Error: ${error}`));
      });
    } else {
      alert('Please enter a city name');
    }
  };

  render() {
    return (
      <section
        className="weather-block__wrapper"
        style={
          !this.state.nameCity
            ? { background: `url(${this.weatherBackgroundDayOrNight()})` }
            : {
                background: `url(${this.weatherBackground(
                  this.state.weatherConditions
                )})`,
              }
        }
      >
        <WeatherBlock
          data={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </section>
    );
  }
}

export default WeatherGenerator;
