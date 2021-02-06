const answer = (state= false,action) =>{
    return{
        type: 'Answer',
        payload: state
    };
}