import React, { Component } from 'react';
import WeatherBlock from '../weatherBlock/WeatherBlock';
import '../../index.scss';
import cloud from './weatherBackgroundImages/cloud.jpg';
import morning from './weatherBackgroundImages/morning.jpg';
import rainMorning from './weatherBackgroundImages/rainMorning.jpg';
import snowStorm from './weatherBackgroundImages/snowStorm.jpg';
import stormMorning from './weatherBackgroundImages/stormMorning.jpg';

const API_KEY = 'd1663099de2c72e24962a3ac1d663db6';

class WeatherGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataWeather: {},
      city: '',
      nameCity: '',
      currentTemperature: '',
      minTemperature: '',
      maxTemperature: '',
      cloudiness: '',
      icon: '',
      humidity: '',
      sunrise: '',
      sunset: '',
      wind: '',
      pressure: '',
      weatherConditions: '',
      fiveDays: [],
    };
  }

  WeatherBackground(weatherConditions) {
    switch (weatherConditions) {
      case 'Thunderstorm':
        return `${stormMorning}`;
      case 'Drizzle':
      case 'Rain':
        return `${rainMorning}`;
      case 'Snow':
        return `${snowStorm}`;
      case 'Clear':
        return `${morning}`;
      case 'Clouds':
        return `${cloud}`;
      default:
        break;
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const myInit = { method: 'GET', referrer: 'no-referrer', mode: 'cors' };

    const requestCurrentDay = fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&lang=ru&units=metric&appid=${API_KEY}`,
      myInit
    );
    const requestFiveDays = fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&lang=ru&units=metric&appid=${API_KEY}`,
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
              icon: `http://openweathermap.org/img/wn/${currentDay.weather[0].icon}@2x.png`,
              weatherConditions: currentDay.weather[0].main,
              fiveDays: fiveDaysData,
            });
          })
          .catch(error => console.error(`Error: ${error}`));
      });
    } else {
      alert('Введите пожалуйста город');
    }
  };

  render() {
    return (
      <section
        className="weather-block__wrapper"
        style={{
          backgroundImage: `url(${this.WeatherBackground(
            this.state.weatherConditions
          )})`,
        }}
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
