export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');

    try {
        if (id === undefined || isNaN(id as any)) {
            return createError({
                statusCode: 400,
                statusMessage: 'Bad Request',
                data: 'Invalid or missing color ID',
            });
        }

        const result = await connectAndQuery(`
            DELETE FROM db_owner.colors WHERE id = ${id};
        `);


        return { deleted: true };
    } catch (error) {
        console.error('Error deleting color:', error);
        return createError({
            statusCode: 500,
            statusMessage: 'Internal Server Error',
            data: 'Failed to delete color',
        });
    }
});
