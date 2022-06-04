const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, email, id, officeNum) {
    super(name, email, id);
    this.officeNumber = officeNum;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
