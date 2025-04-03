export const mockValidUsers = [
  { username: 'john_doe', role: 'admin', team: 'engineering' },
  { username: 'Petter Tesdal', role: 'user', team: 'marketing' },
  { username: 'alice_jones', role: 'moderator', team: 'support' },
];


export let nextRequestId = 3;

export function getUsernames() {
  return mockValidUsers;
}
