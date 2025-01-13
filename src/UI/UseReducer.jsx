// import React, { useReducer, useState } from 'react'
// const reducerFunc =(state, action)=> {
//   if (action.type === "CHANGE-NAME") {
//     return {...state, user: action.payload}
//   }else{
//     return state
//   }
// }

// const UseReducer = () => {
    
//     const [state, dispatch] = useReducer(reducerFunc, {user: "Beka"})
// console.log(state);

// const clickHandler = ()=>{
//     dispatch({type: "CHANGE NAME", payload:"Kanbolot"})
// }

//   return (
//     <div>
//             <h1>{state.user}</h1>
//             <button onClick={clickHandler}>Click</button>
//     </div>
//   )
// }

// export default UseReducer