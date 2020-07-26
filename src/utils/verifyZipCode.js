const veryfyZipCode = async zipCode => {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${zipCode}/json/`);
    const responseJSON = await response.json();
    return responseJSON;
  } catch (error) {
    return error;
  }
};

export default veryfyZipCode;
