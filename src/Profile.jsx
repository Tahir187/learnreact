import React from "react";
import { getImageUrl } from './Props'
const person = {
    name : "Gregorio",
    theme:{
        backgroundColor:'white',
        color: 'black'
    }
};

function Bio(){
    return(
        <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
    )
}
// card components
function Card({children}){
    return(
        <div className="card">
            {children}
        </div>
    );
}

// avatar componetns
function Avatar({person, size}){
    return(
        <img 
            className="avatar"
            src={getImageUrl(person)}
            alt = {person.name}
            width={size}
            height={size}
        />
    );
}


export default function Profile(){
    return(
        <>
        <h3>Hedy lamarr's Todos</h3>
        <Bio/>   
        <ul>
            <li>Invent new traffuc lights</li>
            <li>Rehearse a movie scene</li>
            <li>Improve spectrum technology</li>
        </ul>
        <div style={person.theme}>
        <h3>{person.name}'s Todos</h3>
        <img src="https://i.imgur.com/7vQD0fPs.jpg" alt="Gregorio Y.Zara" style={{
            borderRadius:'50%',
        }}/>
        <ul>
            <li>Improv the videophone</li>
            <li>Prepare aeronautics lectures</li>
            <li>Work on the alcohol-fulled engine</li>
        </ul>
        </div>

        {/* Card components and avatar components */}

        <Card>
            <Avatar
            size={100}
            person={{
                name: 'Katsuko Saruhashi',
                imageId: 'Yfe0qp2',
            }}
            />
        </Card>
        </>
    )
}