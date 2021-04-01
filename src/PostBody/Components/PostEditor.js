import React from 'react';
import {Link } from 'react-router-dom'

class PostEditor extends React.Component{
    constructor(props){
        super(props)
        
        this.createPost = this.createPost.bind(this)
        this.handlePostOnChange = this.handlePostOnChange.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.state = {
            post:{
                newpost:'',
                username:''
            }
        }

        
    }
 
    handlePostOnChange(e){
        this.setState((prevState) =>({
            post:{
                ...prevState.username,
                newpost : e.target.value
            }
        }))
    }

    handleUsername(e){
        this.setState((prevState) =>({
            post:{
                ...prevState.newpost,
                username : e.target.value
            }
        }))
    }

    createPost(){
        this.props.addPost(this.state.post)
        this.setState({
            newpost:'',
            username:''
        })
    }



    render(){
        
        return(
            <div className="panel-body mt-5 mb-5">
                <input placeholder='Username'  value={this.state.username} onChange={this.handleUsername} className='form-control m-2' />
                <textarea className="form-control m-2" placeholder="Post your comment here"  onChange={this.handlePostOnChange} value={this.state.newpost}></textarea>  
                <button className="btn btn-primary btn-block m-2 mb-10" onClick={this.createPost}>Post</button>
                <Link to={'/'}>
                    <button className="btn btn-primary btn-block m-2 mb-10">Back</button>
                </Link>
            </div>
        )
    }
}


export default PostEditor;