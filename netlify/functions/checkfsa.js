exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const fsaCode = body.fsa;

  if (!fsaCode || fsaCode.length !== 3 || !/^[A-Z][0-9][A-Z]$/i.test(fsaCode)) {
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
