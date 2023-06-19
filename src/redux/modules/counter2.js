const initialState = {
    number: 0
};

const counter2 = (state = initialState, action) => {
    switch (action.type) {
        case "PLUS":
            return {
                number: state.number +1
            }
        case "MINUS":
            return {
                number: state.number -1
            }
        default:
            return state
    }
}

export default counter2;