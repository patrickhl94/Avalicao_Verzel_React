function session(state = {}, action) {
  switch (action.type) {
    case 'ADD_EMAIL':
      return { ...state, email: action.email };
    case 'ADD_PASSWORD':
      return { ...state, password: action.password };
    case 'START_SESSION':
      return action.data;
    case 'END_SESSION':
      return { ...state, id: '' };
    default:
      return state;
  }
}

export default session;
