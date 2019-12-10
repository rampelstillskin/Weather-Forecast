import React from "react";
import "./fiveDaysCards.scss";

const daysWeek = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

function getDayWeek(time) {
  const converterUnixTime = new Date(time * 1000);
  const dayWeek = daysWeek[converterUnixTime.getDay()];
  const dayMonth = converterUnixTime.getDate();
  return `${dayWeek} ${dayMonth}`;
}

function FiveDaysCards(props) {
  return (
    <div className="five-cards__wrapper">
      <ul className="five-cards__list">
        {props.data.days.map(day => {
          const icon = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;

          return (
            <li className="five-cards__item" key={day.dt_txt}>
              <span>{getDayWeek(day.dt)}</span>
              <img src={icon} alt="" />
              <p className="five-cards__temp">
                <span className="five-cards__temp-item">
                  {Math.round(day.main.temp)}°
                </span>
              </p>
              <span className="five-cards__item--description">
                {day.weather[0].description}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FiveDaysCards;
