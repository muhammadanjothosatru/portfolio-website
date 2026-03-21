// =======================
// BACK TO TOP BUTTON
// =======================
const backToTop = document.getElementById("backToTop");

if (backToTop) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// =======================
// PROJECT DATA
// =======================
const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with HTML, CSS, and JavaScript.",
    image: "assets/images/portfolio.png",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/muhammadanjothosatru/portfolio-website",
    demo: "https://muhammadanjothosatru.github.io/portfolio-website/",
  },
  {
    title: "Todo App",
    description:
      "A simple and interactive task management app with local storage, filtering, and editing features.",
    image: "assets/images/todo.png",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/muhammadanjothosatru/todo-app",
    demo: "https://muhammadanjothosatru.github.io/todo-app/",
  },
];

// =======================
// RENDER PROJECTS
// =======================
const container = document.querySelector(".projects-container");

if (container) {
  projects.forEach((project) => {
    const techList = Array.isArray(project.tech)
      ? project.tech.map((t) => `<span class="tech">${t}</span>`).join("")
      : "";

    const githubLink = project.github
      ? `<a href="${project.github}" target="_blank">GitHub</a>`
      : "";

    const demoLink = project.demo
      ? `<a href="${project.demo}" target="_blank">Live Demo</a>`
      : "";

    const card = `
      <div class="project-card">
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>

        <div class="project-tech">
          ${techList}
        </div>

        <div class="project-links">
          ${githubLink}
          ${demoLink}
        </div>
      </div>
    `;

    container.insertAdjacentHTML("beforeend", card);
  });
}

// =======================
// TEXT ROTATING EFFECT
// =======================
const texts = [
  "Web Developer",
  "Cloud Engineer",
  "IT Enthusiast",
  "Frontend Developer",
];

const target = document.getElementById("changing-text");

if (target) {
  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";

  (function type() {
    if (count === texts.length) count = 0;

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    target.textContent = letter;

    if (letter.length === currentText.length) {
      setTimeout(() => {
        index = 0;
        count++;
        type();
      }, 2000);
    } else {
      setTimeout(type, 150);
    }
  })();
}

// =======================
// MOBILE NAVBAR
// =======================
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}
