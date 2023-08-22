import React, { useContext } from 'react'
import classes from './Button.module.css'
import inputContext from './input-context'
const Button = () => {
	const ctx = useContext(inputContext)

	const submitHandler = e => {
		e.preventDefault()
		console.log(ctx.inputData)
	}

	return <button onClick={submitHandler}>Confirm</button>
}
export default Button
