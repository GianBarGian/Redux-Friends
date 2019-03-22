import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { login } from '../states/actonCreators'

export class Login extends React.Component {
    userRef = React.createRef();
    pswRef= React.createRef();

    onLogin = () => {
        const username = this.userRef.current.value;
        const password = this.pswRef.current.value;
        
        this.props.login(username, password);
    }

    render() {
        console.log(this.props);
        return (
            <form>
                <input type="text" placeholder="username" ref={this.userRef} />
                <input type="text" placeholder="password" ref={this.pswRef} />
                <button onClick={e => {
                    e.preventDefault();
                    this.onLogin();
                }}>Log in</button>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        login,
    }, dispatch);
  }

export default connect(st => st, mapDispatchToProps)(Login);