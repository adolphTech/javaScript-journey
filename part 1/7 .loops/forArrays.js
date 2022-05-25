const examScores = [98,77,84,91,57,66];

// for(let i=0;i <=examScores.length;i++){
//     console.log(examScores[i])
// }

const myStudents =[
    {
        firstName :'Zeus',
        grade:86
    },
    {
        firstName: 'Artemis',
        grade:97
    },
    {
        firstName: 'Hera',
        grade: 72
    },
    {
        firstName: 'Apollo',
        grade: 90
    }

];

// for (let i=0;i< myStudents.length;i++) {
//
//     let students = myStudents[i];
//     console.log(
//         //`${myStudents[i].firstName} scored ${myStudents[i].grade}`
//         `${students.firstName} scored ${students.grade}`);
// }
//grade average
let total =0;
for (let i=0;i<myStudents.length;i++){
    let students = myStudents[i];
    total += students.grade;
    console.log(total/myStudents.length)
 }