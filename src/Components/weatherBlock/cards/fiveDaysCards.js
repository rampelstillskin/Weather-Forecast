import React from 'react';
import './fiveDaysCards.scss';

// const getWeekDay = (date) => {
// 	let days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
// 	return days[date.getDay()];
// }

// let date = new Date();

const FiveDaysCards = (props) => {
	return(
		<div className="five-cards__wrapper">
			<ul className="cards-list">
				<li className="cards-item">
					<span>Humidity</span>
					<img src={props.data.icon} alt=""/>
					<p>
						<span>{props.data.minTemperature}</span>
						<span>{props.data.maxTemperature}</span>
					</p>
					<span>Humidity</span>
				</li>
				{/* <li className="cards-item">
					<span>Humidity</span>
					<img src="" alt=""/>
					<p>
						<span>Humidity</span>
						<span>Humidity</span>
					</p>
					<span>Humidity</span>
				</li> */}
				{/* <li className="cards-item">
					<span>Humidity</span>
					<img src="" alt=""/>
					<p>
						<span>Humidity</span>
						<span>Humidity</span>
					</p>
					<span>Humidity</span>
				</li>
				<li className="cards-item">
					<span>Humidity</span>
					<img src="" alt=""/>
					<p>
						<span>Humidity</span>
						<span>Humidity</span>
					</p>
					<span>Humidity</span>
				</li>
				<li className="cards-item">
					<span>Humidity</span>
					<img src="" alt=""/>
					<p>
						<span>Humidity</span>
						<span>Humidity</span>
					</p>
					<span>Humidity</span>
				</li> */}
			</ul>
		</div>
	);
};

export default FiveDaysCards;