import React from 'react'
import ExpenseFrom from './ExpenseForm'
import {connect} from 'react-redux'
import { addExpense } from '../actions/expenses'

const AddExpensePage = (props) => {
  return (
    <div>
      This is a create AddExpensePage.
      <ExpenseFrom 
        onSubmit={(expense) => {
          props.dispatch(addExpense(expense))
          props.history.push('/')
        }}
      />
    </div>
  )
}
export default connect()(AddExpensePage)