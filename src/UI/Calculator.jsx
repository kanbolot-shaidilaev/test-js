import React, { useReducer } from 'react'

const reducer =(state, action)=> {
    return state
}
const initialState = {
    number_1: 0,
    number_2: 0,
    operator: "",
    error: "",
}

const Calculator = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
       <input placeholder ="Enter number1 ..." type='number'/>
           <input placeholder ="Enter number2 ..." type="number"/>
              <select name="" id='' >
                    <option value="+">Plus</option>
                    <option value="-">Minus</option>
                    <option value="*">Multipy</option>
                    <option value="/">Divide</option>
              </select><br /><hr />
           <button>Calculate</button> 
         <h1>Result: </h1>
    </div>
  )
}

export default Calculator