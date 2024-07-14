// JavaScript
function showSkills(skills) {
    const skillsSection = document.getElementById('skills');
    skillsSection.innerHTML = '<h2>Skills</h2>';

    skills.forEach(skill => {
        const skillBar = document.createElement('div');
        skillBar.className = 'skill-bar';

        const skillLevel = document.createElement('div');
        skillLevel.style.width = skill.level;
        skillLevel.textContent = `${skill.name} (${skill.level})`;

        skillBar.appendChild(skillLevel);
        skillsSection.appendChild(skillBar);
    });
}

const skills = [
    { name: 'Leadership', level: '90%' },
    { name: 'Public Speaking', level: '85%' },
    { name: 'Policy Analysis', level: '80%' }
];

document.addEventListener('DOMContentLoaded', () => {
    showSkills(skills);
});