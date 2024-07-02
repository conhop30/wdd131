// const years = [2022, 2000, 2112, 2234];
// const section = document.querySelector("section");

// years 
//     .sort()
//     .forEach((year) => {
//         const p = document.createElement("p");
//         p.textContent = year;
//         section.appendChild(p);
// });

const students = [
    {
        firstName: "Sarah",
        lastName: "Hopkins",
        iNumber: "123-45-6789",
        age: 23,
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        iNumber: "098-765-4321",
        age: 32,
    },
    {
        firstName: "John",
        lastName: "Doe",
        iNumber: "111-222-3333",
        age: 45,
    }
]

const section = document.querySelector("section");

students
    .sort((a, b) => a.firstName - b.firstName)
    .forEach((student) => {
        const p = document.createElement("p");
        p.textContent = `${student.firstName} ${student.lastName}`;
        section.appendChild(p);
    })