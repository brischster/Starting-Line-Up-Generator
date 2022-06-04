const Intern = require("../lib/Intern.js");

describe("Intern", () => {
  it("should create a new Intern obj with name, email, id, school", () => {
    //Arrange
    const obj = new Intern("Ryan", "ryan@hotmail.com", 1, "DePaul");

    // Assert
    expect(obj.name).toEqual("Ryan");
    expect(obj.email).toEqual("ryan@hotmail.com");
    expect(obj.id).toEqual(1);
    expect(obj.school).toEqual("DePaul");
  });
  it("should get a new Intern's school", () => {
    // Arrange
    const obj = new Intern("Ryan", "ryan@hotmail.com", 1, "DePaul");
    // Act
    const { school } = obj;
    // Assert
    expect(obj.getSchool()).toBe(school);
  });

  it("should update Intern's role", () => {
    // Arrange
    const obj = new Intern("Ryan", "ryan@hotmail.com", 1, 10);

    // Assert
    expect(obj.getRole()).toBe("Intern");
  });
});
