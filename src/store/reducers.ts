import { createStore } from "redux"

const intialState = {
    loggedInUser: null,
    cart:[]
}

const reducer:any = (state = intialState, action:any) => {
    switch(action.type){
        case "LOGIN":{
            localStorage.setItem("Token",action.payload.token )
            return {
                ...state,
                loggedInUser:action.payload
            }
        }
        case "LOGOUT":{
            localStorage.removeItem("Token")
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
        case "REMOVEFROMCART":{
            return {
                ...state,
                cart:[...state.cart].filter((e:any)=>e.id !== action.payload)
            }
        }
        default:
            return state
    }
}

export default createStore(reducer)