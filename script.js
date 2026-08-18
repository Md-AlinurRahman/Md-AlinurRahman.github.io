document.getElementById("year").textContent = new Date().getFullYear();
const btn = document.querySelector(".menu-btn");
const links = document.querySelector(".nav-links");
btn.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  btn.setAttribute("aria-expanded", open);
});
document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click",()=>links.classList.remove("open")));
