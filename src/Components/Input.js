import React from 'react'
import classes from './Input.module.css'
const Input = (props) => {
	return (
		<div className={classes['col-container']}>
			<label>{props.label}</label>
			<input></input>
		</div>
	)
}
export default Input
