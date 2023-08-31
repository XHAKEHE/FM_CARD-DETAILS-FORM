import React, { useContext, useRef, useState } from 'react'
import classes from './Input.module.css'
import inputContext from './input-context'
const Input = props => {
	const { inputData, setInputData } = useContext(inputContext)
	const inputRef = useRef('')

	// console.log(props.errorFeedback)

	const inputChangeHandler = e => {
		// console.log(inputRef.current.value.length)

		switch (e.target.id) {
			case 'name':
				setInputData(prevState => ({ ...prevState, name: e.target.value }))

				break
			case 'number':
				setInputData(prevState => ({ ...prevState, number: e.target.value }))
				// console.log('Wpisano numer: ' + inputData.number)
				break
			case 'date-month':
				setInputData(prevState => ({ ...prevState, dateMonth: e.target.value }))
				// console.log('Wpisano date: ' + inputData.dateMonth)
				break
			case 'date-year':
				setInputData(prevState => ({ ...prevState, dateYear: e.target.value }))
				// console.log('Wpisano date: ' + inputData.dateYear)
				break
			case 'cvc':
				setInputData(prevState => ({ ...prevState, cvc: e.target.value }))
				// console.log('Wpisano cvc: ' + inputData.cvc)
				break

			default:
				console.log('NIE ROZPOZNANO!!!')
				break
		}
	}

	return (
		<div className={classes['col-container']}>
			<label>{props.label}</label>
			<input
				id={props.id}
				maxLength={props.maxLength}
				placeholder={props.placeholder}
				onChange={inputChangeHandler}
			></input>
			<p className={classes.feedback}>{props.errorFeedback}</p>
		</div>
	)
}

export default Input
