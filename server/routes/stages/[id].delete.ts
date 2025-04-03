export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');

    try {
        if (id === undefined || isNaN(id as any)) {
            return createError({
                statusCode: 400,
                statusMessage: 'Bad Request',
                data: 'Invalid or missing project ID',
            });
        }

        const result = await connectAndQuery(`
            DELETE FROM db_owner.stages WHERE projectID = ${id};
        `);


        return true;
    } catch (error) {
        console.error('Error deleting stages:', error);
        return createError({
            statusCode: 500,
            statusMessage: 'Internal Server Error',
            data: 'Failed to delete stages',
        });
    }
});
