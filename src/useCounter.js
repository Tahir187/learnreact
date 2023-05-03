import { useEffect, useState } from "react";
function useCounter(){
    const [count, setCount] = useState(0)
    
    const Increment = () => setCount(count + 1);
    const Decrement = () => setCount(count - 1);
    const Reset = () => setCount(0);
  
      return [count, Increment, Decrement, Reset];
  }

export default useCounter;