import React, { useContext, useState } from 'react'
import classes from './Input.module.css'
import inputContext from './input-context'
const Input = props => {
	const { inputData, setInputData } = useContext(inputContext)

	const inputChangeHandler = e => {
		switch (e.target.id) {
			case 'name':
				setInputData(prevState => ({ ...prevState, name: e.target.value }))
				// console.log('Wpisano imię: ' + inputData.name)
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
		// console.log(inputData)
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
		</div>
	)
}
export default Input
