import { apiUsers } from "../api/api-users";

const UPDATE_AUTH = 'UPDATE_AUTH';
const UPDATE_USERS = 'UPDATE_USERS';

const initilaState = {
    auth: false,
    users: []
}

const stateReducer = (state=initilaState, action) => {
    switch(action.type) {
        case UPDATE_AUTH: 
            return {
                ...state,
                auth: action.auth
            }
        case UPDATE_USERS: 
            return {
                ...state,
                users: action.users
            }
        default:
            return state    
    }
}

export const updateAuth = (auth) => ({type: UPDATE_AUTH, auth});
export const updateUsers = (users) => ({type: UPDATE_USERS, users});

export const getUsersThunk = () => {
    return async dispatch => {
        const {data, status} = await apiUsers.getUsers()
        if(status === 200) {
            dispatch(updateUsers(data.results))
        }
    }
}

export default stateReducer;