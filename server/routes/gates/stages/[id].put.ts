export default defineEventHandler(async event => {
    try {
        const body = await readBody(event);
        const {projectID, stageArray} = body;

        if(!projectID || !stageArray) {
        } else {
            console.log(stageArray)
        }

        for (let i = 0; i < stageArray.length; i++) {
            const stage = stageArray[i];
            
            try {
                // Example generic query structure:
                await connectAndQuery(`update gates.db_owner.gateModel set stage = ${i} where gateNR >= ${stage} and prosjektID = ${projectID}`);

                console.log(`Stage ${i} set from gate ${stage} processed successfully for project with ID: ${projectID}`);
            } catch (error) {
                console.error(`Failed to process stage ${stage}`, error);
                return createError({
                    statusCode: 500,
                    statusMessage: 'Internal Server Error',
                    data: `Failed to update stage ${stage}`,
                });
            }
        }

    } catch (error) {
        console.error('Failed to update project stages', error)
        return createError({
            statusCode: 500,
            statusMessage: 'Internal Server Error',
            data: 'Failed to update stages',
          });
    }
})