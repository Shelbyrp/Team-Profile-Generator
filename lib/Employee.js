// class Employee {
//     constructor(name, id, email){
//         const missingDetails =
//         name === 
//         throw Error ('Please enter a name, id and email');
//     }
// }

// module.export = Employee;

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;