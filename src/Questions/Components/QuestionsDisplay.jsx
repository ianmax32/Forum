import React from 'react'
import Question from './Question'
import './QuestionDisplay.css'
import QuestionEditor from './QuestionEditor'
import firebaseDB from '../../firebase'

class QuestionsDisplay extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            questions : [],
        }
        this.addQuestion = this.addQuestion.bind(this)
    }

    addQuestion(que){
        //que.preventDefault();
        const question = Object.assign({},this.state);
        question.questions.push(que);
        //firebaseDB.collections().ref('Questions').push(que);
        this.setState(question);
        
        
    }

    

    render(){
        return(
            <div className="container m-3 row justify-content-around">

                <div className="questions-editor">  
                    <QuestionEditor addQuestion={this.addQuestion}/>
                </div>
                <div class="col-1 border-right"></div>
                
                    <div className="ml-5">
                        <h1 className="text-black-50">Question Asked</h1>
                    {
                        this.state.questions.map(
                            item => 
                            <Question key={item.id}
                                 username={item.userName}
                                date={new Date().toLocaleDateString()} 
                                question={<p className='itemDisplay'>{item.question}</p>}
                                link={'/answer/:id'}
                                />
                        )
                        
                    }
                        

                       
                    </div>
                   
               
  
            </div>
        )
    }
}

export default QuestionsDisplay