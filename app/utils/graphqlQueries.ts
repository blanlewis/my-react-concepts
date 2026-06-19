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

const getNextJsBasicUsersQuery = (
    page: number,
    size: number
) => {
    return `
        query NextJsBasicUsers {
            nextJsBasicUsers(
                page: ${page}
                size: ${size}
            ) {
                hasMore
                users {
                    name
                    role
                }
            }
        }
    `;
};

export { getUsersQuery, getUsersByTypeQuery, getNextJsBasicUsersQuery };
