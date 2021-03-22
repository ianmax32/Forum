import axios from 'axios'
const PostReducers = (state=[], action) =>{
    switch(action.type){
        case "Post":state = action.payload;
                    return state;
        default:return state;

    }
}

export const LikeReducer = (state=0,action) =>{
    switch(action.type){
        case "Like":try{
            axios.patch('http://localhost:8080/',state.likes = state.likes + 1)
            .then(res =>{
                console.log(res);
            })
            
        } catch (error) {
            console.log(error);
        };break;
        default:return state;
    }
}

export default PostReducers;