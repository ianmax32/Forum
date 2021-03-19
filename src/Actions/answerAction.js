const answer = (state = [],action) =>{
    return{
        type: 'Answer',
        payload: state
    };
}

export default answer;