// =======================
// THEME MANAGER
// =======================
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const htmlRoot = document.documentElement;

function setTheme(theme) {
  htmlRoot.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  if (themeIcon) {
    themeIcon.className = theme === "dark"
      ? "fa-solid fa-sun"
      : "fa-solid fa-moon";
  }
}

// Load saved theme or default to dark
const savedTheme = localStorage.getItem("theme") || "dark";
setTheme(savedTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const current = htmlRoot.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
  });
}

// =======================
// BACK TO TOP BUTTON
// =======================
const backToTop = document.getElementById("backToTop");

if (backToTop) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
      ? `<a href="${project.github}" target="_blank"><i class="fa-brands fa-github"></i> GitHub</a>`
      : "";

    const demoLink = project.demo
      ? `<a href="${project.demo}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</a>`
      : "";

    const card = `
      <div class="project-card fade-in">
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
  let isDeleting = false;

  function type() {
    const currentText = texts[count];

    if (isDeleting) {
      index--;
    } else {
      index++;
    }

    target.textContent = currentText.slice(0, index);

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && index === currentText.length) {
      speed = 2000;
      isDeleting = true;
    } else if (isDeleting && index === 0) {
      isDeleting = false;
      count = (count + 1) % texts.length;
      speed = 400;
    }

    setTimeout(type, speed);
  }

  type();
}

// =======================
// MOBILE NAVBAR
// =======================
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    toggle.classList.toggle("active");
  });

  // Close menu when a nav link is clicked
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      toggle.classList.remove("active");
    });
  });
}

// =======================
// SCROLL ANIMATIONS
// =======================
const observerOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -40px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

// Also make skill cards and about content animate in
document.querySelectorAll(".skill-card, .about-text, .contact-container").forEach((el) => {
  el.classList.add("fade-in");
  observer.observe(el);
});

// =======================
// NAVBAR SCROLL EFFECT
// =======================
let lastScroll = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (navbar) {
    if (currentScroll > 50) {
      navbar.style.boxShadow = "var(--shadow-md)";
    } else {
      navbar.style.boxShadow = "none";
    }
  }

  lastScroll = currentScroll;
});
