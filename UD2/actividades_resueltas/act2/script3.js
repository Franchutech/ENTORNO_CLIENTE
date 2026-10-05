document.addEventListener('DOMContentLoaded', () => {
    async function fetchUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        displayUsers(users);
    }
    fetchUsers();

    function displayUsers(users) {
        const userList = document.getElementById('user-list');
        users.forEach(user => {
            const listItem = document.createElement('div');
            listItem.textContent = `${user.name} (${user.email})`;
            userList.appendChild(listItem);
        });
    }
});