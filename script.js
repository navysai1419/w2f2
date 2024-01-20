let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer' },
  { id: 2, name: 'jack', age: 20, profession: 'developer' },
  { id: 3, name: 'karen', age: 19, profession: 'admin' },
];

// Don't worry about consoling these functions, they are already being called on the button clicks.
// Please don't change anything in the index.html file.

// a. Print all the employees who have the profession of developer.
function PrintDeveloper() {
  let developers = arr.filter(employee => employee.profession === 'developer');
  console.log('Developers:', developers.map(employee => employee.name));
}

// b. Make another employee object and append that in this array.
function addData() {
  let newEmployee = { id: 4, name: 'susan', age: 20, profession: 'intern' };
  arr.push(newEmployee);
  console.log('New employee added:', newEmployee);
  console.log('New array:',arr)
  //Write your code here, just console.log
}
  
// c. Make another array of such employees and concat that in the original array.


// d. Remove the object where the profession is admin.
function removeAdmin() {
  let filteredArr = arr.filter(employee => employee.profession !== 'admin');
  console.log('Array after removing admins:', filteredArr);
}

function concatenateArray(){
  let additionalArr = [
    { id: 5, name: 'alex', age: 22, profession: 'developer' },
    { id: 6, name: 'emma', age: 21, profession: 'intern' },
  ];

  let concatenatedArr = arr.concat(additionalArr);
  console.log('Array after concatenation:', concatenatedArr);
  //Write your code here, just console.log n    
}
// Here is an example of how functions work,
// basically a function is a block of code which can directly access your 'arr' variable since arr is global.
// If I have a function called consoleArr(), that can directly access arr like this to console it.

function consoleArr() {
  console.log('Consoling Array Variable', arr);
  // Over here I can directly access the variable.
}
