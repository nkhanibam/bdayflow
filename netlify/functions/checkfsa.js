exports.handler = async (event) => {
  const fsaCode = event.queryStringParameters.fsa;

  // Check if FSA code is provided
  if (!fsaCode) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'FSA code is missing 1.17' })
    };
  }

  // Check if FSA code is 3 characters long
  if (fsaCode.length !== 3) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'FSA code must be 3 characters long' })
    };
  }

  // Check if the first and third characters are letters, and the second is a number
  const regex = /^[A-Z][0-9][A-Z]$/i;
  if (!regex.test(fsaCode)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid FSA code format' })
    };
  }

  // FSA code is valid
  return {
    statusCode: 200,
    body: JSON.stringify({ isValid: true })
  };
};
