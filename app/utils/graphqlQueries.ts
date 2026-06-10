export function getUsersQuery() {
    return `
        query Users {
            users {
                name
                role
            }
        }
    `;
}
