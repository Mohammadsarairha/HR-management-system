'use strict';
let allEmployee = [];
function employee(employeeID, fullName, department, level, imageUrl) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = `./images/${this.fullName}.png`;
    allEmployee.push(this);
};

employee.prototype.salary = function (min, max) {
    return (Math.floor(Math.random() * (min - max + 1)) + min);
}

let Ghazi = new employee(1000, "Ghazi Samer", "Administration", "Senior");
let Lana = new employee(1001, "Lana Ali", "Finance", "Senior");
let Tamara = new employee(1002, "Tamara Ayoub", "Marketing", "Senior");
let Safi = new employee(1003, "Safi Walid", "Administration", "Mid-Senior");
let Omar = new employee(1004, "Omar Zaid", "Development", "Senior");
let Rana = new employee(1005, "Rana Saleh", "Development", "Junior");
let Hadi = new employee(1006, "Hadi Ahmad", "Finance", "Senior");

employee.prototype.render = function () {
    document.write(`<h1>${this.employeeID}</h1>`);
    document.write(`<h1>${this.fullName}</h1>`);
    document.write(`<h1>${this.department}</h1>`);
    document.write(`<h1>${this.level}</h1>`);
    document.write(`<h1>${this.imageUrl}</h1>`);
    if (this.level === "Senior") {
        document.write(`<h1>${this.salary(1500, 2000)}</h1>`);
    } else if (this.level === "Mid-Senior") {
        document.write(`<h1>${this.salary(1000, 1500)}</h1>`);
    } else if (this.level === "Junior") {
        document.write(`<h1>${this.salary(500, 1000)}</h1>`);
    }
}

for (let i = 0; i < allEmployee.length; i++) {
    allEmployee[i].render();
}