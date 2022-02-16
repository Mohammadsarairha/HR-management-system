
let form = document.getElementById("empForm");
let empDiv = document.getElementById("flexDiv");
let startEmpId = 1000;
let allEmployee = [];

function employee(fullName, department, level, imageUrl) {
    this.employeeID = 0;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = 0;
    allEmployee.push(this);
};

//----------Generate a unique id--------//
function generateId() {
    return startEmpId++;
}
employee.prototype.getId = function () {
    this.employeeID = generateId();
}
//----------Generate a unique id--------//

//----------Generate random salary based on level--------//
employee.prototype.generateSalary = function () {
    let min;
    let max;

    if (this.level == "Senior") {
        min = 1500;
        max = 2000;
    } else if (this.level == "Mid-Senior") {
        min = 1000;
        max = 1500;
    } else {
        min = 500;
        max = 1000;
    }
    let randomSalary = Math.floor((Math.random() * (max - min + 1)) + min);
    randomSalary *= 0.75;
    this.salary = randomSalary;
}
//----------Generate random salary based on level--------//


//---------Add Employees-------//

let ghaze = new employee("Ghazi Samer", "Administration", "Senior", "./assets/img/Ghazi.jpg");
let lana = new employee("Lana Ali", "Finance", "Senior", "./assets/img/Lana.jpg");
let tamara = new employee("Tamara Ayoub", "Marketing", "Senior", "./assets/img/Tamara.jpg");
let safi = new employee("Safi Walid", "Administration", "Mid-Senior", "./assets/img/Safi.jpg");
let omar = new employee("Omar Zaid", "Development", "Senior", "./assets/img/Omar.jpg");
let rana = new employee("Rana Saleh", "Development", "Junior", "./assets/img/Rana.jpg");
let hadi = new employee("Hadi Ahmad", "Finance", "Mid-Senior", "./assets/img/Hadi.jpg");
let rania = new employee("Lana Ali", "Finance", "Senior", "./assets/img/Lana.jpg");
//---------Add Employees-------//

//-----------Save all employees in local storage----------//
function saveEmployees() {
    let formatedData = JSON.stringify(allEmployee);
    localStorage.setItem("Employees", formatedData);
}

//-------get Employees for storage---------
function getEmployees() {
    let emp = localStorage.getItem("Employees");
    let parseEmps = JSON.parse(emp);
    if (parseEmps != null) {
        allEmployee = [];
        for (let i = 0; i < parseEmps.length; i++) {
            new employee(parseEmps[i].fullName, parseEmps[i].department, parseEmps[i].level, parseEmps[i].imageUrl);
        };
    }

    renderAll();
}
//-----------Save all employees in local storage----------//


//---------Render all employees in DOM ---------------//

employee.prototype.render = function () {

    let div = document.createElement("div");
    div.setAttribute('class', "flexCard");
    empDiv.appendChild(div);

    let image = document.createElement("img");
    image.setAttribute("src", this.imageUrl);
    div.appendChild(image);

    let name = document.createElement("p");
    name.textContent = `Name: ${this.fullName} - ID: ${this.employeeID}`;
    div.appendChild(name);

    let dept = document.createElement("p");
    dept.textContent = `Department: ${this.department} - Level: ${this.level}`;
    div.appendChild(dept);

    let salry = document.createElement("p");
    salry.textContent = ` ${this.salary}`;
    div.appendChild(salry);
}

//---------Render all employees in DOM ---------------//


//------------------Submit event------------------//

form.addEventListener("submit", handelSubmit);

function handelSubmit(event) {
    event.preventDefault();
    let name = event.target.fname.value;
    let dept = event.target.department.value;
    let level = event.target.level.value;
    let img = event.target.imgUrl.value;
    let newEmp = new employee(name, dept, level, img);
    newEmp.getId();
    newEmp.generateSalary();
    saveEmployees();
    renderAll();
    form.reset();
}

//------------------Submit event------------------//

function renderAll() {
    empDiv.innerHTML = "";
    for (let i = 0; i < allEmployee.length; i++) {
        allEmployee[i].getId();
        allEmployee[i].generateSalary();
        allEmployee[i].render();
    }
    saveEmployees();
};

renderAll();
getEmployees();