const initialstate = {
    users: {},
    authenticate: false
}

function authenticateReducer(state = initialstate, action) {
    let { type, payload } = action;

    switch (type) {
        case "LOGIN_SUCCESS":
            console.log('login reducer');

            return { ...state, users: payload.users, authenticate: true };
        default:
            return { ...state };
    }
}

export default authenticateReducer; 