
import React, { useState } from "react";


function Button(){
    const [count, setCount] = useState(0);

    function handleInc(){
        setCount(count +1);
    }

    function handleDec(){
        setCount(count -1);
    }

    return(
        <>
        <h3>Counter: {count}</h3>
        <button onClick={handleInc}>Increment</button> 
        <button onClick={handleDec}>Decrement</button> <br /> <br />
        </>
    )
}
function EventsHandler(){
   
  function handleClick(e){
        e.preventDefault()
        alert("You Clicked me!")
    };
    return(
        <>
        <Button />
        <button onClick={handleClick}>Click Me</button> <br /> <br />
        <Button />

        </>
    );
}

export default EventsHandler