(function () {
  const nav = document.getElementById("site-nav");
  const btn = nav && nav.querySelector(".menu-btn");
  if (btn && nav) {
    const close = () => {
      nav.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-label", "Open menu");
    };
    btn.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    nav.querySelectorAll(".nav-links a").forEach((a) => a.addEventListener("click", close));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  }

  const form = document.getElementById("waitlist-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = form.querySelector("#wl-email");
      if (email && !email.checkValidity()) {
        email.reportValidity();
        return;
      }
      form.classList.add("sent");
      const msg = form.querySelector(".ok-msg");
      if (msg) msg.focus?.();
    });
  }
})();
