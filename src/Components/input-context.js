import React from 'react'

const inputContext = React.createContext({
	inputData: { name: 'dhr45', number: '9999 9999 9999 9999', dateMonth: '99', dateYear: '99', cvc: '999' },
	setInputData: () => {},
})

export default inputContext
