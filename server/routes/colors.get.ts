import { defineEventHandler, readBody, createError } from 'h3';

export default defineEventHandler(async event => {
    let colors;
    let organizedData = {};
  
    try {
      colors = await connectAndQuery("SELECT ID, name, hex FROM [db_owner].[colors];")
    } catch (error) {
      console.log(error)
      return createError({
        statusCode: 500,
        statusMessage: 'Internal Server Error',
        data: 'Failed to retrieve user records.',
      });
    }
  
    // Organize the data into an object
    colors.forEach(row => {
      if (!organizedData[row.ID]) {
        organizedData[row.ID] = {
          ID: row.ID,
          name: row.name,
          hex: row.hex
        };
      }
    });

    return {
      status: 'success',
      data: organizedData
    };
  });