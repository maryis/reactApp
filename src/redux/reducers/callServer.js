import {ADD, DELETE, SHOW} from "../action-types";

const initialState = {
    data: [],
    isLoading: false,
    currentId:0

}

export const callServer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW: {
            return {
                data: action.payload.data,
                isLoading: true,
                currentId:0
            }
        }
        case ADD: {
            return {
                data: action.payload.data,
                isLoading: true,
                currentId:0
            }
        }
        case DELETE: {
            return {
                data: action.payload.data,
                isLoading: true,
                currentId:0

            }
        }
        default : return state
    }
};

