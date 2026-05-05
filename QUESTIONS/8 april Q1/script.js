// Initial Data
let students = [
  { name: "Amit", marks: 75 },
  { name: "Neha", marks: 45 }
];

// a) Add Student
function addStudent(name, marks) {
  students.push({ name, marks });
}

// b) Update Marks
function updateMarks(name, newMarks) {
  let found = false;

  students.forEach(student => {
    if (student.name === name) {
      student.marks = newMarks;
      found = true;
    }
  });

  if (!found) {
    console.log("Student not found");
  }
}

// c) Get Passed Students
function getPassedStudents() {
  return students.filter(student => student.marks > 50);
}

// d) Get Topper
function getTopper() {
  return students.reduce((top, student) =>
    student.marks > top.marks ? student : top
  );
}

// 🔥 Example
addStudent("Rahul", 85);

updateMarks("Neha", 60);

console.log(getPassedStudents());
console.log(getTopper());