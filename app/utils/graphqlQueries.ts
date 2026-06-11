import { UserByTypeEnum } from "./types";

const getUsersQuery = () => {
    return `
        query Users {
            users {
                name
                role
            }
        }
    `;
}

const getUsersByTypeQuery = (usersByType: UserByTypeEnum | null) => {
    return `
        query UsersByType {
            usersByType(type: ${usersByType}) {
                name
                role
            }
        }
    `;
}

export { getUsersQuery, getUsersByTypeQuery };
