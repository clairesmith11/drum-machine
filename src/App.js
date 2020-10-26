import './App.css';
import React, {Component} from 'react';
import PadBank from './Components/PadBank/Padbank';
import Slider from './Components/Slider/Slider';

class App extends Component {
  state = {
    volume: '.5'
  }

  volumeChangeHandler = (e) => {
    this.setState({volume: e.target.value})
  }

  render() {
    return (
      <div className="drum-machine" id="drum-machine">
        <PadBank volume={this.state.volume} />
        <Slider value={this.state.volume} changed={this.volumeChangeHandler} />
      </div>
    );
  }
  
}

export default App;


//add volume slider component
//set volume in app state
//improve design