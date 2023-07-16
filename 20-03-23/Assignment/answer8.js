/* Create a prototype object called Student with a property name. Add a method called printDetails to the
prototype that logs the string "Hello, my name is {name}" to the console. Instantiate a Student object with the
name "Mithun" and call the printDetails method. */

function Student() {
    this.name = "";
  }
  
  Student.prototype.printDetails = function() {
    console.log("Hello, my name is " + this.name);
  };
  
  const student = new Student();
  student.name = "Mithun";
  
  student.printDetails();