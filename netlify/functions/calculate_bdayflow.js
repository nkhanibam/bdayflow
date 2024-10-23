exports.handler = async (event, context) => {
    const data = JSON.parse(event.body);
    const todaysdate = parseInt(data.todaysdate, 10);
    let bdayflow;

    if (1 <= todaysdate && todaysdate <= 15) {
        bdayflow = 1;
    } else if (16 <= todaysdate && todaysdate <= 25) {
        bdayflow = 2;
    } else if (todaysdate >= 26) {
        bdayflow = 3;
    } else {
        bdayflow = 0;  // Default value
    }

    return {
        statusCode: 200,
        body: JSON.stringify({ bdayflow: bdayflow })
    };
};
