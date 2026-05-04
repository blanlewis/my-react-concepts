import { CustomHoookProps, CustomHookAction } from "./types";

const customHookReducer = (state: CustomHoookProps, action: CustomHookAction): CustomHoookProps => {
    switch (action.type) {
        case "SET_NAME":
            return { ...state, name: action.payload };
        case "SET_AGE":
            return { ...state, age: action.payload };
        case "SET_EMAIL":
            return { ...state, email: action.payload };
        default:
            return state;
    }
};

export { customHookReducer };
