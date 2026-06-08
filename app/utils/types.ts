interface CustomHookState {
    nameAndRole:{name:string|null, role:string|null},
}

type CustomHookAction =
    | { type: "SET_NAME_AND_ROLE"; payload: { name: string | null, role: string | null } };

const customHookInitialState: CustomHookState = {
    nameAndRole:{name:null, role:null},
};

export type { CustomHookState, CustomHookAction };
export { customHookInitialState };