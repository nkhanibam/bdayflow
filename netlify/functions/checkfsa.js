exports.handler = async (event) => {
  const fsa = event.queryStringParameters.fsa;

  if (fsa.length !== 3) {
    return {
      statusCode: 200,
      body: JSON.stringify({ isValid: false })
    };
  }

  const firstChar = fsa[0];
  const secondChar = fsa[1];
  const thirdChar = fsa[2];

  if (!firstChar.match(/[A-Za-z0-9]/) || !secondChar.match(/[0-9]/) || !thirdChar.match(/[A-Za-z0-9]/)) {
    return {
      statusCode: 200,
      body: JSON.stringify({ isValid: false })
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ isValid: true })
  };
};
