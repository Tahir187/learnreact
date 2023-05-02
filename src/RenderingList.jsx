import React from "react";

const people = [
    {
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',

    },
    {
        id: 1,
        name: " Mario José Molina-Pasquel Henríquez",
        profession: 'chemist',
    },
    {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
    },
    {
        name: 'Percy Lavon Julian',
        profession: 'chemist',
    }, 
    {
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
    }

];
const RenderingList = () => {

    const listItems = people.map(person => <li>{person}</li>)
    return (
        <>
            <h2>Rendering List</h2>
            <p>fatching list items through map() method</p>
            <ul>{listItems}</ul>
        </>
    )
}

export default RenderingList