import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';


class PostList extends React.Component {

  componentDidMount() {
    // call fetchPosts action creator
    this.props.fetchPosts();
  }
  render() {
    return (
      <div className="ui container">
        PostList
      </div>
    );
  }
}

export default connect(
  null, 
  { fetchPosts: fetchPosts}
  )(PostList);