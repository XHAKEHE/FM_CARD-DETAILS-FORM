import React, { useContext, useState } from 'react'
import classes from './Button.module.css'
import inputContext from './input-context'
const Button = props => {
	const ctx = useContext(inputContext)
	const [feedback, setFeedback] = useState({start: true})

	const submitHandler = e => {
		e.preventDefault()
		// console.log(ctx.inputData.cvc.length)

		setFeedback({ name: '', cvc: '', dateYear: '', dateMonth: '', number: '' })

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
		// console.log(feedback)
	}
	props.onSubmit(feedback)
	return <button onClick={submitHandler}>Confirm</button>
}
export default Button
