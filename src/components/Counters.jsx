import React, { Component } from 'react';
import Count from './Count';

class Counters extends Component {
    state = { 
        counters : [
            { id: 1, value: 0, type: "Pizza"},
            { id: 2, value: 0, type: "Burger"},
            { id: 3, value: 0, type: "Braut"},
            { id: 4, value: 0, type: "Hotdog"},
        ] 
    }

    // sets a point of truth as counters are adjusted
    updateCount = counter => {
        // clones the array using "spread operator"
        const counters =[...this.state.counters];
        // gets the index of the selected item
        const index = counters.indexOf(counter);
        // clone counter object using "spread operator"
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    }

    // reset counter to 0
    resetCounter = counter => {
        // clones the array using "spread operator"
        const counters =[...this.state.counters];
        // gets the index of the selected item
        const index = counters.indexOf(counter);
        // clone counter object using "spread operator"
        counters[index] = {...counter};
        counters[index].value=0;
        this.setState({ counters})
    }

    render() { 
        return ( 
            <div className="container mt-5">
                <div className="col-7 mx-auto">
                    <div className="border-bottom mb-3">
                        <h1 className="text-center">Voting for Your Favorite Food</h1>
                    </div>
                    { this.state.counters.map( counter => 
                        <Count 
                        key={counter.id} 
                        onReset={this.resetCounter} 
                        onIncrement={this.updateCount} 
                        counter={counter} />
                    )}
                </div>
            </div> );
    }
}
 
export default Counters;