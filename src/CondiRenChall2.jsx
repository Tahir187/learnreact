import React from "react";

const Challange2 = ({ name, importance }) => {
    return (
        <>
            <li>
                {name}
                {importance > 0 && ''}
                {importance > 0 && <i>(Importance: {importance})</i>
                }
            </li>
        </>
    )
}
const CondiRenChall2 = () => {
    return (
        <>
            <section>
                <h2>Challange 2</h2>
                <p>Show the item importance with && </p>
                <ul>
                    <Challange2
                        importance={9}
                        name="Tahir"
                    />
                    <Challange2
                        importance={0}
                        name="Tariq"
                    />
                    <Challange2
                        importance={6}
                        name="Asad"
                    />
                </ul>
            </section>
        </>
    );
}

export default CondiRenChall2