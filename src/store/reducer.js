const initialState ={
    isLoggedIn:false
}


const reducer = (State=initialState,action)=>{
    
  switch(action.type) {  
    case 'ON_LOGGED_IN':
        return {
            ...State,
            isLoggedIn: true
        }
    }
    return State
}

export default reducer