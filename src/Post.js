import React, { Component } from "react";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postTitle: "",
      isVisible: false,
      postId: null,
    };
    this.editPost = this.editPost.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  editPost(id) {
    this.setState({ isVisible: true });
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({ postTitle: e.target.value });
  }
  componentDidMount() {
    this.setState({ postId: this.props.post.id });
  }
  componentDidUpdate(pP, pS) {
    if (pS.isVisible == false && this.state.postTitle == "") {
      this.setState({ postTitle: this.props.post.name });
    }
    if (pS.isVisible == true && this.state.postTitle == pS.postTitle)
      this.setState({ isVisible: false });
  }

  render() {
    console.log(11111, this.props);
    return (
      <div>
        {this.state.isVisible ? (
          <input
            type="text"
            value={this.state.postTitle}
            onChange={this.handleChange}
          />
        ) : (
          <div>
            <p>{this.props.post.id}</p>
            <p>{this.props.post.name}</p>
          </div>
        )}
        {this.state.isVisible ? (
          <button onClick={this.props.updatePost.bind(this, this.props.post.id, this.state.postTitle)}>Update Post</button>
        ) : (
          <div>
            <button onClick={this.props.deletePost.bind(this, this.props.post.id)}>Delete Post</button>
            <button onClick={this.editPost.bind(this, this.props.post.id)}>Edit Post</button>
            <button onClick={this.props.editPostModal.bind(this, this.state.postId)}>Edit via modal Post</button>
          </div>
        )}
      </div>
    );
  }
}
export default Post;
