import { CustomHookState, CustomHookAction, CustomHookActionEnum } from "./types";

const customHookReducer = (state: CustomHookState, action: CustomHookAction): CustomHookState => {
    switch (action.type) {
        case CustomHookActionEnum.SET_CUSTOM_HOOK_DATA:
            return { ...state, nameAndRole: action.payload };
        case CustomHookActionEnum.SET_NAME_AND_ROLE:
            return { ...state, nameAndRole: action.payload };
        default:
            return state;
    }
};

export { customHookReducer };
