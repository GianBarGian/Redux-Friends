import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import FriendList from './views/FriendList';
import Login from './views/Login';



class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/friends'>Friends</Link>
            <Link to='/login'>Login</Link>
        </nav>

        <Route 
          path="/friends"
          render={() => (
            localStorage.getItem('token')
            ? (
              <FriendList />
            )
            : (
              <Redirect to="/login" />
            )
          )} 
        />

        <Route
          path="/login"
          render={() => (
            <Login />
          )} 
        />
      </div>
    );
  }
}

export default App;
