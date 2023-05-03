import { type } from '@testing-library/user-event/dist/type';
import React, {useReducer} from 'react'

const initialValue = 0 ;
const UseReducerHook = () => {

    const reducer = (state, action) =>{
        console.log(state, action);
        if(action.type === "Increment"){
            return state + 1;
        }
        if(action.type === "Decrement"){
            return state - 1;
        }
        return state; 
    }
    const [state, dispatch] = useReducer(reducer, initialValue);
    return (
        <div>
            <h2>Use Reducer Hook</h2>
            <p>Counter: {state}</p>
            <button onClick={() => dispatch({type: "Increment"})}>Click Me</button>
            <button onClick={() => dispatch({type: "Decrement"})}>Click Me</button>

        </div>
      )
}

export default UseReducerHook
