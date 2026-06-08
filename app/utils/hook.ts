import { useContext } from "react";
import { CustomHookContext } from "./context";
import { CustomHookProps } from "./types";
import { customHookInitialFetch } from "./service";

const useCustomHook = () => {
    const context = useContext(CustomHookContext);
    if (!context) {
        throw new Error("useCustomHook must be used within a CustomHookProvider");
    }
    const { state, dispatch } = context;
    
    const getUser = async () => {
        const data = await customHookInitialFetch();
        dispatch({
            type: "SET_NAME_AND_ROLE",
            payload: data,
        });
    };
    getUser();
    console.log("Custom Hook State:", state);


    const setCustomHookState=(customHookState:CustomHookProps)=>{
        dispatch({ type: "SET_NAME_AND_ROLE", payload: customHookState.nameAndRole });
    }

    return {
        state,
        setCustomHookState
    };
};

export { useCustomHook };
