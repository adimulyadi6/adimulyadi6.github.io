const projects = [
  {
    title: "todoit.",
    description:
      "Aplikasi perencanaan sederhana untuk membantu pengguna mengatur tugas dan jadwal harian mereka dengan mudah.",
    image: "resources/image/1000163829.jpg",
    tags: ["Flutter", "PHP", "Firebase"],
  },
  {
    title: "Cakralawa Kimia",
    description:
      "Landing page sederhana untuk perusahaan kimia yang menampilkan informasi produk dan layanan secara profesional.",
    image: "resources/image/cakrawala-kimia.png",
    tags: ["WordPress"],
  },
  {
    title: "Chatbot Gemini AI",
    description:
      "Chatbot berbasis AI Gemini yang mampu merespons pertanyaan pengguna secara otomatis menggunakan integrasi API.",
    image: "resources/image/Gemini-AI-Chatbot.png",
    tags: ["HTML", "API"],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initActiveNavigation();
  initRevealAnimation();
  initMobileSectionTitleShadow();
  initSpotlight();
});

function renderProjects() {
  const container = document.getElementById("projects-list");

  if (!container) return;

  projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-item reveal";

    const tagsHTML = project.tags
      .map((tag) => `<span class="tag">${tag}</span>`)
      .join("");

    card.innerHTML = `
      <img src="${project.image}" alt="Preview project ${project.title}">
      <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tags">
          ${tagsHTML}
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function initActiveNavigation() {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll("nav a");

  if (!sections.length || !navLinks.length) return;

  const setActiveLink = (id) => {
    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("active", isActive);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    },
    {
      rootMargin: "-30% 0px -55% 0px",
      threshold: 0,
    }
  );

  sections.forEach((section) => observer.observe(section));
  setActiveLink(sections[0].id);
}

function initRevealAnimation() {
  const revealItems = document.querySelectorAll("section, .experience-card, .project-item, .footer-info");

  if (!revealItems.length) return;

  revealItems.forEach((item) => item.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.08,
    }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function initMobileSectionTitleShadow() {
  const titles = document.querySelectorAll(".section-title");

  if (!titles.length) return;

  const updateTitleShadow = () => {
    titles.forEach((title) => {
      title.classList.toggle("sticky-active", title.getBoundingClientRect().top <= 0);
    });
  };

  updateTitleShadow();
  window.addEventListener("scroll", updateTitleShadow, { passive: true });
}

function initSpotlight() {
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  if (!canHover) return;

  window.addEventListener(
    "pointermove",
    (event) => {
      document.documentElement.style.setProperty("--mouse-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${event.clientY}px`);
    },
    { passive: true }
  );
}
