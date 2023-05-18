import React from 'react'

import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

function ExpensesList(props) {

    return (
      <ul className='expenses-list'>
      {props.filter.length === 0 ? (
          <h2 className='expenses-list__fallback'>Found no expenses...</h2>
        ) : (
          props.filter.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}
    </ul>
  )
}

export default ExpensesList
