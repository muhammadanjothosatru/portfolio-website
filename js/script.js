const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if(window.scrollY > 200){
    backToTop.style.display = 'block';
  } else{
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({
    top:0,
    behavior:'smooth'
  });
});

// Data Projects
const projects = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio website built with HTML, CSS, and JS.",
    link: "#"
  },
  {
    title: "Todo App",
    description: "Simple todo list application using JavaScript and LocalStorage.",
    link: "#"
  },
  {
    title: "Notes App",
    description: "Notes taking app with localStorage.",
    link: "#"
  }
];

// Render Projects
const container = document.querySelector('.projects-container');

projects.forEach(proj => {
  const card = document.createElement('div');
  card.classList.add('project-card');

  card.innerHTML = `
    <h3>${proj.title}</h3>
    <p>${proj.description}</p>
    <a href="${proj.link}">View Project</a>
  `;

  container.appendChild(card);
});