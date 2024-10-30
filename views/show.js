const users = [
    { name: "MIke", email: "Mike@example.com", gender: "Female", status: "Active", _id: 1 },

];

const tableBody = document.getElementById('userTableBody'); 

users.forEach((user, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.gender}</td>
        <td>${user.status}</td>
        <td>
            <a href="/update-user?id=${user._id}" class="btn border-shadow update">
                <span class="text-gradient"><i class="fas fa-pencil-alt"></i></span>
            </a>
            <a class="btn border-shadow delete" data-id="${user._id}">
                <span class="text-gradient"><i class="fas fa-times"></i></span>
            </a>
        </td>
    `;
    tableBody.appendChild(row);
});