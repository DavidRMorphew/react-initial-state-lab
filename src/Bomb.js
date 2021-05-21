// your Bomb code here!
import React, { Component } from 'react'
class Bomb extends Component {
    state = {
        secondsLeft: this.props.initialCount
    }

    boomOrSecondsLeft = () => {
        return (this.state.secondsLeft === 0) ? "Boom!" : this.state.secondsLeft + ' seconds left before I go boom!'
    }
    
    render(){
        return(
            <div>{this.boomOrSecondsLeft()}</div>
        )
    }
}

export default Bomb