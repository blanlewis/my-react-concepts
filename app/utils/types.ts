interface CustomHoookProps {
    name: string;
    age: number;
    email: string;
}

type CustomHookAction =
    | { type: "SET_NAME"; payload: string }
    | { type: "SET_AGE"; payload: number }
    | { type: "SET_EMAIL"; payload: string };

const customHookInitialState: CustomHoookProps = {
    name: "",
    age: 0,
    email: "",
};

export type { CustomHoookProps, CustomHookAction };
export { customHookInitialState };