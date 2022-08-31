import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
content: {
top: '50%',
left: '50%',
right: 'auto',
bottom: 'auto',
marginRight: '-50%',
transform: 'translate(-50%, -50%)',
},
};


export default class EditPost extends Component {
constructor(props){
super(props)
this.state = {
post: null,
postTitle: ""

}
this.handleChange = this.handleChange.bind(this)
}

componentDidMount()
{
this.setState({ postTitle: this.props.post.name})
}


handleChange(e){
console.log(e.target.value)
this.setState({ postTitle: e.target.value})
}

render()
{
console.log(1232233, this.state.post)

return (
<div>
<Modal
isOpen={this.props.isOpen}
onRequestClose={this.props.closeModal}
style={customStyles}
contentLabel="Example Modal"
>
<h2 > Add New Post</h2>
<button onClick={this.props.closeModal}>close</button>
<br/>
<br />
{/* <form> */}
<input type="text" name="post" value={this.state.postTitle} onChange={this.handleChange}/>
<button onClick={this.props.updatePost.bind(this, this.props.post.id, this.state.postTitle)} >Submitt</button>
{/* </form> */}
</Modal>
</div>
);
}
}
