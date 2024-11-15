exports.handler = async (event) => {
  const FSA = event.queryStringParameters.FSA;

  if (FSA.length !== 3) {
    return {
      statusCode: 200,
      body: JSON.stringify({ isValid: false })
    };
  }

  const firstChar = FSA[0];
  const secondChar = FSA[1];
  const thirdChar = FSA[2];

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
