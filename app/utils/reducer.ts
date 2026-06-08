import { CustomHookProps, CustomHookAction } from "./types";

const customHookReducer = (state: CustomHookProps, action: CustomHookAction): CustomHookProps => {
    switch (action.type) {
        case "SET_NAME_AND_ROLE":
            return { ...state, nameAndRole: action.payload };
        default:
            return state;
    }
};

export { customHookReducer };
