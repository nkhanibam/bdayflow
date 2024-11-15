exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const fsaCode = body.fsa;

  if (fsaCode.length !== 3) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'FSA code must be 3 characters long' })
    };
  }

  const regex = /^[A-Z][0-9][A-Z]$/i;
  if (!regex.test(fsaCode)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid FSA code format' })
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ isValid: true })
  };
};
