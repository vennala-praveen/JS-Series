
const students = [
  { name: "Jack", grades: [85, 90, 78] },
  { name: "Bobby", grades: [92, 88, 95] },
  { name: "Tony", grades: [70, 75, 80] },
  {name: "Praveen", grades: [80, 75, 90]},
  {name: "Sung", grades: [80, 55, 90]}
];


function calculateAverage(grades) {
  const total = grades.reduce((sum, grade) => sum + grade, 0);
  return (total / grades.length).toFixed(2);
}


const tableBody = document.getElementById("student-table-body");

students.forEach(student => {
  const avg = calculateAverage(student.grades);
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${student.name}</td>
    <td>${student.grades.join(", ")}</td>
    <td><strong>${avg}</strong></td>
  `;

  tableBody.appendChild(row);
});
