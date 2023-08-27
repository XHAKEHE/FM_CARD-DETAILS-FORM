import React, { useContext, useState } from 'react'
import classes from './Button.module.css'
import inputContext from './input-context'
const Button = props => {
	const ctx = useContext(inputContext)
	const [feedback, setFeedback] = useState({ dateMonth: '', number: '' })

	const submitHandler = e => {
		e.preventDefault()
		// console.log(ctx.inputData)

		setFeedback({ dateMonth: '', number: '' })
		const regex = /[a-zA-Z]/
		if (regex.test(ctx.inputData.number) || Number(ctx.inputData.number) < 16) {
			setFeedback(prevState => ({ ...prevState, number: 'Wrong number!' }))
		}
		if (Number(ctx.inputData.dateMonth) > 12 || Number(ctx.inputData.dateMonth) === 0) {
			setFeedback(prevState => ({ ...prevState, dateMonth: 'Wrong date!' }))
		}

		// console.log(regex.test(regex.test(ctx.inputData.number) || Number(ctx.inputData.number) < 16))
		// console.log(Number(ctx.inputData.dateMonth) > 12 || Number(ctx.inputData.dateMonth) === 0)
	}

	props.onSubmit(feedback)
	return <button onClick={submitHandler}>Confirm</button>
}
export default Button
