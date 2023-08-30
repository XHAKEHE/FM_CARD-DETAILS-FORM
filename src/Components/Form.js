import Input from './Input'
import Button from './Button'
import classes from './Form.module.css'
import { useState } from 'react'

const Form = () => {
	const [feedback, setFeedback] = useState({ start: true })
	const [formCompleted, setFormCompleted] = useState(false)
	const onSubmitBtn = btnFeedback => {
		setFeedback(btnFeedback)
		if (Object.values(feedback).every(value => value === '')) {
			setFormCompleted(true)
		} else {
			setFormCompleted(false)
		}
		// console.log(feedback)
	}
	console.log(formCompleted)

	const content = () => {
		if (formCompleted) {
			return <p>siemanko</p>
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

					<Button onSubmit={onSubmitBtn}></Button>
				</form>
			)
		}
	}

	return content()
}
export default Form
