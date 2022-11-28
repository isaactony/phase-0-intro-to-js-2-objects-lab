// Write your solution in this file!
const employee = {
    name: "Isaac Tonyloi",
    streetAdress: "23-22"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = {...employee};
    newObj[key] = value;
    
    return newObj;
    
}
updateEmployeeWithKeyAndValue(employee, "Isaack", "22-21");

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;

}
destructivelyUpdateEmployeeWithKeyAndValue(employee, "Tony", "11-334");

function deleteFromEmployeeByKey(employee, key) {
    const newObj = {...employee};
    delete newObj[key];
    return newObj;
}
deleteFromEmployeeByKey(employee, name);

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
destructivelyDeleteFromEmployeeByKey(employee, name);
