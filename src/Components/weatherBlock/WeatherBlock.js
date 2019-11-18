import React from 'react';
import MainCard from './cards/MainCard';
// import FiveDaysCards from './cards/fiveDaysCards';
import './weatherBlock.scss';

function WeatherBlock(props) {
	const { city } = props.data;
	return (
		<section className="weather-block">
			<MainCard 
				data={props.data}
			/>
			{/* <FiveDaysCards /> */}
			<form className="weather-form" onSubmit={props.handleSubmit}>
				<input
					type="text"
					name="city"
					className="weather-form__input"
					placeholder="Type your city, please"
					value={city}
					onChange={props.handleChange}
					autoComplete="off"
				/>
				<button type="submit" className="weather-form__button"></button>
			</form>
		</section>
	)
};

export default WeatherBlock;