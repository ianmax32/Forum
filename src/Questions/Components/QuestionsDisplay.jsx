import React,{useState,useEffect} from 'react'
import Question from './Question'
import './QuestionDisplay.css'
import QuestionEditor from './QuestionEditor'
import {useSelector, useDispatch}  from 'react-redux'
import {Post} from '../../Actions/PostAction'
import answerAction from '../../Actions/answerAction'

function QuestionsDisplay(){ 
    const dispatch = useDispatch();
    useEffect(()=>{
        const posts=  dispatch(Post());
    },[])
    //const posts = useSelector(state => state.PR);
    console.log(posts)
  
        return(
            <div className="container m-3 row justify-content-around">

                <div className="questions-editor">  
                    <QuestionEditor />
                </div>
                <div class="col-1 border-right"></div>
                
                    <div className="ml-3">
                        <h1 className="text-black-50">Questions Asked</h1>
                    {posts.length > 0 ?
                        (posts.map(
                            item => 
                            <Question key={item.id}
                                username={item.username}
                                date={item.date} 
                                question={<p className='itemDisplay'>{item.question}</p>}
                                likes={item.likes}
                                link={`/answer/${item.id}`}
                                />
                        )):(
                            <h1 className="text-black-50">No Questions</h1>
                        )
                    }
                        

                       
                    </div>
                   
               
  
            </div>
        )
}

export default QuestionsDisplay