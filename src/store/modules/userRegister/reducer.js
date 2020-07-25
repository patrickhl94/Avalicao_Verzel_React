function userRegister(state = {}, action) {
  switch (action.type) {
    case 'ADD_PERSONAL_DATA_REGISTER':
      return { ...state, personalDataRedister: action.dataUser };
    case 'ADD_ADDRESS_REGISTER':
      return { ...state, addressRegister: action.dataUser };
    case 'ADD_PASSWORD_REGISTER':
      return { ...state, passordRegister: action.dataUser };
    case 'CLEAR_STATE':
      return {};
    default:
      return state;
  }
}

export default userRegister;
