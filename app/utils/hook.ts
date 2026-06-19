import { useContext} from "react";
import { CustomHookContext } from "./context";
import { CustomHookState,CustomHookActionEnum, UserByTypeEnum,RightComponentToggleOptionsEnum} from "./types";
// import { customHookInitialFetch } from "./service";
import { getUsersFromApi, getUsersByTypeFromApi,getNextJsBasicUsersFromApi } from "./service";

enum RoutePathEnum {
    ROOT_PAGE = "/",
    NEXT_JS_BASICS_PAGE = "/nextJsBasics",
}

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

    const fetchCustomHookData = async (pathname: RoutePathEnum) => {
        try {
            const users = await (pathname === RoutePathEnum.NEXT_JS_BASICS_PAGE
                ? getNextJsBasicUsersFromApi(1, 10)
                : getUsersFromApi());
            const usersByType = await getUsersByTypeFromApi(null);
            setCustomHookState({ nameAndRole: users, activeUserByTypeTab: null, usersByTypeData: usersByType });
        } catch (error) {
            console.warn("Failed to fetch user:", error);
        }
    }

    const setCustomHookState=(customHookState:Partial<CustomHookState>)=>{
        dispatch({ type: CustomHookActionEnum.SET_CUSTOM_HOOK_DATA, payload: customHookState });
    }

    const setActiveUserByTypeTab = async (selectedUserByTypeTab: UserByTypeEnum | null) => {
        setCustomHookState({ activeUserByTypeTab: selectedUserByTypeTab, isLoading: true });
        const usersByType = await getUsersByTypeFromApi(selectedUserByTypeTab);
        setCustomHookState({ usersByTypeData: usersByType, isLoading: false });
    }

    const setIsLoading = (isLoading: boolean) => {
        setCustomHookState({ isLoading });
    }

    const setActiveRightPanelToggle = (activeRightPanelToggle: RightComponentToggleOptionsEnum | null) => {
        setCustomHookState({ activeRightPanelToggle });
    }

    return {
        ...state,
        // This was basic learning.
        // loadCustomHookData,
        fetchCustomHookData,
        setCustomHookState,
        setActiveUserByTypeTab,
        setIsLoading,
        setActiveRightPanelToggle,
    };
};

export { useCustomHook };
