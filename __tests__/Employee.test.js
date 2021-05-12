const Employee = require("../lib/Employee.js");

describe("Employee", () => {

    it('If no information is passed to the application, show an error', () => {
        expect(() => {          
              new Employee();
       }).toThrow('Please provide a name, id and email');
        });

    it("A new object will be created for Employee", () => {
        const newEmployee = {};
        expect(typeof(newEmployee)).toEqual("object");
    });

    it("Name can be set via the passed arguments", () => {
        const name = "Shelby";
        const newEmployee = new Employee("Shelby", 1, "info@test.com");
        expect(newEmployee.name).toEqual(name);
    });

    it("ID can be set via the passed arguments", () => {
        const id = 1;
        const newEmployee = new Employee("Shelby", 1, "info@test.com");
        expect(newEmployee.id).toEqual(id);
    });

    it("Email can be set via the passed arguments", () => {
        const email = "info@test.com";
        const newEmployee = new Employee("Shelby", 1, "info@test.com");
        expect(newEmployee.email).toEqual(email);
    });

    it("getRole() can be set via the passed arguments", () => {
        const role = "Employee";
        const newEmployee = new Employee("Shelby", 1, "info@test.com", "Employee");
        expect(newEmployee.getRole()).toEqual(role);
    });
    
});