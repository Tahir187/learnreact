import React,{useState, useMemo} from 'react'

const UseMemoHook = () => {
    const [num, setNum] = useState(0);
    const [show, setShow] = useState(true)

    const getValue = () =>{
        return setNum(num + 1);
    }
    const counterNumber = () =>{
        for(let i = 0; i <= 1000; i++){
            return num;
        }
    }
    const Show = () =>{
        setShow(!show) 
    }
    const checkData = counterNumber(num)
  return (
    <div>
      <button onClick={getValue}>Counter</button>
      <p>My new number: {checkData}</p>
      <button onClick={Show}>{show ? "You clicked me" : "Click me plz"}</button>
    </div>
  )
}

export default UseMemoHook
