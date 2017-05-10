/**
 * Created by Veronika Stoyanova on 9.5.2017 г..
 */
import React from 'react';
import Title from './header/Title';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <header>
                <Title name={this.props.name}/>
            </header>
        )
    }
}
export default Header;
