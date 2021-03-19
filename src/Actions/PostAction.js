export const Post = (state=[], action) =>{
    return{
        type:"Post",
        payload:state
    }
}

export const Like = (Likes=0, action) =>{
    return{
        type:"Like",
        payload:Likes
    }
}
