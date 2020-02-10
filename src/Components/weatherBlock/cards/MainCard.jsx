import React from 'react';

function sunTime(time) {
    const unixSunrise = new Date(time * 1000),
        hours = ('0' + unixSunrise.getHours()).slice(-2),
        minute = ('0' + unixSunrise.getMinutes()).slice(-2);
    return `${hours}:${minute}`;
}

function mainCard(props) {
    const {
        nameCity,
        currentTemperature,
        cloudiness,
        icon,
        humidity,
        sunrise,
        sunset,
        wind,
        pressure,
    } = props.data;
    const roundingTemperature = Math.round(currentTemperature);

    return (
        <div className="weather-card">
            <h1 className="weather-card__title">{nameCity}</h1>
            <p className="weather-card__currently">
                {icon ? (
                    <img
                        src={icon}
                        alt="weather icon"
                        className="weather-card__currently-icon"
                    />
                ) : null}
                {currentTemperature ? (
                    <span>{roundingTemperature}°</span>
                ) : null}
            </p>
            <p className="weather-card__data cloudiness">{cloudiness}</p>
            {humidity ? (
                <p className="weather-card__list-data">
                    <span className="weather-card__item-data wind">
                        Wind speed: {wind.speed} м/с
                    </span>
                    <span className="weather-card__item-data">
                        Humidity: {humidity}
                    </span>
                    <br />
                    <span className="weather-card__item-data">
                        Pressure: {pressure} mbar
                    </span>
                </p>
            ) : null}
            {sunrise && sunset ? (
                <div className="weather-card__sun-wrapper">
                    <p className="weather-card__sun sunrise">
                        <span className="weather-card__sun-data sun-card">
                            Sunrise:{' '}
                        </span>
                        {sunTime(sunrise)}
                    </p>
                    <p className="weather-card__sun sunset">
                        <span className="weather-card__sun-data sun-card">
                            Sunset:{' '}
                        </span>
                        {sunTime(sunset)}
                    </p>
                </div>
            ) : null}
        </div>
    );
}

export default mainCard;
