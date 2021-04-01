import React from 'react'
import Post from '../../Post/Components/Post'
import PostEditor from '../../PostBody/Components/PostEditor'
import axios from 'axios'
import { useParams } from 'react-router'


class ThreadDisplay extends React.Component{
    constructor(){
        super()
        this.state ={
          post:[],
          questionAsked:{}
        }
    
        this.addPost = this.addPost.bind(this);
        
      }
      
      addPost(newPostBody){
        const newPost = Object.assign({},this.state);
        console.log(newPost);
        newPost.post.push(newPostBody);
        console.log(newPost);
        this.setState((prevState) =>({
          ...prevState.questionAsked,
          post:newPost.post
        }));
      }
    
      componentDidMount(){
        var url = document.URL;
        var url_array= url.split('/');
        var id = url_array[url_array.length - 1];
        console.log(`Answers Thread mounted id${id}`);
        try {
          axios.get(`http://localhost:8080/${id}`).then(res=>{
            console.log(res.data.question[0])  
          this.setState({
              questionAsked:res.data.question[0]
            })
          })
        } catch (error) {
          console.log(error);
        }  
        
        console.log(this.state.questionAsked)
      }

      render(){
        return (
          <div className="Containter m-4 bg-blue">
            <div>  
              
                <h1>{this.state.questionAsked.question}</h1>
              
            </div>
            <div>
              <PostEditor addPost={this.addPost}/>
            </div>
            <div className="Containter">
              {
                this.state.post.map(
                  post =>{
                    return(
                      <div>
                        <Post username={post.username} 
                              date={new Date().toLocaleDateString()} 
                              info={post}
                        />
                      </div>
                    )
                  }
                )
              }
              
            </div>
            
          </div>
        );
    }
}
export default ThreadDisplay