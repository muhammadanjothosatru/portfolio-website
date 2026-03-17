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
/*const projects = [
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
];*/

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with HTML, CSS, and JavaScript.",
    image: "assets/images/portfolio.png",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/username/portfolio",
    demo: "https://username.github.io"
  },
  {
    title: "Weather App",
    description: "Weather forecast using API.",
    image: "assets/images/weather.png",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/username/weather-app",
    demo: "https://username.github.io/weather-app"
  }
];

// Render Projects
/*const container = document.querySelector('.projects-container');

projects.forEach(proj => {
  const card = document.createElement('div');
  card.classList.add('project-card');

  card.innerHTML = `
    <h3>${proj.title}</h3>
    <p>${proj.description}</p>
    <a href="${proj.link}">View Project</a>
  `;

  container.appendChild(card);
});*/

const container = document.querySelector(".projects-container");

projects.forEach(project => {

  const techList = project.tech.map(t => 
    `<span class="tech">${t}</span>`
  ).join("");

  const card = `
    <div class="project-card">

      <img src="${project.image}" alt="${project.title}">

      <h3>${project.title}</h3>
      <p>${project.description}</p>

      <div class="project-tech">
        ${techList}
      </div>

      <div class="project-links">
        <a href="${project.github}" target="_blank">GitHub</a>
        <a href="${project.demo}" target="_blank">Live Demo</a>
      </div>

    </div>
  `;

  container.innerHTML += card;

});

// Text Rotating Effect
const texts = ["Web Developer", "Cloud Engineer", "IT Enthusiast", "Frontend Developer"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
const target = document.getElementById('changing-text');

(function type(){
  if(count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  target.textContent = letter;
  
  if(letter.length === currentText.length){
    setTimeout(() => {
      index = 0;
      count++;
      type();
    }, 2000); // delay 2 detik sebelum pindah ke kata berikutnya
  } else {
    setTimeout(type, 150); // speed mengetik per huruf
  }
})();

const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});