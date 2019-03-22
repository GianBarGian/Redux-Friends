import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import Friend from '../components/Friend';
import { getFriends } from '../states/actonCreators'


export class FriendList extends React.Component {
    componentDidMount() {
        this.props.getFriends();
    }

    render() {
        return (
            <div className="friend-list">
                {
                    this.props.friends.map(friend => (
                        <Friend key={friend.id} friend={friend} />
                    ))
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      friends: state.friends,
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getFriends,
    }, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(FriendList);