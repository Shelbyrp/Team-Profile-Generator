class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;

    let noData = name === undefined || id === undefined || email === undefined;
      if (noData === true)
      throw Error('Please provide a name, id and email');
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
    return 'Employee';
  }
}

// Allows the module to be exported.
module.exports = Employee;
