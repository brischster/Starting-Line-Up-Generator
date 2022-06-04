const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
  it("should create a new Engineer obj with name, email, id, github", () => {
    //Arrange
    const obj = new Engineer("Ryan", "ryan@hotmail.com", 1, "ryancodes");

    // Assert
    expect(obj.name).toEqual("Ryan");
    expect(obj.email).toEqual("ryan@hotmail.com");
    expect(obj.id).toEqual(1);
    expect(obj.github).toEqual("ryancodes");
  });
  it("should get a new Engineer's Github username", () => {
    // Arrange
    const obj = new Engineer("Ryan", "ryan@hotmail.com", 1, "ryancodes");
    // Act
    const { github } = obj;
    // Assert
    expect(obj.getGithub()).toBe(github);
  });

  it("should update Engineer's role", () => {
    // Arrange
    const obj = new Engineer("Ryan", "ryan@hotmail.com", 1, 10);

    // Assert
    expect(obj.getRole()).toBe("Engineer");
  });
});
