const { exportAllDeclaration } = require("@babel/types");
const { describe } = require("yargs");
const Employee = require("../index");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should return an object of strings when called with 'new' keyword", () => {
      // Arrange & Act
      const obj = new Employee();
      // Assert
      expect("name" in obj).toEqual(true);
    });
    it("should set up an 'id or number' when create", () => {
      //Arrange
      const id = 10;
      // Act
      const obj = new Employee(id);

      // Assert
      expect(obj.id).toBeGreaterThan(0); // might need to change this back to be num instead of zero
    });
    it("should return an object with a string as input for email", () => {
      // Arrange
      const email = "string";
      // Act
      const obj = new Employee(email);
      // Assert
      expect(obj.email).toMatch("string");
    });
  });
  describe("getName", () => {
    it("should return a new 'Employee' object", () => {
      //Arrange & Act
      const obj = new Employee("name").getName("name");
      // Assert
      expect(obj instanceof Employee).toEqual(true);
    });
    it("should return an object with all objects 'names' included", () => {
      // I believe I am trying to write a function that produces a new object that includes all employee's name?
      //Arrange
      const name1 = "Karl"; // or do I use an actual name, "Karl"
      //const name2 = "Tom";

      // Act  this destructing i want value of 'name'
      const { name } = new Employee(name1).getName(name1); // hope and a prayer should be in the new object I create with getName function b/c it is name of an employee?

      //Assert
      expect(name).toEqual(name1);
    });
    describe("getID", () => {
      it("should return a new 'Employee id' object", () => {
        // do i need to test instanceof for every method on the class/constructor?
        //Arrange
        const id1 = 2;

        // Act
        const { id } = new Employee(id1).getID(id1);

        // Assert
        expect(id).toEqual(id1);
      });
    });
  });
});
