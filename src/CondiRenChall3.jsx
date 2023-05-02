import React from "react";

function Drink({ name }) {
    let part,caffeine, age;
    if(name === 'tea'){
        part = "leaf";
        caffeine = "15-70 mg/cup";
        age = "4,000+ years";
    }else if(name === 'coffee'){
        part = "been";
        caffeine = "80-185 mg/cup";
        age = "1,000+ years";
    }
    return(
        <>
            <section>
                <h3>{name}</h3>
                <dl>
                    <dt>Part of plant</dt>
                    <dd>{part}</dd>
                    <dt>Caffenie content</dt>
                    <dd>{caffeine}</dd>
                    <dd>{age}</dd>
                </dl>
            </section>
        </>
    )
}
const CondiRenChall3 = () => {
    return (
        <>
            <section>
                <h2>Conditional Challange 3</h2>
                <p>Refactor a series of ? : to if and variables </p>
                <Drink name='tea'/>
                <Drink name='coffee'/>
            </section>
        </>
    )
}

export default CondiRenChall3