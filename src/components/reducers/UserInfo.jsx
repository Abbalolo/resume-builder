

export const UserInfoReducer = (state, action) => {
    switch (action.type) {
        case "SUMBIT__SUCCESS":
            return {
                ...state, [action.field]: action.payload
            };
        default:
            return state;
    }

}