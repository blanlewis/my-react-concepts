enum CustomHookActionEnum {
    SET_CUSTOM_HOOK_DATA = "SET_CUSTOM_HOOK_DATA",
    SET_NAME_AND_ROLE = "SET_NAME_AND_ROLE",
}
interface CustomHookState {
    nameAndRole: UserType[],
    activeUserByTypeTab: UserByTypeEnum|null,
    usersByTypeData: UserType[],
    isLoading: boolean,
}

type CustomHookAction =
    { type: CustomHookActionEnum.SET_CUSTOM_HOOK_DATA; payload: Partial<CustomHookState> }
    | { type: CustomHookActionEnum.SET_NAME_AND_ROLE; payload: UserType[] };

const customHookInitialState: CustomHookState = {
    nameAndRole:[],
    activeUserByTypeTab: null,
    usersByTypeData: [],
    isLoading: false,
};

interface UserType {
    name: string | null;
    role: string | null;
}

enum UserByTypeEnum {
    DEV_EMPLOYEE = "DEV_EMPLOYEE",
    PRODUCT_TEAM_EMPLOYEE = "PRODUCT_TEAM_EMPLOYEE",
    TOP_MANAGEMENT= "TOP_MANAGEMENT",
}

export type { CustomHookState, CustomHookAction, UserType };
export { customHookInitialState, CustomHookActionEnum, UserByTypeEnum };