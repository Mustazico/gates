import { mockValidUsers } from '~/server/mockDatabase/users';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { username } = body;

    let newRole;

    if (process.env.USE_MOCK_DB) {
      // Mocked Data
      newRole = mockValidUsers.find(user => user.username === username);
    } else {
      // Real Database Query
      const result = await connectAndQuery(
        `SELECT role, team FROM [db_owner].[validUsers] WHERE username = '${username}'`
      );
      newRole = result[0];
    }

    if (!newRole) {
      return createError({
        statusCode: 404,
        statusMessage: 'User not found',
      });
    }

    return newRole;
  } catch (error) {
    console.error('Failed to validate user:', error);
    return createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
    });
  }
});
