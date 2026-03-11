// Load profile data
document.getElementById('profile-name').textContent = portfolioData.profile.name;
document.getElementById('profile-title').textContent = portfolioData.profile.title;
document.getElementById('profile-description').textContent = portfolioData.profile.description;
document.getElementById('profile-image').src = portfolioData.profile.photo;
document.getElementById('profile-image').alt = portfolioData.profile.name;
document.getElementById('footer-name').textContent = portfolioData.profile.name;

// Load social links
const socialLinksHTML = `
    <a href="${portfolioData.profile.github}" target="_blank" title="GitHub">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
    </a>
    <a href="${portfolioData.profile.linkedin}" target="_blank" title="LinkedIn">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
    </a>
    <a href="mailto:${portfolioData.profile.email}" title="Email">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
        </svg>
    </a>
`;
document.getElementById('social-links').innerHTML = socialLinksHTML;

// Load skills
const skillsHTML = `
    <div class="skill-category">
        <h3>Languages</h3>
        <div class="skills-grid">
            ${portfolioData.skills.languages.map(skill => `<span>${skill}</span>`).join('')}
        </div>
    </div>
    <div class="skill-category">
        <h3>Frameworks & Libraries</h3>
        <div class="skills-grid">
            ${portfolioData.skills.frameworks.map(skill => `<span>${skill}</span>`).join('')}
        </div>
    </div>
    <div class="skill-category">
        <h3>Databases</h3>
        <div class="skills-grid">
            ${portfolioData.skills.databases.map(skill => `<span>${skill}</span>`).join('')}
        </div>
    </div>
    <div class="skill-category">
        <h3>Tools & Others</h3>
        <div class="skills-grid">
            ${portfolioData.skills.tools.map(skill => `<span>${skill}</span>`).join('')}
        </div>
    </div>
`;
document.getElementById('skills-container').innerHTML = skillsHTML;

// Load projects
const projectsHTML = portfolioData.projects.map((project, index) => `
    <div class="project-card">
        <div class="card-decoration"></div>
        <div class="card-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tech-tags">
                ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.github}" target="_blank" class="btn btn-primary">
                    View Repository
                </a>
                ${project.demo ? `<a href="${project.demo}" target="_blank" class="btn btn-secondary">Watch Demo</a>` : ''}
            </div>
        </div>
    </div>
`).join('');
document.getElementById('projects-container').innerHTML = projectsHTML;

// Load certifications
const certificationsHTML = portfolioData.certifications.map(cert => `
    <div class="cert-card">
        <h4>${cert.title}</h4>
        <p>${cert.issuer}</p>
        ${cert.date ? `<span class="cert-date">${cert.date}</span>` : ''}
    </div>
`).join('');
document.getElementById('certifications-container').innerHTML = certificationsHTML;

// Load contact
const contactHTML = `
    <div class="contact-item">
        <h4>Email</h4>
        <a href="mailto:${portfolioData.profile.email}">${portfolioData.profile.email}</a>
    </div>
    <div class="contact-item">
        <h4>LinkedIn</h4>
        <a href="${portfolioData.profile.linkedin}" target="_blank">https://www.linkedin.com/in/dasuni-s-jayasinghe/</a>
    </div>
    <div class="contact-item">
        <h4>GitHub</h4>
        <a href="${portfolioData.profile.github}" target="_blank">github.com/DSJayasinghe</a>
    </div>
`;
document.getElementById('contact-container').innerHTML = contactHTML;

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });

});

