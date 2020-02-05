import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../redux/actions';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderList = () => {
    console.log(this.props.post);
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    console.log(this.props.posts);

    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}
const mapStateToProps = state => ({
  posts: state.posts.posts,
});
export default connect(mapStateToProps, { fetchPosts })(PostList);
