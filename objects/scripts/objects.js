const student = {
    firstName: "Connor",
    lastName: "Hopkins",
    iNumber: "123-45-6789",
    age: 23,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuphNwgKSVN9g8zJjZqrwY4VZz7be7pzQlWVrB1rpKDhR9sFEnoPgkbkrpmuVKBwtFw1A&usqp=CAU',
};

const student2 = {
    firstName: "Sarah",
    lastName: "Hopkins",
    iNumber: "123-45-6789",
    age: 23,
};

const student3 = {
    firstName: "Bob",
    lastName: "Hopkins",
    iNumber: "123-45-6789",
    age: 23,
}

const students = [student, student2, student3];

students.forEach((student) => {
    // create an article
    const article = document.createElement("article");

    // Add the student's information
    const firstName = document.createElement("p");
    firstName.textContent = student.firstName;

    const lastName = document.createElement("p");
    lastName.textContent = student.lastName;

    const iNumber = document.createElement("p");
    iNumber.textContent = student.iNumber;

    const age = document.createElement("p");
    age.textContent = student.age;

    const image = document.createElement("img");
    image.src = student.image;

    // Put it to the screen
    article.append(firstName, lastName, iNumber, age, image);
    document.querySelector("section").append(article);
});
