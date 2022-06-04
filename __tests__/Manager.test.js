const Manager = require("../lib/manager.js");

describe("Manager", () => {
  it("should create a new manager obj with name, email, id, office number", () => {
    //Arrange
    const obj = new Manager("Ryan", "ryan@hotmail.com", 1, 10);

    // Assert
    expect(obj.name).toEqual("Ryan");
    expect(obj.email).toEqual("ryan@hotmail.com");
    expect(obj.id).toEqual(1);
    expect(obj.officeNumber).toEqual(10);
  });
  it("should get a new Manager's office", () => {
    // Arrange
    const obj = new Manager("Ryan", "ryan@hotmail.com", 1, 10);
    // Act
    const { officeNumber } = obj;
    // Assert
    expect(obj.getOfficeNumber()).toBe(officeNumber);
  });

  it("should update Manager's role", () => {
    // Arrange
    const obj = new Manager("Ryan", "ryan@hotmail.com", 1, 10);

    // Assert
    expect(obj.getRole()).toBe("Manager");
  });
});
