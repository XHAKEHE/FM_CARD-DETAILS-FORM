import React, { useContext, useRef, useState } from 'react'
import classes from './Input.module.css'
import inputContext from './input-context'
const Input = props => {
	const { inputData, setInputData } = useContext(inputContext)
	const inputRef = useRef('')

	let feedback = 'wrong whatever'
	if (props.id === 'name') {
		feedback = 'wrong name'
	}
	if (props.id === 'number') {
		feedback = 'wrong number'
	}

	const inputChangeHandler = e => {
		// console.log(inputRef.current.value.length)

		console.log(feedback)
		switch (e.target.id) {
			case 'name':
				setInputData(prevState => ({ ...prevState, name: e.target.value }))
				// console.log('Wpisano imię: ' + inputData.name)
				if (e.target.value.length < 3 && inputRef.current !== 'now its ok' && inputRef.current !== 'wrong again :(') {
					inputRef.current = 'correct the input'
				} else {
					inputRef.current = 'now its ok'
				}
				if (e.target.value.length < 3 && inputRef.current === 'now its ok') {
					inputRef.current = 'wrong again :('
				}
				console.log(inputRef.current)

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
			<p className={classes.feedback}>{feedback}</p>
		</div>
	)
}

export default Input
