import React from 'react';
import MainCard from './cards/MainCard';
import FiveDaysCards from './cards/FiveDaysCards';
import './weatherBlock.scss';

function WeatherBlock(props) {
  const { city } = props.data;

  return (
    <div className="weather-block">
      <MainCard data={props.data} />
      <FiveDaysCards data={props.data} />
      <form className="weather-form" onSubmit={props.handleSubmit}>
        <input
          type="text"
          name="city"
          className="weather-form__input"
          placeholder="City name"
          value={city}
          onChange={props.handleChange}
          autoComplete="off"
        />
        <button type="submit" className="weather-form__button" />
      </form>
    </div>
  );
}

export default WeatherBlock;
