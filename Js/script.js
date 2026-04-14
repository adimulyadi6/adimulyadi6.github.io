const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

const projects = [
  {
    title: "todoit.",
    description:
      "Aplikasi perencanaan sederhana untuk membantu pengguna mengatur tugas dan jadwal harian mereka dengan mudah.",
    image: "resources/image/1000163829.jpg",
  },
  {
    title: "Cakralawa Kimia",
    description:
      "Landing page sederhana untuk perusahaan kimia yang menampilkan informasi produk dan layanan secara profesional.",
    image: "resources/image/1000163829.jpg",
  },
  {
    title: "Chatbot Gemini AI",
    description:
      "Chatbot berbasis AI Gemini yang mampu merespons pertanyaan pengguna secara otomatis menggunakan integrasi API.",
    image: "resources/image/1000163829.jpg",
  },
];

const container = document.getElementById("projects");

projects.forEach((project) => {
  const card = document.createElement("div");
  card.className = "project-item";

  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <h3>${project.title}</h3>
    <p>${project.description}</p>
  `;

  container.appendChild(card);
});
