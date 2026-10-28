/* ==========================================================
   REMPAH – site configuration & interactions
   Edit CONFIG to change every ordering / contact destination.
   ========================================================== */
const CONFIG = {
  // WhatsApp number in international format, digits only (no "+", spaces or dashes).
  whatsappNumber: "6282245922263",
  orderMessage: "Hai Rempah! Aku mau pesan jamu",
  contactMessage: "Hai Rempah! Aku mau bilang sesuatu nih",
  email: "officialrempahid@gmail.com",
  emailSubject: "Pesan untuk REMPAH",
  // Handle = text shown next to the icon; Url = full profile link.
  instagramHandle: "@pilih.rempah",
  instagramUrl: "https://www.instagram.com/pilih.rempah?vrfl=ajczd3Z2dWhtcmJ5&utm_source=qr",
  tiktokHandle: "@pilih.rempah",
  tiktokUrl: "https://www.tiktok.com/@pilih.rempah?_r=1&_t=ZS-9AtciF36L6W",
};

(function () {
  "use strict";

  const whatsappUrl = (message) =>
    `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  const links = {
    "whatsapp-order": whatsappUrl(CONFIG.orderMessage),
    "whatsapp-contact": whatsappUrl(CONFIG.contactMessage),
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
