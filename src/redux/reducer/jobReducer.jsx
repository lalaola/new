import { NAVBAR } from "../../component/navbar/navbar-pc";

const innitialState ={
    getNavbar : false
}

const job = (state = innitialState, action) =>{
    switch (action.type) {
        case NAVBAR :
            return {
                ...state,
                getNavbar : action.payload.data,
            }
        default:
            return state;
    }
}

export default job