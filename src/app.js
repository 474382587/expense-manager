import React from 'react'
import ReactDOM from 'react-dom'
// import react router

// root element
import Modal from 'react-modal'
Modal.setAppElement('#app')

import 'normalize.css/normalize.css'
import './styles/styles.scss'
import AppRouter from './routers/AppRouter'


ReactDOM.render(<AppRouter />, document.getElementById('app'))
