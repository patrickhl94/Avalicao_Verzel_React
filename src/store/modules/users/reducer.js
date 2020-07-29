function session(state = [], action) {
  switch (action.type) {
    case 'ADD_NEW_USER':
      return [...state, action.user];
    default:
      return state;
  }
}

export default session;
