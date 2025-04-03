import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useUsersStore = defineStore('users', () => {
    const users = ref([]);

    async function fetchUsers() {
        try {
            const response = await $fetch('/users', {
                method: 'GET'
            });
            const data = response.data;
            const usersArray = Object.values(data).map(user => ({
                id: user.ID,
                username: user.username,
                team: user.team,
                role: user.role
            }));
            users.value = usersArray;
        } catch (error) {
            console.error('Error fetching users', error);
        }
    }

    function getUsers() {
        return users.value;
    }

    function sortUsers(comparator) {
        users.value.sort(comparator)
    }

    async function updateRole(roleId, userId) {
        console.log("New role ID: " + roleId + " for user: " + userId);
        const userToUpdate = users.value.find(user => user.id === userId);
        if (!userToUpdate) {
            console.error('User not found for update');
            return;
        }
    
        const requestBody = {
            userID: userId,
            newRole: roleId
        };
    
        try {
            const response = await fetch(`/users/role`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });
    
            if (response.ok) {
                // Update the local store if the request was successful
                userToUpdate.role = roleId;
                console.log('User role updated successfully');
            } else {
                const responseData = await response.json();
                console.error('Failed to update user role:', responseData.data);
            }
        } catch (error) {
            console.error('Error updating user role. Please reload the page and try again.', error);
        }
    }
    
    

    async function updateTeam(teamId, userId) {
        console.log("New team ID: " + teamId + " for user: " + userId);
        const userToUpdate = users.value.find(user => user.id === userId);
        if (!userToUpdate) {
            console.error('User not found for update');
            return;
        }
    
        const requestBody = {
            userID: userId,
            newTeam: teamId
        };
    
        try {
            const response = await fetch(`/users/team`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });
    
            if (response.ok) {
                // Update the local store if the request was successful
                userToUpdate.team = teamId;
                console.log('User team updated successfully');
            } else {
                const responseData = await response.json();
                console.error('Failed to update user team:', responseData.data);
            }
        } catch (error) {
            console.error('Error updating user team. Please reload the page and try again.', error);
        }
    }

    async function deleteUser(userId) {
        try {
            const response = await fetch(`/users/${userId}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                // Remove the deleted user from the local store
                users.value = users.value.filter(user => user.id !== userId);
                console.log('User deleted successfully');
            } else {
                const responseData = await response.json();
                console.error('Failed to delete user:', responseData.data);
            }
        } catch (error) {
            console.error('Error deleting user. Please reload the page and try again.', error);
        }
    }
    
    async function findUserByUsername(username) {
        console.log('Fetching users and searching for user...');
        await fetchUsers();
        return users.value.find(user => user.username === username);
    
    }
    return {
        users,
        fetchUsers,
        getUsers,
        sortUsers,
        updateRole,
        updateTeam,
        deleteUser,
        findUserByUsername
    };
});
