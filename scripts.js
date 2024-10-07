function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            projectCards.forEach(c => c.classList.remove('highlighted'));
            this.classList.add('highlighted');
        });
    });
});



document.getElementById('download-resume').addEventListener('click', function() {
    // Assuming your resume file is located in the same folder as your HTML file
    const resumeUrl = 'Virinchi_M_Resume.pdf'; // Update with the correct file path
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Virinchi_M_Resume.pdf'; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
