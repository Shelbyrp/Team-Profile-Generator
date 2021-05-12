const Employee = require("../lib/Employee.js");

describe("Employee", () => {

    it('If no information is passed, show an error', () => {
        expect(() => {          
              new Employee();
       }).toThrow('Please provide a name, id and email');
        });

    it("A new object will be created for Employee", () => {
        const newEmployee = {};
        expect(typeof(newEmployee)).toEqual("object");
    });

    it("Name can be set via the passed arguments", () => {
     
         const newEmployee = new Employee();
        expect(newEmployee.name).toEqual(name);
    });


});