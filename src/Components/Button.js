import React, { useContext, useState } from 'react'
import classes from './Button.module.css'
import inputContext from './input-context'
const Button = () => {
	const ctx = useContext(inputContext)
	const [feedback, setFeedback] = useState({ name: '', number: '' })

	const submitHandler = e => {
		e.preventDefault()
		console.log(ctx.inputData)

		const regex = /[a-zA-Z]/
		if (regex.test(ctx.inputData.number)) {
			setFeedback(prevState => ({ ...prevState, name: 'Wrong format' }))
			console.log(feedback.name)
		}
	}

	return <button onClick={submitHandler}>Confirm</button>
}
export default Button
