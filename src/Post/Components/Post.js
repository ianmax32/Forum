import React from 'react'
import './Post.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons'

function Post(props) {
   return(
       <div className="col-md-10 post">
           <label>Username: {props.username} </label>
           <br/>
           <label> On: {props.date}</label>
           <p>Said: {props.info}</p>
           <div>
                <button className="btn btn-primary btn-sm" onClick={props.handleClick}><FontAwesomeIcon icon={faThumbsUp} />Like {props.likes}</button>
            </div>
       </div>
   )
}

export default Post