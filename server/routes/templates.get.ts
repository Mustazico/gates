// projects.get.ts 
export default defineEventHandler(async (event) => {

    let templates;
    let organizedData = {};
  
    try {
      templates = await connectAndQuery(
        "SELECT ID, title, team, template FROM gates.db_owner.projectModel WHERE template = 'true';")
  
    } catch (error) {
      console.log(error)
      return createError({
        statusCode: 500,
        statusMessage: 'Internal Server Error',
        data: 'Failed to retrieve records.',
      });
    }
  
    
  
    // Organiserer dataen i prosjektet til et object
    templates.forEach(row => {
      const IDAsString = String(row.ID); // Convert ID to string
      if (!organizedData[IDAsString]) {
        organizedData[IDAsString] = {
          ID: IDAsString,
          title: row.title,
          team: row.team,
          template: row.template
        };
      }
    });
  
    return {
      data: organizedData
    }
  })
  