import React from 'react';

const mainCard = (props) => {
	const {
		nameCity,
		currentTemperature,
		minTemperature,
		cloudiness,
		icon,
		humidity,
		sunrise,
		sunset,
		wind,
		pressure} = props.data;
	return (
		<div className="weather-card">
			<h1 className="weather-card__title">{nameCity}</h1>
			<p className="weather-card__currently">
				{	icon ?
					<img src={icon} alt="" className="weather-card__currently-icon"></img>
					: null
				}
				<span>
					{currentTemperature}
				</span>
			</p>
			<p className="weather-card__data cloudiness">{cloudiness}</p>
			{humidity ? 
				<p className="weather-card__list-data">
					<span className="weather-card__item-data wind">Wind {wind.speed}m/s</span>
					<span className="weather-card__item-data">Humidity {humidity}</span><br/>
					<span className="weather-card__item-data">Pressure {pressure}</span>
				</p> : null
			}
			{sunrise && sunset ?
				<div className="weather-card__sun-wrapper">
					<p className="weather-card__sun sunrise">
						<span className="weather-card__sun-data sun-card">Sunrise: </span>
						{sunrise}
					</p>
					<p className="weather-card__sun sunset">
						<span className="weather-card__sun-data sun-card">Sunset: </span>
						{sunset}
					</p>
				</div> : null
			}
		</div>
	)
};

export default mainCard;