import React, {useState} from 'react';
import IconDice from './assets/icon-dice.svg';
import DividerIcon from './assets/divider-icon.svg';
import './App.css';

function App() {
	const [adviceNumber, setAdviceNumber] = useState<number>(117);
	const [adviceText, setAdviceText] = useState<string>('It is easy to sit up and take notice, what’s difficult is getting up and taking action.');
	const [scaleValue, setScaleValue] = useState<number>(1);

	const loadAdvice = () => {
		setScaleValue(0);
		fetch('https://api.adviceslip.com/advice').then((response) => {
			response.json().then((data) => {
				setAdviceNumber(data.slip.id);
				setAdviceText(data.slip.advice);
				setScaleValue(1);
			});
		});
	};

	return (
		<div className='app'>
			<div className='card' style={{transform: `scale(${scaleValue})`}}>
				<p className='advice-number'>ADVICE #{adviceNumber}</p>
				<p className='advice-text'>"{adviceText}"</p>
				<div className='divider-container'>
					<img src={DividerIcon} alt='' className='divider-icon' />
				</div>
				<button id='load-advice' aria-label='Load advice' className='icon-dice-button' onClick={loadAdvice}>
					<img src={IconDice} alt='Button to get random advice' className='icon-dice-img' />
				</button>
			</div>
		</div>
	);
}

export default App;
