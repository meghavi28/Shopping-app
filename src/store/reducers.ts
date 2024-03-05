import { createStore } from "redux"

const intialState = {
    loggedInUser: null,
    cart:[]
}

const reducer:any = (state = intialState, action:any) => {
    switch(action.type){
        case "LOGIN":{
            return {
                ...state,
                loggedInUser:action.payload
            }
        }
        case "LOGOUT":{
            return {
                ...state,
                loggedInUser:null
            }
        }
        case "ADDTOCART":{
            return {
                ...state,
                cart:[...state.cart, action.payload]
            }
        }
        default:
            return state
    }
}

export default createStore(reducer)