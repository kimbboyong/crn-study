function login(users) {
    return (dispath, getState) => {
        dispath({ type: "LOGIN_SUCCESS", payload: { users } });
    }
}

export const authenticateAction = { login };