const initialState = {
    users: []
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'users':
            return{
                ...state,
                users: action.payload
            };
        case 'delete':
            return {
                ...state,
                users: state.users.filter((user) => user.id !== action.payload)
            };

        default:
            return state
    }
}

export default reducer;