import React from 'react'
import ReactDOM from 'react-dom'
// import react router
import AppRouter from './routers/AppRouter'
import configerStore from './store/configerStore'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import { addExpense } from "./actions/expenses";
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import { Provider } from "react-redux";

const store = configerStore();

store.dispatch(addExpense({description: 'water bill', amount:14500}))
store.dispatch(addExpense({description: 'gas bill', amount:24500, createdAt:1000}))
store.dispatch(addExpense({description: 'rent', amount:345000}))

const state = store.getState()
const visibleExpense = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpense)

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
