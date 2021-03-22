import axios from "axios"

const AnswerReducer = (state=[],action) =>{
    switch(action.type){
        case "Answer":try {
            axios.get('http://localhost:8080/:id')
            .then((res) =>{
                console.log(res);
                state.push(res.data.questions.answers)
            })
        } catch (error) {
            console.log(error);
        };break;
        case "AnswerSubmit":try {
            axios.patch('http://localhost:8080/')
            .then((res) =>{
                console.log(res);
                state.push(res.data.questions.answers)
            })
        } catch (error) {
            console.log(error);
        };break;
        default:return state;
    }
}

export default AnswerReducer;