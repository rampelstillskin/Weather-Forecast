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
		let url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&lang=ru&units=metric&appid=${API_KEY}`;
		let head = new Headers();
		head.append('Accept', 'application/json');
		let req = new Request(url, {
			method: 'get',
			header: head,
			mode: 'cors'
		});

		// let checkFetch = (response) => {
		// 	if (!response.ok) {
		// 		throw Error(`${response.statusText} - ${response.url}`)
		// 	}
		// 	return response;
		// }
		
		
		const requestMainCard = new Promise((resolve, reject) => {
			if (this.state.city) {
				fetch(req)
					.then(response => resolve(response.json()))
					.catch(error => console.error(`Error: ${error}`))
			} else {
				alert('введите город');
			}
		});

		// const requestFiveCard = new Promise((resolve, reject));
		
		Promise.all([
			requestMainCard
		]).then(value => {
				this.setState({
					dataWeather: value[0],
					nameCity: value[0].name,
					currentTemperature: `${value[0].main.temp}°`,
					minTemperature: `${value[0].main.temp_min}°`,
					maxTemperature: `${value[0].main.temp_max}°`,
					cloudiness: value[0].weather[0].description,
					humidity: `${value[0].main.humidity}%`,
					sunrise: this.sunTime(value[0].sys.sunrise),
					sunset: this.sunTime(value[0].sys.sunset),
					wind: value[0].wind,
					pressure: value[0].main.pressure,
					icon: `https://openweathermap.org/img/wn/${value[0].weather[0].icon}@2x.png`
				})

		})
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