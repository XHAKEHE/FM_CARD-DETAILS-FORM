import { useContext, useState } from 'react'
import Input from './Input'
import Button from './Button'
import inputContext from './input-context'
import classes from './Form.module.css'
import complete from '../images/icon-complete.svg'


const Form = () => {
	const ctx = useContext(inputContext)
	const [feedback, setFeedback] = useState({ start: true })

	const onSubmitBtn = e => {
		e.preventDefault()

		setFeedback({ name: '', number: '', dateMonth: '', dateYear: '', cvc: '' })

		if (ctx.inputData.name.length === 0) {
			setFeedback(prevState => ({ ...prevState, name: 'Cannot be empty!' }))
		}

		const regex = /[a-zA-Z]/
		if (ctx.inputData.number.length < 16) {
			setFeedback(prevState => ({ ...prevState, number: 'Not enough digits for a card number!' }))
		} else {
			if (regex.test(ctx.inputData.number)) {
				setFeedback(prevState => ({ ...prevState, number: 'Invalid characters in your number!' }))
			}
		}

		if (Number(ctx.inputData.dateMonth) > 12 || ctx.inputData.dateMonth.length < 2) {
			setFeedback(prevState => ({ ...prevState, dateMonth: 'Invalid month!' }))
		}
		if (ctx.inputData.dateYear.length < 2) {
			setFeedback(prevState => ({ ...prevState, dateYear: 'Invalid year!' }))
		}

		if (ctx.inputData.cvc.length < 3) {
			setFeedback(prevState => ({ ...prevState, cvc: 'Invalid CVC!' }))
		}
	}

	const formCompletion = () => {
		if (Object.values(feedback).every(value => value === '')) {
			return true
		} else {
			return false
		}
	}

	const content = () => {
		if (formCompletion()) {
			return (
				<div className='App-content'>
					<img src={complete}></img>
					<h1>Thank you!</h1>
					<p>We've added your caard details</p>{' '}
				</div>
			)
		} else {
			return (
				<form className='App-content'>
					<div className={`${classes['row-container']} ${classes.full}`}>
						<Input
							id='name'
							label='CARDHOLDER NAME'
							placeholder='e.g. Jane Appleseed'
							errorFeedback={feedback.name}
						></Input>
					</div>
					<div className={`${classes['row-container']} ${classes.full}`}>
						<Input
							id='number'
							label='CARD NUMBER'
							maxLength='16'
							placeholder='e.g. 1234 5678 9012 3456'
							errorFeedback={feedback.number}
						></Input>
					</div>

					<div className={`${classes['row-container']} ${classes.full}`}>
						<div className={`${classes['row-container']} ${classes.half}`}>
							<div className={`${classes['row-container']} ${classes.half}`}>
								<Input
									id='date-month'
									label='EXP DATE'
									maxLength='2'
									placeholder='MM'
									errorFeedback={feedback.dateMonth}
								></Input>
							</div>
							<div className={`${classes['row-container']} ${classes.half}`}>
								<Input
									id='date-year'
									label='(MM/YY)'
									maxLength='2'
									placeholder='YY'
									errorFeedback={feedback.dateYear}
								></Input>
							</div>
						</div>
						<div className={`${classes['row-container']} ${classes.half}`}>
							<Input id='cvc' label='CVC' maxLength='3' placeholder='e.g. 123' errorFeedback={feedback.cvc}></Input>
						</div>
					</div>

					<Button text={'Confirm'} onSubmit={onSubmitBtn}></Button>
				</form>
			)
		}
	}

	return content()
}
export default Form
