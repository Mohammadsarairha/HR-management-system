'use strict';
let allEmployee = [];
function employee(employeeID, fullName, department, level, imageUrl) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    allEmployee.push(this);
};

employee.prototype.salary = function (min, max) {
    let totalsaly = (Math.floor(Math.random() * (min - max + 1)) + min);
    return (totalsaly - totalsaly * 0.075);
}

let Ghazi = new employee(1000, "Ghazi Samer", "Administration", "Senior", "./assets/img/Ghazi.png");
let Lana = new employee(1001, "Lana Ali", "Finance", "Senior", "./assets/img/Lana.png");
let Tamara = new employee(1002, "Tamara Ayoub", "Marketing", "Senior", "./assets/img/Tamara.png");
let Safi = new employee(1003, "Safi Walid", "Administration", "Mid-Senior", "./assets/img/Safi.png");
let Omar = new employee(1004, "Omar Zaid", "Development", "Senior", "./assets/img/Omar.png");
let Rana = new employee(1005, "Rana Saleh", "Development", "Junior", "./assets/img/Lana.png");
let Hadi = new employee(1006, "Hadi Ahmad", "Finance", "Senior", "./assets/img/Ghazi.png");

employee.prototype.render = function () {
    document.write(`<img src=${this.imageUrl}>`);
    document.write(`<p>${this.employeeID}</p>`);
    document.write(`<p>${this.fullName}</p>`);
    document.write(`<p>${this.department}</p>`);
    document.write(`<p>${this.level}</p>`);
    if (this.level === "Senior") {
        document.write(`<p> Salary is : ${this.salary(1500, 2000)}</p>`);
    } else if (this.level === "Mid-Senior") {
        document.write(`<p> Salary is : ${this.salary(1000, 1500)}</p>`);
    } else if (this.level === "Junior") {
        document.write(`<p> Salary is : ${this.salary(500, 1000)}</p>`);
    }
    document.write("<hr>");
}

for (let i = 0; i < allEmployee.length; i++) {
    allEmployee[i].render();
}