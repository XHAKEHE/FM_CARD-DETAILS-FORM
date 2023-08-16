import classes from './Header.module.css'
import cardBack from '../images/bg-card-back.png'
import cardFront from '../images/bg-card-front.png'

const Header = () => {
	return (
		<header className='App-header'>
			<div className={classes['card-back']}>
				<img src={cardBack}></img>
			</div>
			<div className={classes['card-front']}>
				<img src={cardFront}></img>
			</div>
		</header>
	)
}
export default Header
