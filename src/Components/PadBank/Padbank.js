import React, {Component} from 'react';
import DrumPad from '../DrumPad/Drumpad';

const drumPads = [
  {
      id: 'Q',
      clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
      displayName: 'Heater' 
    },
    {
      id: 'W',
      clip: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
      displayName: 'Snare' 
    },
    {
      id: 'E',
      clip: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
      displayName: 'Side Stick' 
    },
    {
      id: 'A',
      clip: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
      displayName: 'Kick' 
    },
    {
      id: 'S',
      clip: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
      displayName: 'Kick n Hat' 
    },
    {
      id: 'D',
      clip: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
      displayName: 'Chord' 
    },
    {
      id: 'Z',
      clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
      displayName: 'Clap' 
    },
    {
      id: 'X',
      clip: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
      displayName: 'High Hat' 
    },
    {
      id: 'C',
      clip: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
      displayName: 'Shaker' 
    },
    

];

class PadBank extends Component {
    state = {
      displayName: ''
    }

    playSound = (e) => {
      let audio;
      const element = e.target;
      if (element.className === 'drum-pad') {
        audio = element.firstChild;
      } else {
        audio = element.parentElement.firstChild;
      }
      audio.volume = this.props.volume
      audio.play();
      this.changeDisplay(element.id)
    }

    changeDisplay = (id) => {
      this.setState({displayName: id});
    }

    handleKeyup = (e) => {
      const element = document.getElementById(String.fromCharCode(e.keyCode))
      if (element) {
        element.play();
        this.changeDisplay(element.parentElement.id)
      }
    }

    componentDidMount() {
      document.addEventListener('keyup', this.handleKeyup)
   }

    render() {
      
      return (
        <div className="pad-bank">
          <div id="display" className="display">
            <h3 className="display-text">{this.state.displayName}</h3>
          </div>
          {drumPads.map((drumPad) => (
            <DrumPad 
              key={drumPad.id}
              name={drumPad.id}
              displayName={drumPad.displayName}
              clip={drumPad.clip}
              clicked={this.playSound}
              keyUp={this.handleKeyup}/>
          ))}
        </div>
      );
    };
}
    
  export default PadBank

  