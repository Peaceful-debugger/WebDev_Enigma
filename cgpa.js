function generateForm() {
    const numCourses = document.getElementById('numCourses').value;
    const courseInputs = document.getElementById('courseInputs');
    courseInputs.innerHTML = '';

    for (let i = 0; i < numCourses; i++) {
        courseInputs.innerHTML += `
            <div class="subject">
                <label for="grade${i + 1}">Grade for course ${i + 1}:</label>
                <input type="text" id="grade${i + 1}" name="grade[]" required>

                <label for="credits${i + 1}">Credits for course ${i + 1}:</label>
                <input type="number" id="credits${i + 1}" name="credits[]" min="0" required>
            </div>
            <br>
        `;
    }

    document.getElementById('initialForm').style.display = 'none';
    document.getElementById('cgpaFormContainer').style.display = 'block';
}

function calculateCGPA(event) {
    event.preventDefault();

    const grades = document.getElementsByName('grade[]');
    const credits = document.getElementsByName('credits[]');
    let totalPoints = 0;
    let totalCredits = 0;

    for (let i = 0; i < grades.length; i++) {
        const grade = convertGradeToPoint(grades[i].value);
        const credit = parseFloat(credits[i].value);

        if (grade !== null && !isNaN(credit)) {
            totalPoints += grade * credit;
            totalCredits += credit;
        }
    }

    const cgpa = totalPoints / totalCredits;
    document.getElementById('cgpa').innerText = cgpa.toFixed(2);
    document.getElementById('result').style.display = 'block';
}

function convertGradeToPoint(grade) {
    switch (grade.toUpperCase()) {
        case 'S': return 10;
        case 'A': return 9;
        case 'B': return 8;
        case 'C': return 7;
        case 'D': return 6;
        case 'E': return 4;
        case 'U': return 0;
        default: return null;
    }
}
