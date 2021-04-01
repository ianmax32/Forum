import React,{useState,useEffect} from 'react'
import Question from './Question'
import './QuestionDisplay.css'
import QuestionEditor from './QuestionEditor'
import axios from 'axios'

function QuestionsDisplay(){ 
    const [posts,setPosts] = useState([]);
    const [likes,setLikes] = useState(0);

    useEffect(()=>{
        getData()
        /*setInterval(()=>{
            try {
                getData()
            } catch (error) {
                console.log(error);
            }
        },10000)*/
    },[])
    
    const getData = async () =>{
        try {
            await axios.get('http://localhost:8080/')
            .then(res=>{
                console.log(res.data.questions)
                setPosts(res.data.questions)
                console.log(res.data.questions.likes)
            })
        } catch (error) {
            console.log(error);
        }
    }

    const handleClick = async () =>{
        try {
            await axios.patch('http://localhost:8080/',{
                //posts[0].likes : posts[0].likes + 1 
            }).then((res)=>{
                console.log(res)
            })
        } catch (error) {
            console.log(error)
        }
    }

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
                                link={`/answer/${item._id}`}
                                handleClick={handleClick()}
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