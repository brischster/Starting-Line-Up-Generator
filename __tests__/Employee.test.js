const Employee = require("../lib/employee.js");

describe("Employee", () => {
  it("should create a new employee obj with name, id, and email", () => {
    //Arrange
    const obj = new Employee("Ryan", "ryan@hotmail.com", 1);

    // Assert
    expect(obj.name).toEqual("Ryan");
    expect(obj.email).toEqual("ryan@hotmail.com");
    expect(obj.id).toEqual(1);
  });
  it("should get a new employee's name", () => {
    // Arrange
    const obj = new Employee("Ryan", "ryan@hotmail.com", 1);
    // Act
    const { name } = obj;
    // Assert
    expect(obj.getName()).toBe(name);
  });

  it("should get new employee email", () => {
    // Arrange
    const obj = new Employee("Ryan", "ryan@hotmail.com", 1);
    // Act
    const { email } = obj;
    // Assert
    expect(obj.getEmail()).toBe(email);
  });
  it("should get new employee's role", () => {
    // Arrange
    const obj = new Employee("Ryan", "ryan@hotmail.com", 1);
    // Assert
    expect(obj.getRole()).toBe("Employee");
  });
});
