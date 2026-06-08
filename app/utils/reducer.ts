import { CustomHookState, CustomHookAction } from "./types";

const customHookReducer = (state: CustomHookState, action: CustomHookAction): CustomHookState => {
    switch (action.type) {
        case "SET_NAME_AND_ROLE":
            return { ...state, nameAndRole: action.payload };
        default:
            return state;
    }
};

export { customHookReducer };
