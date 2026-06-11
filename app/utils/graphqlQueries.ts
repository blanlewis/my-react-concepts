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

const getUsersByTypeQuery = (type: UserByTypeEnum|null) => {
    return `
        query UsersByType {
            usersByType(type: "${type}") {
                name
                role
            }
        }
    `;
}

export { getUsersQuery, getUsersByTypeQuery };
