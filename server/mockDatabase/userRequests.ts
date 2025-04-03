export let mockUserRequests = [
  { id: 1, username: 'alice', team: 'Team A' },
  { id: 2, username: 'bob', team: 'Team B' }
];

export let nextRequestId = 3;

export function addUserRequest(username: string, selectedTeam: string) {
  const newRequest = { id: nextRequestId++, username, team: selectedTeam };
  mockUserRequests.push(newRequest);
  return newRequest;
}

export function deleteUserRequest(id: number) {
  const index = mockUserRequests.findIndex(req => req.id === id);
  if (index !== -1) {
    mockUserRequests.splice(index, 1);
    return true;
  }
  return false;
}

export function getUserRequests() {
  return mockUserRequests;
}

