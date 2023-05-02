import React from "react";

function Challage1({name, isDone}) {
    return (
        <>
            <li className="item">
                {name} {isDone ? "✔" : "❌"}
            </li>
        </>
    )
}
const CondiRenChall = () => {
    return (
        <>
            <section>
                <h2>Challange 1</h2>
                <p>Show an icon for incomplete items with ? :</p>
                <ul>
                <Challage1
                    isDone={true}
                    name="restorunt site"
                />
                <Challage1
                    isDone={true}
                    name="portfolio site"
                />
                <Challage1
                    isDone={false}
                    name="calculator"
                />
                </ul>
            </section>
        </>
    );
}

export default CondiRenChall
