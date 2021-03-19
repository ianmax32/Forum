import axios from 'axios'
const PostReducer = (state, action) =>{
    switch(action.type){
        case "Post": try {
            axios.get('http://localhost:8080/')
            .then((res) =>{
                console.log(res);
                state.push(res.data.questions)
            })
        } catch (error) {
            console.log(error);
        };

    }
}

export default PostReducer;