import React from 'react'

const inputContext = React.createContext({
	inputData: { name: '', number: '', dateMonth: '', dateYear: '', cvc: '' },
	setInputData: () => {},
})

export default inputContext
