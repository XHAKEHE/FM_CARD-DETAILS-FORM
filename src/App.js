import React, { useContext, useState } from 'react'

import Header from './Components/Header'
import Form from './Components/Form'
import InputContext from './Components/input-context'

import './App.css'

function App() {
	const [inputData, setInputData] = useState({
		name: '', number: '', dateMonth: '', dateYear: '', cvc: ''
	})

	return (
		<div className='App'>
			<InputContext.Provider value={{ inputData, setInputData }}>
				<Header></Header>
				<Form></Form>
			</InputContext.Provider>
		</div>
	)
}

export default App
