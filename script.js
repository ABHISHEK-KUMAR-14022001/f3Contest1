const employeeList = [
  { id: 1, name: "jack", profession: "developer", age: 20 },
  { id: 2, name: "john", profession: "admin", age: 28 },
];

function addEmployee(event) {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const professionInput = document.getElementById("profession");
  const ageInput = document.getElementById("age");
  const messagesDiv = document.getElementById("messages");

  const name = nameInput.value;
  const profession = professionInput.value;
  const age = ageInput.value;

  if (!name || !profession || !age) {
    messagesDiv.innerHTML =
      '<p class="error-message">Error : Please make sure all fields are filled before adding an employee!</p>';
    return;
  }

  const id = employeeList.length + 1;
  const employee = { id, name, profession, age };
  employeeList.push(employee);

  const listItem = document.createElement("div");
  listItem.className = "employee-item";
  listItem.innerHTML = `
                  <span>${id}.</span>
                  <span>${name}</span>
                  <span>${profession}</span>
                  <span>${age}</span>
                  <button class="delete-button" data-id="${id}">Delete</button>
                `;
  document.getElementById("employee-list").appendChild(listItem);

  messagesDiv.innerHTML =
    '<p class="success-message">Employee added successfully.</p>';

  nameInput.value = "";
  professionInput.value = "";
  ageInput.value = "";
}

function deleteEmployee(event) {
  if (event.target.classList.contains("delete-button")) {
    const id = parseInt(event.target.getAttribute("data-id"));
    const index = employeeList.findIndex((employee) => employee.id === id);

    if (index !== -1) {
      employeeList.splice(index, 1);
      event.target.parentNode.remove();
    }
  }
}

document
  .getElementById("employee-form")
  .addEventListener("submit", addEmployee);
document
  .getElementById("employee-list")
  .addEventListener("click", deleteEmployee);

// Display initial employees
const employeeListContainer = document.getElementById("employee-list");
employeeList.forEach((employee) => {
  const listItem = document.createElement("div");
  listItem.className = "employee-item";
  listItem.innerHTML = `
                  <span>${employee.id}.</span>
                  <span> ${employee.name}</span>
                  <span>${employee.profession}</span>
                  <span>${employee.age}</span>
                  <button class="delete-button" data-id="${employee.id}">Delete</button>
                `;
  employeeListContainer.appendChild(listItem);
});
