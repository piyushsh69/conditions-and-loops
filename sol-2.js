let studentMarks = 90;
let studentGrade;

if (studentMarks >= 90) {
    studentGrade = 'A';
} else if (studentMarks >= 70 && studentMarks < 90) {
    studentGrade = 'B';
} else if (studentMarks >= 50 && studentMarks < 70) {
    studentGrade = 'C';
} else {
    studentGrade = 'F';
}

console.log('Grade is', studentGrade);