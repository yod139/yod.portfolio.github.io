// JS/main.js

gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-title",{
  y: 100,
  opacity: 0,
  duration: 1.4,
  ease: "power4.out"
});

gsap.utils.toArray(".showcase-item").forEach((item)=>{

  gsap.from(item,{
    y: 100,
    opacity: 0,
    duration: 1.2,

    scrollTrigger:{
      trigger: item,
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    }
  });

});

gsap.from(".about-text",{
  y: 80,
  opacity: 0,

  scrollTrigger:{
    trigger: ".about",
    start: "top 80%",
    toggleActions: "play reverse play reverse"
  }
});

gsap.from(".skills-list li",{
  opacity: 0,
  y: 40,
  stagger: 0.08,
  immediateRender: false,

  scrollTrigger:{
    trigger: ".skills",
    start: "top 80%",
    toggleActions: "play reverse play reverse"
  }
});

gsap.from(".contact-title",{
  y: 80,
  opacity: 0,

  scrollTrigger:{
    trigger: ".contact",
    start: "top 80%",
    toggleActions: "play reverse play reverse"
  }
});

gsap.registerPlugin(ScrollToPlugin);

document.querySelectorAll('a[href^="#"]').forEach((anchor)=>{

  anchor.addEventListener("click",(e)=>{

    e.preventDefault();

    const target = anchor.getAttribute("href");

    gsap.to(window,{
  duration: 1.8,
  scrollTo:{
    y: target,
    offsetY: 80,
    autoKill: false
  },
  ease: "power3.inOut"
});

  });

});

gsap.from(".mini-works-header",{
  y: 60,
  opacity: 0,

  scrollTrigger:{
    trigger: ".mini-works-header",
    start: "top 85%",
    toggleActions: "play reverse play reverse"
  }
});

gsap.from(".mini-work",{
  y: 80,
  opacity: 0,
  stagger: 0,

  scrollTrigger:{
    trigger: ".mini-works",
    start: "top 85%",
    toggleActions: "play reverse play reverse"
  }
});

/* =========================
   LOGIN INFO
========================= */

document.querySelectorAll(".login-toggle").forEach(button => {

  button.addEventListener("click", () => {

    const info =
      button.nextElementSibling;

    info.classList.toggle("active");

  });

});

/* =========================
   COPY BUTTON
========================= */

document.querySelectorAll(".copy-btn").forEach(button => {

  button.addEventListener("click", () => {

    const text =
      button.parentElement
            .querySelector(".copy-target")
            .textContent;

    navigator.clipboard.writeText(text);

    const originalText = button.textContent;

    button.textContent = "COPIED";

    setTimeout(() => {

      button.textContent = originalText;

    }, 1500);

  });

});

/* =========================
   PROFILE ANIMATION
========================= */

gsap.from(".profile-image",{
    y:60,
    opacity:0,
    duration:1,
    ease:"power3.out",

    scrollTrigger:{
        trigger:".profile",
        start:"top 75%",
        toggleActions:"play reverse play reverse"
    }
});

gsap.from(".profile-item",{
    y:40,
    opacity:0,
    duration:.8,
    stagger:.15,
    ease:"power3.out",

    scrollTrigger:{
        trigger:".profile-content",
        start:"top 75%",
        toggleActions:"play reverse play reverse"
    }
});

gsap.from(".profile-heading",{
  y:60,
  opacity:0,

  scrollTrigger:{
    trigger:".profile",
    start:"top 75%",
    toggleActions:"play reverse play reverse"
  }
});

/* =========================
   PROJECT 03：サンプルサイト切り替え
========================= */

document.querySelectorAll(".sample-tab").forEach(tab => {

  tab.addEventListener("click", () => {

    document.querySelectorAll(".sample-tab").forEach(t => {
      const active = (t === tab);
      t.classList.toggle("is-active", active);
      t.setAttribute("aria-selected", active ? "true" : "false");
    });

    document.querySelectorAll(".sample-panel").forEach(panel => {
      const active = (panel.id === tab.dataset.target);
      panel.classList.toggle("is-active", active);
      panel.hidden = !active;
    });

    // 表示が切り替わったので、アニメーション位置を再計算
    if (window.ScrollTrigger) ScrollTrigger.refresh();

  });

});

/* =========================
   PROJECT 03：PC / SP 表示切り替え
========================= */

document.querySelectorAll(".sample-panel").forEach(panel => {

  const buttons = panel.querySelectorAll(".device-btn");

  buttons.forEach(button => {

    button.addEventListener("click", () => {

      buttons.forEach(b => b.classList.toggle("is-active", b === button));

      panel.classList.toggle("is-sp", button.dataset.device === "sp");

    });

  });

});
