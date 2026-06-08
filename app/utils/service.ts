const customHookInitialFetch = async () => {
    try {
        const response = await fetch("http://localhost:8080/user");

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch user:", error);
        throw error;
    }
};

export { customHookInitialFetch };