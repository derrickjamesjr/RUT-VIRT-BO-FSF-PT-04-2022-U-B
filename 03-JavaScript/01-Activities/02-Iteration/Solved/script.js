// Creates an array containing names of five student in the class
var students = ["Sarah", "Orlando", "Heather", "Ismael", "Hung"];

// console.log('Great to see you, ' + students[0] + '!');
// console.log('Great to see you, ' + students[1] + '!');
// console.log('Great to see you, ' + students[2] + '!');
// console.log('Great to see you, ' + students[3] + '!');
// console.log('Great to see you, ' + students[4] + '!');

// Logs length of the array
console.log(students.length);

// For loop starts at 0, runs while i is less than length of student array
// Increments by 1
for (var i = 0; i < students.length; i++) {
  // This statement will run each time the loop is executed
  console.log("Great to see you, " + students[i] + "!");
}
