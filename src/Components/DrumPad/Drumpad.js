import React from 'react';


const drumPad = props => {
    return (
        <div className="drum-pad" onKeyUp={props.keyUp} onClick={props.clicked} id={props.displayName}>
            <audio className="clip" src={props.clip} id={props.name}></audio>
            <p>{props.name}</p>
        </div>
    )
}

export default drumPad;