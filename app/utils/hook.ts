import { useContext} from "react";
import { CustomHookContext } from "./context";
import { CustomHookState } from "./types";
import { customHookInitialFetch } from "./service";

const useCustomHook = () => {
    const context = useContext(CustomHookContext);
    if (!context) {
        throw new Error("useCustomHook must be used within a CustomHookProvider");
    }
    const { state, dispatch } = context;

    const getCustomHookState = async () => {
        const data = await customHookInitialFetch();
        if (!data) return;
        dispatch({
            type: "SET_NAME_AND_ROLE",
            payload: data.nameAndRole,
        });
    };

    const setCustomHookState=(customHookState:CustomHookState)=>{
        dispatch({ type: "SET_NAME_AND_ROLE", payload: customHookState.nameAndRole });
    }

    return {
        state,
        setCustomHookState
    };
};

export { useCustomHook };
