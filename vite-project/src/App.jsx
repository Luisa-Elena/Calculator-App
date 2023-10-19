import React from 'react'

export const ACTIONS = {
  SELECT_DIGIT: 'add-digit',
  SELECT_OPERATION: 'select-operation',
  DELETE_CHARACTER: 'delete-character',
  CLEAR: 'clear',
  EQUAL: 'equal'
}

function reducer(state, {type, payload}) {
  switch (type) {

    case ACTIONS.SELECT_DIGIT:
      if(payload.digit==='0' && state.currentOperand==='0')
        return state
      if(payload.digit==='.' && state.currentOperand.includes('.'))
        return state
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`
      }

    case ACTIONS.CLEAR:
      return {}

    case ACTIONS.SELECT_OPERATION:
      if(state.currentOperand==null && state.previousOperand==null)
        return state
      if(state.currentOperand==null) //replace operation sign
        return {
          ...state,
          operation: payload.operation
      }
      if(state.previousOperand==null)
        return {
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null
        }
      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null
      }

    case ACTIONS.DELETE_CHARACTER:
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0,-1)
      }

    case ACTIONS.EQUAL:
      return {
        ...state,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state)
      }
    
    default: return state
  }
}

function evaluate({currentOperand, previousOperand, operation}) {
  let result

  if(previousOperand && currentOperand) {
  const previous = parseFloat(previousOperand)
  const current = parseFloat(currentOperand)
  
  switch(operation) {
      case '/':
        if(current!=0){
          result = previous/current
        }
        break
      case '*':
        result = previous*current
        break
      case '+':
        result = previous+current
        break
      case '-':
        result = previous-current
        break
    }

    if(result) {
      return result.toString()
    }
  } 
}

export default function App() {

  const [{previousOperand, currentOperand, operation}, dispatch] = React.useReducer(reducer, {})

  return (
    <div className='calculator-grid'>
      <div className='output'>
        <div className='previous-operand'>{previousOperand} {operation}</div>
        <div className='current-operand'>{currentOperand}</div>
      </div>
      <button className='span-two' onClick={() => dispatch({type: ACTIONS.CLEAR})}>AC</button>
      <button onClick={() => dispatch({type: ACTIONS.DELETE_CHARACTER})}>DEL</button>
      <button onClick={() => dispatch({type: ACTIONS.SELECT_OPERATION, payload: {operation: '/'}})}>/</button>
      <button onClick={() => dispatch({type: ACTIONS.SELECT_DIGIT, payload: {digit: '1'}})}>1</button>
      <button onClick={() => dispatch({type: ACTIONS.SELECT_DIGIT, payload: {digit: '2'}})}>2</button>
      <button onClick={() => dispatch({type: ACTIONS.SELECT_DIGIT, payload: {digit: '3'}})}>3</button>
      <button onClick={() => dispatch({type: ACTIONS.SELECT_OPERATION, payload: {operation: '*'}})}>*</button>
      <button onClick={() => dispatch({type: ACTIONS.SELECT_DIGIT, payload: {digit: '4'}})}>4</button>
      <button onClick={() => dispatch({type: ACTIONS.SELECT_DIGIT, payload: {digit: '5'}})}>5</button>
      <button onClick={() => dispatch({type: ACTIONS.SELECT_DIGIT, payload: {digit: '6'}})}>6</button>
      <button onClick={() => dispatch({type: ACTIONS.SELECT_OPERATION, payload: {operation: '+'}})}>+</button>
      <button onClick={() => dispatch({type: ACTIONS.SELECT_DIGIT, payload: {digit: '7'}})}>7</button>
      <button onClick={() => dispatch({type: ACTIONS.SELECT_DIGIT, payload: {digit: '8'}})}>8</button>
      <button onClick={() => dispatch({type: ACTIONS.SELECT_DIGIT, payload: {digit: '9'}})}>9</button>
      <button onClick={() => dispatch({type: ACTIONS.SELECT_OPERATION, payload: {operation: '-'}})}>-</button>
      <button onClick={() => dispatch({type: ACTIONS.SELECT_DIGIT, payload: {digit: '.'}})}>.</button>
      <button onClick={() => dispatch({type: ACTIONS.SELECT_DIGIT, payload: {digit: '0'}})}>0</button>
      <button className='span-two' onClick={() => dispatch({type: ACTIONS.EQUAL})}>=</button>
    </div>
  )
}