import React from 'react';

const slider = props => (
    <div className="volume-slider">
        <label for="volume">Volume</label>
        <input 
            name="volume" 
            type="range" 
            step="0.01" 
            min="0" 
            max="1" 
            value={props.value}
            onChange={props.changed} />
        <p>{Math.round(props.value * 100)}</p>
    </div>
    
)

export default slider;