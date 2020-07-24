function userData(state = {}, action) {
  switch (action.type) {
    case 'ADD_NAME':
      return { ...state, name: action.textInput };
    case 'ADD_EMAIL':
      return { ...state, email: action.textInput };
    case 'ADD_BIRD':
      return { ...state, birth: action.textInput };
    case 'ADD_CPF':
      return { ...state, cpf: action.textInput };
    case 'ADD_ZIPCODE':
      return { ...state, zipCode: action.textInput };
    case 'ADD_STREET':
      return { ...state, street: action.textInput };
    case 'ADD_NEIGHBORHOOD':
      return { ...state, neighborhood: action.textInput };
    case 'ADD_NUMBER':
      return { ...state, number: action.textInput };
    case 'ADD_CITY':
      return { ...state, city: action.textInput };
    case 'ADD_STATE':
      return { ...state, state: action.textInput };
    case 'ADD_PASSWORD':
      return { ...state, password: action.textInput };
    case 'ADD_PASSWORD_CONFIRME':
      return { ...state, passwordConfirme: action.textInput };
    default:
      return state;
  }
}

export default userData;
