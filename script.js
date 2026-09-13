// Add the owner-confirmed international number without spaces or '+', e.g. 2567XXXXXXXX.
const BUSINESS_WHATSAPP_NUMBER = "";

const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");
menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  siteNav?.classList.toggle("is-open", !open);
});

if (/^\d{10,15}$/.test(BUSINESS_WHATSAPP_NUMBER)) {
  document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    link.href = `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}`;
    link.hidden = false;
  });
}
