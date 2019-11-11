import React, {Component} from 'react';
import WeatherCard from '../card/WeatherCard';

const API_KEY = 'd1663099de2c72e24962a3ac1d663db6';

class WeatherGenerator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataWeather: {},
			city: '',
			currentTemperature: '',
			maxTemperature: '',
			minTemperature: '',
			cloud: '',
			icon: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		}
		
		handleChange(event) {
			const {name, value} = event.target;
			this.setState({ [name]: value })
		}
		
		handleSubmit(event) {
			event.preventDefault();
			if (this.state.city) {
				fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${API_KEY}`)
				.then(repsonse => repsonse.json())
				.then(data =>
					this.setState({
						dataWeather: data,
						currentTemperature: Math.round(data.main.temp - 273),
						minTemperature: Math.round(data.main.temp_min - 273),
						cloud: data.weather[0].description,
						pressure: `${Math.round(data.main.pressure / 1.333)} мм рт.ст`,
						icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
					}))
			} else {
				alert('введите город');
			}
		}

		render() {
			return(
				<div>
					<WeatherCard 
						data={this.state}
						handleChange={this.handleChange}
						handleSubmit={this.handleSubmit}
					/>
				</div>
			)
		}
}

export default WeatherGenerator;