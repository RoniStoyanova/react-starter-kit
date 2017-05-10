/**
 * Created by Veronika Stoyanova on 10.4.2017 г..
 */
import React from 'react';

/**
 * A counter button: tap the button to increase the count.
 */
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            isToggleOn: true
        };
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <div>
                <button
                    onClick={() => {
                        this.setState({count: this.state.count + 1});
                    }}
                >
                    Count: {this.state.count}
                </button>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>


        );
    }
}
export default Counter;