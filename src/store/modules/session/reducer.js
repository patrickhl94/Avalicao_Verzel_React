function session(state = {}, action) {
  switch (action.type) {
    case 'ADD_EMAIL':
      return { ...state, email: action.email };
    case 'ADD_PASSWORD':
      return { ...state, password: action.password };
    case 'ADD_TOKEN':
      return { ...state, token: action.token };
    case 'ADD_ID':
      return { ...state, id: action.id };
    case 'START_SESSION':
      return action.data;
    case 'END_SESSION':
      return { ...state, token: '' };
    default:
      return state;
  }
}

export default session;
