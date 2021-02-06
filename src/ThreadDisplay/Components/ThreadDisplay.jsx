import React from 'react'
import Post from '../../Post/Components/Post'
import PostEditor from '../../PostBody/Components/PostEditor'


class ThreadDisplay extends React.Component{
    constructor(){
        super()
        this.state ={
          post: []
    
        }
    
        this.addPost = this.addPost.bind(this);
        
      }
      
      addPost(newPostBody){
        const newPost = Object.assign({},this.state);
        newPost.post.push(newPostBody);
        this.setState(newPost);
      }
    
      render(){
        return (
          <div className="Containter m-4 bg-blue">
            <div className="Containter">
              {
                this.state.post.map(
                  post =>{
                    return(
                      <div>
                        <Post username={'ian'} 
                              date={new Date().toLocaleDateString()} 
                              info={post}
                        />
                      </div>
                    )
                  }
                )
              }
              
            </div>
            <div>
              <PostEditor addPost={this.addPost}/>
            </div>
          </div>
        );
    }
}
export default ThreadDisplay