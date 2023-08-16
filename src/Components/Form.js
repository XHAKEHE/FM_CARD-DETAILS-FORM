import Input from './Input'
import Button from './Button'
import classes from './Form.module.css'

const Form = () => {
	return (
		<form className='App-content'>
			<div className={classes['row-container']}>
				<Input label='CARDHOLDER NAME'></Input>
			</div>
			<div className={classes['row-container']}>
				<Input label='CARD NUMBER'></Input>
			</div>
			<div className={classes['row-container']}>
				<Input label='EXP DATE'></Input>
				<Input label='(MM/YY)'></Input>
				<Input label='CVC'></Input>
			</div>
			<Button></Button>
		</form>
	)
}
export default Form
