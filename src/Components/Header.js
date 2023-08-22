import classes from './Header.module.css'
import cardBack from '../images/bg-card-back.png'
import cardFront from '../images/bg-card-front.png'
import logo from '../images/card-logo.svg'

import inputContext from './input-context'
import React, { useContext } from 'react'

const Header = () => {
	const ctx = useContext(inputContext)

	const formatCardNumber = input => {
		const inputWithoutSpaces = input.replace(/\s+/g, '');
		let result = '';
		for (let i = 0; i < inputWithoutSpaces.length; i += 4) {
		  result += inputWithoutSpaces.slice(i, i + 4) + ' ';
		}
		return result.trim(); // Remove the trailing space
	  }

	return (
		<header className='App-header'>
			<div className={classes['card-container']}>
				<div className={classes['card-back']}>
					<img src={cardBack}></img>
					<div className={classes['card-back-cvc']}>{ctx.inputData.cvc}</div>
				</div>
				<div className={classes['card-front']}>
					<img src={cardFront}></img>
					<div className={classes['card-front-logo']}>
						<img src={logo}></img>
					</div>
					<div className={classes['card-front-name']}>{ctx.inputData.name}</div>
					<div className={classes['card-front-number']}>{formatCardNumber(ctx.inputData.number)}</div>
					<div className={classes['card-front-date']}>
						{ctx.inputData.dateMonth}/{ctx.inputData.dateYear}
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
