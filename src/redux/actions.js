export const Types = {
    ADD_USER: 'ADD_USER',
}

export function addUser(user) {
    return {
      type: Types.ADD_USER,
      payload: user
    };
}