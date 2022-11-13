let X1 = document.getElementById('courseName');
let Y1 = document.getElementById('assgnName');
let Z1 = document.getElementById('dueDate');

let calcBtn = document.getElementById('addBtn');

counter = 1;

calcBtn.addEventListener('click', addRows);

function addRows() {
    let x1 = X1.value;
    let y1 = Y1.value;
    let z1 = Z1.value;
    let table = document.querySelector("#myTable");
    let row = document.createElement("tr");
    let srno = document.createElement("td");
    srno.textContent = counter;
    let course_name = document.createElement("td");
    course_name.textContent = x1;
    let assignment_name = document.createElement("td");
    assignment_name.textContent = y1;
    let due_date = document.createElement("td");
    due_date.textContent = z1;
    counter += 1;
    table.appendChild(row)
    table.appendChild(srno);
    table.appendChild(course_name);
    table.appendChild(assignment_name);
    table.appendChild(due_date);
}
