enum CustomHookActionEnum {
    SET_CUSTOM_HOOK_DATA = "SET_CUSTOM_HOOK_DATA",
    SET_NAME_AND_ROLE = "SET_NAME_AND_ROLE",
}
interface CustomHookState {
    nameAndRole:{name:string|null, role:string|null}[],
    activeUserByTypeTab: UserByTypeEnum|null,
}

type CustomHookAction =
    { type: CustomHookActionEnum.SET_CUSTOM_HOOK_DATA; payload: Partial<CustomHookState> }
    | { type: CustomHookActionEnum.SET_NAME_AND_ROLE; payload: { name: string | null, role: string | null }[] };

const customHookInitialState: CustomHookState = {
    nameAndRole:[],
    activeUserByTypeTab: null,
};

enum UserByTypeEnum {
    DEV_EMPLOYEE = "DEV_EMPLOYEE",
    PRODUCT_TEAM_EMPLOYEE = "PRODUCT_TEAM_EMPLOYEE",
    TOP_MANAGEMENT= "TOP_MANAGEMENT",
}

export type { CustomHookState, CustomHookAction };
export { customHookInitialState, CustomHookActionEnum, UserByTypeEnum };