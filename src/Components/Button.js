import React, { useContext, useState } from 'react'
import classes from './Button.module.css'
import inputContext from './input-context'
const Button = props => {
	return <button onClick={props.onSubmit}>{props.text}</button>
}
export default Button
