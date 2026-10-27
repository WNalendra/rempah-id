/* ==========================================================
   REMPAH – site configuration & interactions
   Edit CONFIG to change every ordering / contact destination.
   ========================================================== */
const CONFIG = {
  // WhatsApp number in international format, digits only (no "+", spaces or dashes).
  // Taken from the footer phone number in the design – CONFIRM it is the ordering line.
  whatsappNumber: "6282245922263",
  whatsappMessage: "Halo REMPAH, saya ingin memesan jamu.",
  email: "officialrempahid@gmail.com",
  emailSubject: "Pesan untuk REMPAH",
  // Social media – intentionally left empty. Fill in your own.
  // Handle = text shown next to the icon (e.g. "@yourname"); Url = full profile link.
  instagramHandle: "",
  instagramUrl: "",
  tiktokHandle: "",
  tiktokUrl: "",
};

(function () {
  "use strict";

  const links = {
    whatsapp: `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`,
    email: `mailto:${CONFIG.email}?subject=${encodeURIComponent(CONFIG.emailSubject)}`,
    instagram: CONFIG.instagramUrl,
    tiktok: CONFIG.tiktokUrl,
  };

  document.querySelectorAll("[data-config-link]").forEach((el) => {
    const url = links[el.dataset.configLink];
    if (url) el.setAttribute("href", url);
    else el.removeAttribute("href"); // empty config -> not a link
  });

  const handles = { instagram: CONFIG.instagramHandle, tiktok: CONFIG.tiktokHandle };
  document.querySelectorAll("[data-config-text]").forEach((el) => {
    el.textContent = handles[el.dataset.configText] || "";
  });

  // Close the mobile menu after choosing an item.
  const menu = document.getElementById("mainNav");
  if (menu && window.bootstrap) {
    menu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        if (menu.classList.contains("show")) bootstrap.Collapse.getOrCreateInstance(menu).hide();
      })
    );
  }
})();
