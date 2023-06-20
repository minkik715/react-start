export const PLUS_ONE = "PLUS_ONE"
export const MINUS_ONE = "MINUS_ONE"
export const PLUS_N = "PLUS_N"
export const MINUS_N = "MINUS_N"

export const plusOne = () => {
    return{
        type: PLUS_ONE
    }
}

export const minusOne = () => {
    return{
        type: MINUS_ONE
    }
}

export const plusN = (n) => {
    return{
        type: PLUS_N,
        payload: n
    }
}

export const minusN = (n) => {
    return{
        type: MINUS_N,
        payload: n
    }
}

const initialState = {
    number: 0
};

const counter = (state = initialState, action) => {
    switch (action.type) {
        case PLUS_ONE:
            return {
                number: state.number +1
            }
        case MINUS_ONE:
            return {
                number: state.number -1
            }
        case PLUS_N:
            return {
                number: state.number + parseInt(action.payload),
            }
        case MINUS_N:
            return {
                number: state.number - parseInt(action.payload),

            }
        default:
            return state
    }
}

export default counter;