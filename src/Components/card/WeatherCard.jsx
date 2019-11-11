import React from 'react';
import './weatherCard.scss';

function WeatherCard(props) {
	const { 
		currentTemperature,
		minTemperature,
		cloud,
		pressure,
		city,
		icon
	} = props.data;
	
	// // const imgSrc =  props.handleSubmit.event ? `http://openweathermap.org/img/wn/${icon}.png` : null;
	// console.log(props.handleSubmit.event)

	return (
		<div className="weather-wrapper">
			<div className="weather-card">
				<p className="weather-card__currently">
					<img src={icon} alt=""></img>
					<span>
						{currentTemperature}
					</span>
				</p>
				<p><span className="weather-card__data">Min. Temperature: </span>{minTemperature}</p>
				<p><span className="weather-card__data">Cloudiness: </span>{cloud}</p>
				<p><span className="weather-card__data">Pressure: </span>{pressure}</p>
			</div>
			<form className="form-weather" onSubmit={props.handleSubmit}>
				<input
					type="text"
					name="city"
					className="form-weather__input"
					value={city}
					onChange={props.handleChange}
				/>
				<button type="submit" className="form-weather__butoton">Отправить</button>
			</form>
		</div>
	)
};

export default WeatherCard;