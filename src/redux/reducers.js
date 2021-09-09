import { Types } from './actions';

const initialState = {
    addUser: { 
        username: '', 
        email: '', 
        password: ''
    }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.ADD_USER:
      return {
        addUser: action.payload
      };
    default:
      return state;
    }
}