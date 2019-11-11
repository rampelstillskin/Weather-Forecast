import React from 'react';
import './weatherCard.scss';

function WeatherCard(props) {
	const { 
		currentTemperature,
		minTemperature,
		cloud,
		pressure,
		city
	} = props.data;
	return (
		<div className="weather-wrapper">
			<div className="weather-card">
				<p><span className="weather-card__data">Temperature: </span>{currentTemperature}</p>
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