import { defineEventHandler, readBody, createError } from 'h3';

export default defineEventHandler(async event => {
    let stages;
    let organizedData = {};
  
    try {
      stages = await connectAndQuery("SELECT ID, projectID, nr, hex, name, weight FROM [db_owner].[stages];")
    } catch (error) {
      console.log(error)
      return createError({
        statusCode: 500,
        statusMessage: 'Internal Server Error',
        data: 'Failed to retrieve user records.',
      });
    }
  
    // Organize the data into an object
    stages.forEach(row => {
      if (!organizedData[row.ID]) {
        organizedData[row.ID] = {
            ID: row.ID,
            projectID: row.projectID,
            nr: row.nr,
            hex: row.hex,
            name: row.name,
            weight: row.weight
        };
      }
    });

    return {
      status: 'success',
      data: organizedData
    };
  });