import React, { createContext } from 'react'

const FirstName = createContext();
const LastName = createContext();
const Cost = createContext();
const ContextApi = () => {
    return (
        <div>
            <h2>Context API in React</h2>
            {/* First name using context hook */}
            <FirstName.Provider value={"Muhammad"}>
                {/* Last name using context hook */}
                <LastName.Provider value="Tahir">
                    <Cost.Provider value={"Bharchoond"}>
                        <ComponentA />
                    </Cost.Provider>
                </LastName.Provider>
            </FirstName.Provider>
        </div>
    )
}


const ComponentA = () => {
    return (
        <>
            <ComponentB />
        </>
    )

}
const ComponentB = () => {
    return (
        <>
            <ComponentC />
        </>
    )

}
const ComponentC = () => {
    return (
        <>
            <p>This is 3rd Child component C</p>
            <FirstName.Consumer>
                {(fname) => {
                    return (
                        <LastName.Consumer>
                            {(lname) => {
                                return (
                                    <Cost.Consumer>
                                        {(surname) =>{
                                           return <h2>My name is {fname} {lname} {surname}</h2>
                                        }}
                                    </Cost.Consumer>
                                )
                            }}
                        </LastName.Consumer>
                    )
                }}
            </FirstName.Consumer>


        </>
    )

}

export default ContextApi
