import React from 'react'
import Question from './Question'
import './QuestionDisplay.css'
import QuestionEditor from './QuestionEditor'
import firebase,{db} from '../../firebase'



class QuestionsDisplay extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            questions : [],
        }
        this.addQuestion = this.addQuestion.bind(this)
    }

    componentDidMount(){
        console.log('mounted');
        db.collection('Questions')
          .get()
          .then( snapshot => {
            const Questions = []
                snapshot.forEach(doc =>{
                    const data = doc.data();
                    Questions.push(data);
                })
                this.setState({
                    questions:Questions
                })
                
          }
        )
          .catch(err => console.log(err));
    }

    addQuestion(que){
        db.collection('Questions').add({que}).then(
            db.collection('Questions').onSnapshot(snapshot =>{
                const Questions = []
                snapshot.forEach(doc =>{
                    const data = doc.data();
                    Questions.push(data);
                })
                this.setState({
                    questions:Questions
                }) 
            })
        ).catch(err => {'error adding info'}); 
       console.log('question added');
    }

    

    render(){
        return(
            <div className="container m-3 row justify-content-around">

                <div className="questions-editor">  
                    <QuestionEditor addQuestion={this.addQuestion}/>
                </div>
                <div class="col-1 border-right"></div>
                
                    <div className="ml-5">
                        <h1 className="text-black-50">Questions Asked</h1>
                    {
                        this.state.questions.map(
                            item => 
                            <Question key={item.que.id}
                                username={item.que.userName}
                                date={item.que.date} 
                                question={<p className='itemDisplay'>{item.que.question}</p>}
                                link={`/answer/${item.que.id}`}
                                />
                        )
                        
                    }
                        

                       
                    </div>
                   
               
  
            </div>
        )
    }
}

export default QuestionsDisplay