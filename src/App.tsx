import React, {useState} from 'react';
import IconDice from './assets/icon-dice.svg';
import {ThreeDots} from 'react-loader-spinner';
import DividerIcon from './assets/divider-icon.svg';
import './App.css';

function App() {
	const [adviceNumber, setAdviceNumber] = useState<number>(117);
	const [adviceText, setAdviceText] = useState<string>('It is easy to sit up and take notice, what’s difficult is getting up and taking action.');
	const [loading, setLoading] = useState<boolean>(false);

	const loadAdvice = () => {
		setLoading(true);

		fetch('https://api.adviceslip.com/advice').then((response) => {
			response.json().then((data) => {
				setAdviceNumber(data.slip.id);
				setAdviceText(data.slip.advice);
				setLoading(false);
			});
		});
	};

	return (
		<div className='app'>
			<div className='card'>
				<p className='advice-number'>ADVICE #{adviceNumber}</p>
				<p className='advice-text'>"{adviceText}"</p>
				<div className='divider-container'>
					<img src={DividerIcon} alt='' className='divider-icon' />
				</div>
				<button className='icon-dice-button' onClick={loadAdvice}>
					<ThreeDots height='30' width='30' radius='9' color='hsl(218, 23%, 16%)' visible={loading} />
					{!loading && <img src={IconDice} alt='' className='icon-dice-img' />}
				</button>
			</div>
		</div>
	);
}

export default App;
