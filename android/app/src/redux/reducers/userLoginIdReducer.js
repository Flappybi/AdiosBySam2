import { UserLoginId } from "../../store/realm/models/User";

const initialState = {
    UserLoginId:0,
};
export const userLoginIdReducer =(state = initialState,action )=>{
    if(action.type === 'ADD_USER_LOGIN_ID'){
        const newUserLoginId = action.payload;
        return{
             ...state,
            UserLoginId: newUserLoginId,
        }
    }
    //conditions
    return state;
};