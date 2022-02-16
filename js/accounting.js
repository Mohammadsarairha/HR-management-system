'use strict';
let table = document.getElementById("empTable");

let allDepSalay = 0;
let admiSalary = 0;
let marketingSalary = 0;
let developSalary = 0;
let financeSalary = 0;

let allEmpNum = 0;
let adminEmp = 0;
let marketingEmp = 0;
let developerEmp = 0;
let financeEmp = 0;

let allDept = ["Administration", "Marketing", "Development", "Finance"];

let allEmployee = [];

function getEmployees() {
    let emp = localStorage.getItem("Employees");
    let parseEmps = JSON.parse(emp);
    if (parseEmps != null) {
        for (let i = 0; i < parseEmps.length; i++) {
            allEmployee.push(parseEmps[i]);
        }
    }
}

function EmpInfo() {
    for (let i = 0; i < allEmployee.length; i++) {
        if (allEmployee[i].department == "Administration") {
            admiSalary += allEmployee[i].salary;
            adminEmp += 1;
        } else if (allEmployee[i].department == "Marketing") {
            marketingSalary += allEmployee[i].salary;
            marketingEmp += 1;
        } else if (allEmployee[i].department == "Development") {
            developSalary += allEmployee[i].salary;
            developerEmp += 1;
        } else {
            financeSalary += allEmployee[i].salary;
            financeEmp += 1;
        }
        allDepSalay += allEmployee[i].salary;
        allEmpNum += 1;
    }
}

function renderEmployees() {

    for (let i = 0; i < allDept.length; i++) {
        let dept = allDept[i];

        if (dept == "Administration") {

            let tr = document.createElement("tr");
            table.appendChild(tr);

            let deptName = document.createElement("td");
            deptName.textContent = "Administration";
            tr.appendChild(deptName);

            let empNumber = document.createElement("td");
            empNumber.textContent = adminEmp;
            tr.appendChild(empNumber);

            let empsalary = document.createElement("td");
            empsalary.textContent = admiSalary;
            tr.appendChild(empsalary);

            let avgsalary = document.createElement("td");
            avgsalary.textContent = Math.round((parseInt(admiSalary) / adminEmp));
            tr.appendChild(avgsalary);

        } else if (dept == "Marketing") {

            let tr = document.createElement("tr");
            table.appendChild(tr);

            let deptName = document.createElement("td");
            deptName.textContent = "Marketing";
            tr.appendChild(deptName);

            let empNumber = document.createElement("td");
            empNumber.textContent = marketingEmp;
            tr.appendChild(empNumber);

            let empsalary = document.createElement("td");
            empsalary.textContent = marketingSalary;
            tr.appendChild(empsalary);

            let avgsalary = document.createElement("td");
            avgsalary.textContent = Math.round((parseInt(marketingSalary) / marketingEmp));
            tr.appendChild(avgsalary);

        } else if (dept == "Development") {

            let tr = document.createElement("tr");
            table.appendChild(tr);

            let deptName = document.createElement("td");
            deptName.textContent = "Development";
            tr.appendChild(deptName);

            let empNumber = document.createElement("td");
            empNumber.textContent = developerEmp;
            tr.appendChild(empNumber);

            let empsalary = document.createElement("td");
            empsalary.textContent = developSalary;
            tr.appendChild(empsalary);

            let avgsalary = document.createElement("td");
            avgsalary.textContent = Math.round((parseInt(developSalary) / developerEmp));
            tr.appendChild(avgsalary);

        } else {

            let tr = document.createElement("tr");
            table.appendChild(tr);

            let deptName = document.createElement("td");
            deptName.textContent = "Finance";
            tr.appendChild(deptName);

            let empNumber = document.createElement("td");
            empNumber.textContent = financeEmp;
            tr.appendChild(empNumber);

            let empsalary = document.createElement("td");
            empsalary.textContent = financeSalary;
            tr.appendChild(empsalary);

            let avgsalary = document.createElement("td");
            avgsalary.textContent = Math.round((parseInt(financeSalary) / financeEmp));
            tr.appendChild(avgsalary);
        }
    }

    let tr = document.createElement("tr");
    table.appendChild(tr);

    let total = document.createElement("td");
    total.textContent = "Total";
    tr.appendChild(total);

    let numTotal = document.createElement("td");
    numTotal.textContent = allEmpNum;
    tr.appendChild(numTotal);

    let salaryTotal = document.createElement("td");
    salaryTotal.textContent = allDepSalay;
    tr.appendChild(salaryTotal);

    let avgTotal = document.createElement("td");
    avgTotal.textContent = Math.round((parseInt(allDepSalay) / allEmpNum));
    tr.appendChild(avgTotal);
}

getEmployees();
EmpInfo();
renderEmployees();
