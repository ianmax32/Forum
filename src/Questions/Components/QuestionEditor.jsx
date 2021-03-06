import { faCalendar, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { v4 as uuidv4 } from "uuid";
import axios from "axios";


class QuestionEditor extends React.Component{
    constructor(props){
        super(props)
        this.state={
            que : {
                date: '',
                question:'',
                username : '',
                answers:[],
                likes:0
            },
            
            blank:true,
            
        }
        this.handleQuestion = this.handleQuestion.bind(this)
        this.handleUsername = this.handleUsername.bind(this)
        this.createQuestion = this.createQuestion.bind(this)
    }

    handleQuestion(que){
        this.setState((prevState) =>({
            que : {
                ...this.state.que,
                date: new Date().toLocaleDateString(),
                question: que.target.value},
            blank:false
        }))
    }

    handleUsername(user){
        this.setState({
            que: {
                ...this.state.que,
                username : user.target.value},
            blank:false
        })
    }

    createQuestion(e){
        e.preventDefault();
        try {
            axios.post('http://localhost:8080/',this.state.que).then(res=>{
                console.log(res);
            })
        } catch (error) {
            console.log(error)
        }
    }

    render(){
        return(
            <div>
                
                <div className="form p-3 overflow-auto">
                   <form>  
                        <input type="text" className="form-control" placeholder="Username" onChange={this.handleUsername} value={this.state.que.username}/>
                        <label><FontAwesomeIcon icon={faCalendar}/> Date: {new Date().toLocaleDateString()}</label>
                        <textarea placeholder="Enter your question here" className="form-control" rows="10" onChange={this.handleQuestion} value={this.state.que.question}></textarea>
                        {this.state.blank ? <button className="btn btn-primary m-2 text-white" disabled={'True'} onClick={this.createQuestion}><FontAwesomeIcon icon={faPaperPlane} /> Submit</button>:<button className="btn btn-primary btn-block m-2 text-white" enabled={'True'} onClick={this.createQuestion}>Submit</button>}
                     
                    </form>   
                   
                </div>
            </div>
        )
    }
}

export default QuestionEditor