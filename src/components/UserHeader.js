import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
  componentDidMount() {
    // call fetchUser action creator
    this.props.fetchUser(this.props.userId);
  }
  
  render() {
    // const user = this.props.users.find((user) => user.id === this.props.userId);
    // this.props.user will be destructured
    const {user} = this.props;
    if (!user) {
      return <div>Loading</div>;
    }
    return <div className="header">{user.name}</div>
  };
}

const mapStateToProps = (state, ownProps) => {
  // return { users: state.users };
  // relocate the find logic related to identifying user id
  return { user: state.users.find(user => user.id === ownProps.userId)};
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(UserHeader);
