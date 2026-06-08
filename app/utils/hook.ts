import { useContext} from "react";
import { CustomHookContext } from "./context";
import { CustomHookState,CustomHookActionEnum } from "./types";
import { customHookInitialFetch } from "./service";

const useCustomHook = () => {
    const context = useContext(CustomHookContext);
    if (!context) {
        throw new Error("useCustomHook must be used within a CustomHookProvider");
    }
    const { state, dispatch } = context;

    const loadCustomHookData = async () => {
        const data = await customHookInitialFetch();
        console.log("Fetched data:", data);
        if (data) setCustomHookState(data);
    };

    const setCustomHookState=(customHookState:CustomHookState)=>{
        dispatch({ type: CustomHookActionEnum.SET_CUSTOM_HOOK_DATA, payload: customHookState.nameAndRole });
    }

    return {
        state,
        loadCustomHookData,
        setCustomHookState
    };
};

export { useCustomHook };
