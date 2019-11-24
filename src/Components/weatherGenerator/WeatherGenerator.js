import React, {Component} from 'react';
import WeatherBlock from '../weatherBlock/WeatherBlock';
import '../../index.scss';

const API_KEY = 'd1663099de2c72e24962a3ac1d663db6';

class WeatherGenerator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			"dataWeather": {},
			"city": '',
			"nameCity": '',
			"currentTemperature": '',
			"minTemperature": '',
			"maxTemperature": '',
			"cloudiness": '',
			"icon": '',
			"humidity": '',
			"sunrise": '',
			"sunset": '',
			"wind": '',
			"pressure": '',
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.sunTime = this.sunTime.bind(this);
	}

	sunTime(time) {
		const unixSunrise = new Date(time * 1000);
		const hours = ('0' + unixSunrise.getHours()).slice(-2),
					minute = ('0' + unixSunrise.getMinutes()).slice(-2);
		return `${hours}:${minute}`;
	};
			
	handleChange(event) {
		const {name, value} = event.target;
		this.setState({ [name]: value })
	}

	handleSubmit(event) {
		event.preventDefault();

		if (this.state.city) {
			fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&lang=ru&units=metric&appid=${API_KEY}`)
				.then(response => response.json())
				.then(data => {
					this.setState({
						dataWeather: data,
						nameCity: data.name,
						currentTemperature: `${data.main.temp}°`,
						maxTemperature: `${data.main.temp_max}°`,
						cloudiness: data.weather[0].description,
						humidity: `${data.main.humidity}%`,
						sunrise: this.sunTime(data.sys.sunrise),
						sunset: this.sunTime(data.sys.sunset),
						wind: data.wind,
						pressure: data.main.pressure,
						icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
					})
				})
				.catch(error => console.error(`Error: ${error}`))
		} else {
			alert('введите город');
		}
	}

	render() {
		return(
			<div className="weather-block__wrapper">
				<WeatherBlock 
					data={this.state}
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
				/>
			</div>
		)
	}
}

export default WeatherGenerator;