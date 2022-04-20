const initialState = {
    userAthantication: false,
};
export default function LoginAuth(state=initialState, action){
    switch(action.type){
        case "LOGINATHANTICATION":
            return {...state, userAthantication: action.payload.userAthantication};
        default:
            return state;
    }
}