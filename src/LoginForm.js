/**
 * Created by Veronika Stoyanova on 9.5.2017 г..
 */
import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: this.props.value};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.props.changeTitle(this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
export default LoginForm;
