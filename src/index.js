import React from 'react'
import { render } from 'react-dom'

import App from './app.jsx'

const rootElement = document.createElement('div')
rootElement.id = 'app'
document.body.appendChild(rootElement)

render(<App />, rootElement)