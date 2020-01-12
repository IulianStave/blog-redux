import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';


class PostList extends React.Component {

  componentDidMount() {
    // call fetchPosts action creator
    this.props.fetchPosts();
  }
  render() {
    console.log(this.props.posts);
    return (
      <div className="ui container">
        PostList
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return  {posts: state.posts };
}
export default connect(
  mapStateToProps, 
  { fetchPosts: fetchPosts}
  )(PostList);