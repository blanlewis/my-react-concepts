import { CustomHookState } from "./types";
const customHookInitialFetch = async (): Promise<CustomHookState | null> => {
    try {
        const response = await fetch("http://localhost:8080/user");
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        const data = await response.json();
        return { nameAndRole: data };
    } catch (error) {
        console.error("Failed to fetch user:", error);
        return null;
    }
};

export { customHookInitialFetch };