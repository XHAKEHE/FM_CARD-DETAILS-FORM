import Input from './Input'
import Button from './Button'
import classes from './Form.module.css'

const Form = () => {
	return (
		<form className='App-content'>
			<div className={`${classes['row-container']} ${classes.full}`}>
				<Input id='name' label='CARDHOLDER NAME' placeholder='e.g. Jane Appleseed'></Input>
			</div>
			<div className={`${classes['row-container']} ${classes.full}`}>
				<Input id='number' label='CARD NUMBER' maxLength='16' placeholder='e.g. 1234 5678 9012 3456'></Input>
			</div>
			<div className={`${classes['row-container']} ${classes.full}`}>
				<div className={`${classes['row-container']} ${classes.half}`}>
					<div className={`${classes['row-container']} ${classes.half}`}>
						<Input id='date-month' label='EXP DATE' maxLength='2' placeholder='MM'></Input>
					</div>
					<div className={`${classes['row-container']} ${classes.half}`}>
						<Input id='date-year' label='(MM/YY)' maxLength='2' placeholder='YY'></Input>
					</div>
				</div>
				<div className={`${classes['row-container']} ${classes.half}`}>
					<Input id='cvc' label='CVC' maxLength='3' placeholder='e.g. 123'></Input>
				</div>
			</div>
			<Button></Button>
		</form>
	)
}
export default Form
