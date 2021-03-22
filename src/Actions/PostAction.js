import axios from "axios";
export const Post = (state=[], action) =>{
    return{
        type:"Post",
        payload:state = getData()
    }
}

export const Like = (Likes=0, action) =>{
    return{
        type:"Like",
        payload:Likes
    }
}

function getData(){
    try {
        axios.get('http://localhost:8080/')
                .then((res) =>{
                console.log(res);
                return res.data.questions;
                //console.log(state)
            })
    } catch (error) {
        console.log(error)
    }
    return []
}