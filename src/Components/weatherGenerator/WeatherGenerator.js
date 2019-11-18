import React, {Component} from 'react';
import WeatherBlock from '../weatherBlock/WeatherBlock';

const API_KEY = 'd1663099de2c72e24962a3ac1d663db6';

class WeatherGenerator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataWeather: {},
			city: '',
			nameCity: '',
			currentTemperature: '',
			maxTemperature: '',
			minTemperature: '',
			cloudiness: '',
			icon: '',
			humidity: '',
			sunrise: '',
			sunset: '',
			wind: '',
			pressure: '',
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.sunTime = this.sunTime.bind(this);
		this.celsiusTranslation = this.celsiusTranslation.bind(this);
		}

		sunTime(time) {
			const unixSunrise = new Date(time * 1000);
			const hours = ('0' + unixSunrise.getHours()).slice(-2),
						minute = ('0' + unixSunrise.getMinutes()).slice(-2);
			return `${hours}:${minute}`;
		};
				
		celsiusTranslation(temp) {
			let result = Math.floor(temp - 273.15);
			return result;
		}

		handleChange(event) {
			const {name, value} = event.target;
			this.setState({ [name]: value })
		}
		
		handleSubmit(event) {
			event.preventDefault();
			let url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${API_KEY}`;
			let head = new Headers();
			head.append('Accept', 'application/json');

			let req = new Request(url, {
				method: 'get',
				header: head,
				mode: 'cors'
			});

			let checkFetch = (response) => {
				if (!response.ok) {
					throw Error(`${response.statusText} - ${response.url}`)
				}
				return response;
			}

			if (this.state.city) {
				fetch(req)
				.then(checkFetch)
				.then(response => response.json())
				.then(data =>
					this.setState({
						dataWeather: data,
						nameCity: data.name,
						currentTemperature: `${this.celsiusTranslation(data.main.temp)}°`,
						minTemperature: this.celsiusTranslation(data.main.temp_min),
						cloudiness: data.weather[0].main,
						humidity: `${data.main.humidity}%`,
						sunrise: this.sunTime(data.sys.sunrise),
						sunset: this.sunTime(data.sys.sunset),
						wind: data.wind,
						pressure: `${data.main.pressure} mbar`,
						icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
					}))
				.catch(error => console.error(`Error: ${error}`))
			} else {
				alert('введите город');
			}
		}

		render() {
			return(
				<div>
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