interface CustomHookProps {
    nameAndRole:{name:string|null, role:string|null},
}

type CustomHookAction =
    | { type: "SET_NAME_AND_ROLE"; payload: { name: string | null, role: string | null } };

const customHookInitialState: CustomHookProps = {
    nameAndRole:{name:null, role:null},
};

export type { CustomHookProps, CustomHookAction };
export { customHookInitialState };