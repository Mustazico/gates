export default defineEventHandler(async event => {
    let color;
  
    console.log("ATTEMPTING TO APPROVE")

    try {
  
      const body = await readBody(event);
      const { name, hex} = body;
  
      color = await connectAndQuery(`
        INSERT INTO gates.db_owner.colors (Name, Hex) VALUES ('${name}', '${hex}')
      `);
  
      return { color };
    } catch (error) {
      return createError({
        statusCode: 500,
        statusMessage: 'Internal Server Error',
        data: 'Failed to retrieve records',
      });
    }
  });
  