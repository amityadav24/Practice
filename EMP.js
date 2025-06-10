let employee = [];
let editIndex = null;

const form = document.getElementById("employee-form");
const tableBody = document.querySelector("#employee-table tbody");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const roleInput = document.getElementById("role");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameVal = nameInput.value.trim();
    const emailVal = emailInput.value.trim();
    const roleVal = roleInput.value.trim();

    if (!nameVal || !emailVal || !roleVal) return;

    const employeeData = { name: nameVal, email: emailVal, role: roleVal };

    if (editIndex === null) {
        employee.push(employeeData);
    } else {
        employee[editIndex] = employeeData;
        editIndex = null;
        form.querySelector("button").textContent = "Add Employee";
    }

    form.reset();
    renderTable();
});

function renderTable() {
    tableBody.innerHTML = "";
    employee.forEach((emp, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${emp.name}</td>
            <td>${emp.email}</td>
            <td>${emp.role}</td>
            <td class="action-btn">
                <button onclick="editEmployee(${index})">Edit</button>
                <button onclick="deleteEmployee(${index})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function editEmployee(index) {
    const emp = employee[index];
    nameInput.value = emp.name;
    emailInput.value = emp.email;
    roleInput.value = emp.role;
    editIndex = index;
    form.querySelector("button").textContent = "Update Employee";
}

function deleteEmployee(index) {
    if (confirm("Are you sure, you want to delete Employee?")) {
        employee.splice(index, 1);
        renderTable();
    }
}
