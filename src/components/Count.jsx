import React, { Component } from 'react';

class Count extends Component {
    state = {
        addButton: "https://www.pngfind.com/pngs/m/278-2781613_blue-plus-icon-add-new-button-png-transparent.png",
        imageName: "Blue Plus",
        imageSize: "40px",
    };
 
    render () {

        // object destructuring to clean code - replaces "this.props"
        const {onReset, onIncrement, counter} = this.props;

        return (
                <div className="row border">
                    <p className="col">{this.formatCounter()}</p>
                    <p className="col">{counter.type}</p>
                    <button 
                        onClick={() => onIncrement (counter)} 
                        className="btn col">
                        <img src={this.state.addButton} alt={this.state.imageName} style={{width: this.state.imageSize}}></img>
                    </button>
                    <button 
                        onClick={() => onReset (counter)}
                        className="btn col btn-warning btn-small"
                    >Reset</button>
                </div>
        )
    }
    // if value = 0 display "zero"
    formatCounter() {
        // read "value" from props "counter"
        const { value } = this.props.counter;
        return value ===0 ? "Zero" : value;
    }
}

export default Count