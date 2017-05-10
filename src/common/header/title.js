/**
 * Created by Veronika Stoyanova on 9.5.2017 г..
 */
/**
 * Created by Veronika Stoyanova on 9.5.2017 г..
 */
import React from 'react';

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <h1>Welcome {this.props.name}!</h1>
        )
    }
}
export default Title;
