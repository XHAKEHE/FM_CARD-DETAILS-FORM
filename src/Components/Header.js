import classes from './Header.module.css'
import cardBack from '../images/bg-card-back.png'
import cardFront from '../images/bg-card-front.png'
import logo from '../images/card-logo.svg'

const Header = () => {
	return (
		<header className='App-header'>
			<div className={classes['card-container']}>
				<div className={classes['card-back']}>
					<img src={cardBack}></img>
					<div className={classes['card-back-cvc']}>000</div>
				</div>
				<div className={classes['card-front']}>
					<img src={cardFront}></img>
					<div className={classes['card-front-logo']}><img src={logo}></img></div>
					<div className={classes['card-front-name']}>name surname</div>
					<div className={classes['card-front-number']}>0000 0000 0000 0000</div>
					<div className={classes['card-front-date']}>11/11</div>
				</div>
			</div>
		</header>
	)
}
export default Header
