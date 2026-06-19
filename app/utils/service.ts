import { UserByTypeEnum } from "./types";
import { getUsersQuery, getUsersByTypeQuery,getNextJsBasicUsersQuery } from "./graphqlQueries";

// This was basic learning.
// const customHookInitialFetch = async (): Promise<CustomHookState | null> => {
//     try {
//         const response = await fetch("http://localhost:8080/users");
//         if (!response.ok) {
//             throw new Error(`HTTP Error: ${response.status}`);
//         }
//         const data = await response.json();
//         return { nameAndRole: data };
//     } catch (error) {
//         console.warn("Failed to fetch user:", error);
//         return null;
//     }
// };
// export { customHookInitialFetch };

const getUsersFromApi = async () => {
    const usersRequest = {
        query: getUsersQuery(),
    };
    const result = await fetch("http://localhost:8080/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(usersRequest),
    });
    if (!result.ok) {
        throw new Error(`HTTP Error: ${result.status}`);
    }
    const jsonResult = await result.json();
    return jsonResult.data.users;
};

const getUsersByTypeFromApi = async (usersByType: UserByTypeEnum|null) => {
    const usersByTypeRequest = {
        query: getUsersByTypeQuery(usersByType),
    };
    const result = await fetch("http://localhost:8080/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(usersByTypeRequest),
    });
    if (!result.ok) {
        throw new Error(`HTTP Error: ${result.status}`);
    }
    const jsonResult = await result.json();
    return jsonResult.data.usersByType;
};

const getNextJsBasicUsersFromApi = async (
    page: number,
    size: number
) => {
    const request = {
        query: getNextJsBasicUsersQuery(page, size),
    };

    const result = await fetch(
        "http://localhost:8080/graphql",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request),
        }
    );

    if (!result.ok) {
        throw new Error(`HTTP Error: ${result.status}`);
    }

    const jsonResult = await result.json();

    return jsonResult.data.nextJsBasicUsers;
};

export { getUsersFromApi, getUsersByTypeFromApi, getNextJsBasicUsersFromApi };