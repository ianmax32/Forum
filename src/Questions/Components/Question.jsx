import React from 'react'
import './Question.css'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPaperPlane,faUser,faCalendar,faShare, faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import { useSelector,useDispatch } from "react-redux";
import {Like} from '../../Actions/PostAction'


function Question(props){
    const like = useSelector(state => state.LikeReducer);
    const dispatch = useDispatch();
    return(
        <div>
            <div className="p-2 m-2 border">
                <div className='border-bottom'>
                    <FontAwesomeIcon icon={faUser}/> <label className="pr-5">{props.username}</label>
                    <FontAwesomeIcon icon={faCalendar}/> <label >{props.date}</label>
                </div>
                <p className="border-bottom question">{props.question}</p>                 
                <div className="row m-3 justify-content-around">        
                    <Link to={props.link}>
                        <button className="btn btn-primary btn-sm float-right"><FontAwesomeIcon icon={faPaperPlane}/> Comment</button>
                    </Link>
                    <div>
                        <button className="btn btn-primary btn-sm" onClick={dispatch(Like())}><FontAwesomeIcon icon={faThumbsUp} />Like {props.likes}</button>
                    </div>

                    <div>
                        <button className="btn btn-primary btn-sm"><FontAwesomeIcon icon={faShare} />Share</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Question