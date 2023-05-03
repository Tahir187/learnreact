import { useEffect,useState }  from 'react';

const UseEffects = () => {
    const [name, setName] = useState("");

    useEffect( ()=>{
        console.log("I re-rendred");
    });

    useEffect(()=>{
        console.log("The component Mounted");
    }, []);

    useEffect(()=>{
        console.log(`The name changed!: ${name}`);
        return()=>{
            console.log("We unmounted!")
        };
    },[name]);

  return (
    <>
        <h1>The UseEffect Hook</h1>
        <h2>{name}</h2>
        <input type='text' placeholder='Enter a name' onChange={(e)=> setName(e.target.value)} />
    </>
    )
}

export default UseEffects