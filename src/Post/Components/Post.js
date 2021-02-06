import React from 'react'
import './Post.css'

function Post(props) {
   return(
       <div className="col-md-10 post">
           <label>Username: {props.username} </label>
           <br/>
           <label> On: {props.date}</label>
           <p>Said: {props.info}</p>
       </div>
   )
}

export default Post