import { useContext} from "react";
import { CustomHookContext } from "./context";
import { CustomHookState,CustomHookActionEnum} from "./types";
// import { customHookInitialFetch } from "./service";
import { getUsersFromApi, getUsersByTypeFromApi } from "./service";

const useCustomHook = () => {
    const context = useContext(CustomHookContext);
    if (!context) {
        throw new Error("useCustomHook must be used within a CustomHookProvider");
    }
    const { state, dispatch } = context;
    // This was basic learning.
    // const loadCustomHookData = async () => {
    //     const data = await customHookInitialFetch();
    //     console.log("Fetched data:", data);
    //     if (data) setCustomHookState(data);
    // };

    const fetchCustomHookData = async () => {
        try {
            const users = await getUsersFromApi();
            const usersByType = await getUsersByTypeFromApi(null);
            setCustomHookState({ nameAndRole: users, activeUserByTypeTab: null, usersByTypeData: usersByType });
        } catch (error) {
            console.warn("Failed to fetch user:", error);
        }
    }

    const setCustomHookState=(customHookState:CustomHookState)=>{
        dispatch({ type: CustomHookActionEnum.SET_CUSTOM_HOOK_DATA, payload: customHookState });
    }

    return {
        ...state,
        // This was basic learning.
        // loadCustomHookData,
        fetchCustomHookData,
        setCustomHookState
    };
};

export { useCustomHook };
