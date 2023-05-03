import React, { useRef } from 'react'

const UseRefHook = () => {
    let ref = useRef(0)
    function handleClick(){
        ref.current = ref.current + 1;
    }

  return (
    <div>
        <h1>Use Ref Hook</h1>
        <h3>Count: {ref.current}</h3>
        <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default UseRefHook;