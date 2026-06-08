enum CustomHookActionEnum {
    SET_CUSTOM_HOOK_DATA = "SET_CUSTOM_HOOK_DATA",
    SET_NAME_AND_ROLE = "SET_NAME_AND_ROLE",
}
interface CustomHookState {
    nameAndRole:{name:string|null, role:string|null}[],
}

type CustomHookAction =
    { type: CustomHookActionEnum.SET_CUSTOM_HOOK_DATA; payload: { name: string | null, role: string | null }[] }
    | { type: CustomHookActionEnum.SET_NAME_AND_ROLE; payload: { name: string | null, role: string | null }[] };

const customHookInitialState: CustomHookState = {
    nameAndRole:[],
};

export type { CustomHookState, CustomHookAction };
export { customHookInitialState, CustomHookActionEnum };