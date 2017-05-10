/**
 * Created by Veronika Stoyanova on 10.4.2017 г..
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import Clock from './Clock';
import LoginControl from './Login';
import List from './List';
import Blog from './Blog';
import LoginForm from './LoginForm';
import Header from './common/Header';
import Footer from './common/Footer';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ''};
        this.changeTitle = this.changeTitle.bind(this);
    }
    changeTitle(name) {
        this.setState({name});
    }
    render() {
        return (
            <div>
                <Header name={this.state.name}/>
                <LoginForm changeTitle={this.changeTitle} value={this.state.name}/>
                <Footer/>
            </div>
        )
    }
}
document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        React.createElement(App),
        document.getElementById('root')
    );
});