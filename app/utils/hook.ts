import { useContext } from "react";
import { CustomHookContext } from "./context";

const useCustomHook = () => {
    const context = useContext(CustomHookContext);
    if (!context) {
        throw new Error("useCustomHook must be used within a CustomHookProvider");
    }
    return context;
};

export { useCustomHook };
