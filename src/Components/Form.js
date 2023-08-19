import Input from './Input'
import Button from './Button'
import classes from './Form.module.css'

const Form = () => {
	return (
		<form className='App-content'>
			<div className={`${classes['row-container']} ${classes.full}`}>
				<Input label='CARDHOLDER NAME' placeholder='e.g. Jane Appleseed'></Input>
			</div>
			<div className={`${classes['row-container']} ${classes.full}`}>
				<Input label='CARD NUMBER' placeholder='e.g. 1234 5678 9012 3456'></Input>
			</div>
			<div className={`${classes['row-container']} ${classes.full}`}>
				<div className={`${classes['row-container']} ${classes.half}`}>
					<div className={`${classes['row-container']} ${classes.half}`}>
						<Input label='EXP DATE' placeholder='MM'></Input>
					</div>
					<div className={`${classes['row-container']} ${classes.half}`}>
						<Input label='(MM/YY)' placeholder='YY'></Input>
					</div>
				</div>
				<div className={`${classes['row-container']} ${classes.half}`}>
					<Input label='CVC' placeholder='e.g. 123'></Input>
				</div>
			</div>
			<Button></Button>
		</form>
	)
}
export default Form
