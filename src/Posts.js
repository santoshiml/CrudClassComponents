import React, { Component } from "react";
import Post from "./Post";
import EditPost from "./EditPost";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      count: 0,
      inputValue: "",
      error: "",
      isVisibleModal: false,
      post: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.editPostModal = this.editPostModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  componentDidMount() {
    this.setState({ posts: this.props.posts });
    console.log("componentdidmount");
  }

  updateState() {
    this.setState({
      ename: "react and redux",
      count: this.state.count + 1,
    });
  }
  decreaseState() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value });
    console.log("handlechange");
  }
  handleClick(e) {
    e.preventDefault();
    const ids = this.state.posts.map((post) => post.id);
    console.log("iud", ids);
    let post = {};
    post.id = Math.max.apply(null, ids) + 1;
    console.log(123, post.id);
    post.name = this.state.inputValue;
    let posts = this.state.posts;
    
    posts.push(post);
    this.setState({ posts: posts });
  }

  deletePost(id) {
    console.log("aaaa", id);
    const posts = this.state.posts.filter((post) => {
      console.log("bbbb", post);
      if (post.id != id) {
        return post;
      }
    });
    this.setState({ posts: posts });
  }
  updatePost(id, name) {
    console.log(87878);
    console.log("newtitle", name);
    const post = this.state.posts.find((post) => post.id == id);
    console.log(162222, post);
    post.name = name;

    console.log(333, post);
    const posts = this.state.posts.map((oldpost) => {
      if (oldpost.id == id) {
        return post;
      } else {
        return oldpost;
      }
    });
    this.setState({ posts: posts });

    console.log(444, posts);
    this.state.isVisibleModal && this.setState({ isVisibleModal: false });
  }
  closeModal() {
    console.log(8888);
    this.setState({ isVisibleModal: false });
  }

  editPostModal(id) {
    console.log(7777, id);
    console.log(777111, this.state.posts);
    let post = this.state.posts.find((post) => post.id == id);
    console.log(888, post);
    this.setState({ post: post });
    this.setState({ isVisibleModal: true });
  }

  render() {
    return (
      <div>
        <div>
          <h2>count{this.state.count}</h2>
          <button onClick={() => { this.updateState(); }} >Update </button>
          <button onClick={() => {this.decreaseState();}}> Decrease</button>
          <p>
            <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
            <button onClick={this.handleClick.bind(this)}>Add Post</button>
          </p>
        </div>
        <div>
          <h2>posts</h2>
          {this.state.posts.map((post, index) => {
            return (
              <div key={index}>
                <Post
                  editPostModal={this.editPostModal}
                  post={post}
                  updatePost={this.updatePost}
                  deletePost={this.deletePost}
                  editPost={this.editPost}
                />
              </div>
            );
          })}
        </div>
        {this.state.isVisibleModal && (
          <EditPost
            updatePost={this.updatePost}
            isOpen={this.state.isVisibleModal}
            closeModal={this.closeModal}
            post={this.state.post}
          />
        )}
      </div>
    );
  }
}
export default Posts;
