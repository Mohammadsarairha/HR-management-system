
let form = document.getElementById("empForm");
let empDiv = document.getElementById("flexDiv");

let allEmployee = [];
function employee(fullName, department, level, imageUrl) {
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    allEmployee.push(this);
};

employee.prototype.salary = function (min, max) {
    let totalsaly = (Math.floor(Math.random() * (min - max + 1)) + min);
    this.salary = (totalsaly - totalsaly * 0.075);
}

employee.prototype.employeeID = function () {
    this.employeeID = Math.floor(1000 + Math.random() * 9000);
}

employee.prototype.render = function () {

    let div = document.createElement("div");
    empDiv.appendChild(div);

    let image = document.createElement("img");
    image.setAttribute("src", this.imageUrl);
    div.appendChild(image);

    let name = document.createElement("p");
    name.textContent = `Name: ${this.fullName}-ID: ${this.employeeID}`;
    div.appendChild(name);

    let dept = document.createElement("p");
    dept.textContent = `Department: ${this.department}-ID: ${this.level}`;
    div.appendChild(dept);

    let salry = document.createElement("p");
    dept.textContent = ` ${this.salary}`;
    div.appendChild(salry);


}

form.addEventListener("submit", handelSubmit);

function handelSubmit(event) {
    event.preventDefault();
    let name = event.target.fname.value;
    let dept = event.target.department.value;
    let level = event.target.level.value;
    let img = event.target.imgUrl.value;
    let newEmp = new employee(name, dept, level, img);
    newEmp.employeeID();
    renderAll();
    form.reset();
}



function renderAll() {
    empDiv.innerHTML = "";
    for (let i = 0; i < allEmployee.length; i++) {
        allEmployee[i].render();
    }
};

renderAll();