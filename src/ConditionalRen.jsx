import React from "react";

function Projects1({ name, isDone }) {
    return (
        <li>
            {name} {isDone && "✔"}
        </li>
    );
}

function Projects2(name1, isDoned){
    if(isDoned){
        return null;
    }
    return <li className="item"> {name1} {isDoned && "✔"} </li>
}
export default function ConditionalRen() {
    return (
        <section>
            <h2>React Projects List</h2>
            <ul>
                <Projects1
                    isDone={true}
                    name="Portfolio"
                />
                <Projects1
                    isDone={false}
                    name="restorunt site"
                />
                <Projects1
                    isDone={true}
                    name="Calculator"
                />
                <Projects1
                    isDone={false}
                    name="Todo List"
                />
                <Projects2
                    isDoned={false}
                    name1="reat learning"
                />
            </ul>
        </section>
    )
}