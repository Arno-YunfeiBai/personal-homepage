import {
  defaultLanguage,
  languages,
  siteContent,
} from "./content/site.js";

const LANGUAGE_STORAGE_KEY = "personal-homepage-language";
const root = document.querySelector("#root");
const prefersReducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const motionController = {
  cleanup: null,
};

if (!root) {
  throw new Error("Root element not found.");
}

const getInitialLanguage = () => {
  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

  if (storedLanguage && siteContent[storedLanguage]) {
    return storedLanguage;
  }

  const browserLanguage = navigator.language.toLowerCase();

  if (browserLanguage.startsWith("zh")) {
    return "zh";
  }

  return defaultLanguage;
};

let activeLanguage = getInitialLanguage();

const renderTags = (tags) =>
  tags
    .map(
      (tag) => `
        <span class="tag">${tag}</span>
      `,
    )
    .join("");

const renderLinks = (links) =>
  links
    .map(
      (link) => `
        <a class="pill-link motion-button" href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>
      `,
    )
    .join("");

const renderLanguageToggle = () =>
  languages
    .map(
      (language) => `
        <button
          class="language-option motion-button${language.code === activeLanguage ? " is-active" : ""}"
          type="button"
          data-language="${language.code}"
          aria-pressed="${language.code === activeLanguage}"
        >
          ${language.label}
        </button>
      `,
    )
    .join("");

const renderHeroFacts = (facts) =>
  facts
    .map(
      (fact) => `
        <article class="glass-panel fact-card">
          <p class="card-eyebrow">${fact.label}</p>
          <p class="fact-value">${fact.value}</p>
        </article>
      `,
    )
    .join("");

const renderStats = (stats) =>
  stats
    .map(
      (stat) => `
        <div class="stat-row">
          <p class="stat-value">${stat.value}</p>
          <p class="stat-label">${stat.label}</p>
        </div>
      `,
    )
    .join("");

const renderSharedHeroVisual = (content, extraClass = "") => `
  <aside class="hero-visual${extraClass ? ` ${extraClass}` : ""}">
    <div class="glass-panel portrait-card motion-depth" data-parallax data-parallax-factor="22">
      <img class="portrait-image" src="./src/assets/portrait.jpg" alt="Portrait of ${content.identity.name}" />
      <div class="portrait-glow"></div>
    </div>

    <div class="glass-panel snapshot motion-depth" data-parallax data-parallax-factor="14">
      <div class="snapshot-head">
        <span>${content.hero.snapshotLabel}</span>
        <span class="status"><span class="status-dot"></span>${content.hero.status}</span>
      </div>

      <div class="snapshot-card">
        <p class="card-eyebrow">${content.hero.snapshotEyebrow}</p>
        <div class="stats-list">
          ${renderStats(content.stats)}
        </div>
      </div>

      <p class="snapshot-note">
        ${content.hero.snapshotNote}
      </p>
    </div>
  </aside>
`;

const renderSignalCards = (items) =>
  items
    .map(
      (item, index) => `
        <article class="glass-panel signal-card reveal motion-depth" style="--reveal-delay: ${index * 90}ms;">
          <p class="card-eyebrow">${item.title}</p>
          <p>${item.detail}</p>
        </article>
      `,
    )
    .join("");

const renderOpenToCards = (items) =>
  items
    .map(
      (item, index) => `
        <article class="glass-panel open-card reveal motion-depth" style="--reveal-delay: ${index * 100}ms;">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `,
    )
    .join("");

const renderProjectDetails = (content, project, index) => `
  <div class="project-disclosure">
    <button
      class="project-toggle motion-button"
      type="button"
      id="project-toggle-${activeLanguage}-${index}"
      data-project-toggle
      data-open-label="${content.projects.openDetailsLabel}"
      data-close-label="${content.projects.closeDetailsLabel}"
      aria-expanded="false"
      aria-controls="project-panel-${activeLanguage}-${index}"
    >
      <span class="project-toggle-copy">
        <span class="project-toggle-label">${content.projects.detailLabel}</span>
        <span class="project-toggle-text" data-project-toggle-text>${content.projects.openDetailsLabel}</span>
      </span>
      <span class="project-toggle-icon" aria-hidden="true"></span>
    </button>

    <div
      class="project-panel-shell"
      id="project-panel-${activeLanguage}-${index}"
      data-project-panel
      role="region"
      aria-labelledby="project-toggle-${activeLanguage}-${index}"
    >
      <div class="project-panel-inner">
        <div class="project-detail-list">
          <div class="project-detail">
            <p class="project-detail-label">${content.projects.challengeLabel}</p>
            <p>${project.challenge}</p>
          </div>
          <div class="project-detail">
            <p class="project-detail-label">${content.projects.ownershipLabel}</p>
            <p>${project.ownership}</p>
          </div>
          <div class="project-detail">
            <p class="project-detail-label">${content.projects.signalLabel}</p>
            <p>${project.signal}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

const renderProjectCard = (content, project, index) => `
  <article
    class="glass-panel project-card reveal motion-depth"
    style="--reveal-delay: ${index * 140}ms;"
    data-project-card
  >
    <div class="project-card-head">
      <p class="card-eyebrow">${content.projects.caseStudyLabel} ${String(index + 1).padStart(2, "0")}</p>
      <div class="tag-row project-tag-row">${renderTags(project.tags)}</div>
    </div>
    <h3>${project.name}</h3>
    <p class="project-summary">${project.summary}</p>
    ${renderProjectDetails(content, project, index)}
  </article>
`;

const renderEnglishHero = (content) => `
  <section class="hero">
    <div class="hero-copy reveal">
      <p class="eyebrow">${content.hero.eyebrow}</p>
      <h1><span class="text-gradient">${content.hero.intro}</span></h1>
      <p class="lede">${content.hero.shortBio}</p>

      <div class="cta-row">
        <a class="button button-primary motion-button" href="#projects">${content.hero.primaryCta}</a>
        <a class="button button-secondary motion-button" href="#contact">${content.hero.secondaryCta}</a>
      </div>

      <div class="meta-row">
        <span class="meta-pill meta-pill-accent">${content.identity.title}</span>
        <span class="meta-pill">${content.identity.location}</span>
        <span class="meta-pill">${content.identity.availability}</span>
      </div>

      <div class="hero-facts">
        ${renderHeroFacts(content.hero.quickFacts)}
      </div>
    </div>

    ${renderSharedHeroVisual(content, "reveal reveal-delay-1")}
  </section>
`;

const renderChineseHero = (content) => `
  <section class="hero hero-zh">
    <div class="hero-zh-main reveal">
      <div class="hero-zh-copy">
        <p class="eyebrow">${content.hero.eyebrow}</p>
        <h1><span class="text-gradient">${content.hero.intro}</span></h1>
        <p class="hero-zh-statement">${content.hero.statement}</p>
      </div>

      <div class="glass-panel hero-zh-rhythm">
        <p class="card-eyebrow">${content.hero.rhythmTitle}</p>
        <div class="hero-zh-lines">
          ${content.hero.rhythmLines
            .map(
              (line) => `
                <p>${line}</p>
              `,
            )
            .join("")}
        </div>
      </div>

      <div class="hero-zh-actions">
        <p class="lede">${content.hero.shortBio}</p>

        <div class="cta-row">
          <a class="button button-primary motion-button" href="#projects">${content.hero.primaryCta}</a>
          <a class="button button-secondary motion-button" href="#contact">${content.hero.secondaryCta}</a>
        </div>

        <div class="meta-row">
          <span class="meta-pill meta-pill-accent">${content.identity.title}</span>
          <span class="meta-pill">${content.identity.location}</span>
          <span class="meta-pill">${content.identity.availability}</span>
        </div>
      </div>
    </div>

    <div class="hero-zh-side reveal reveal-delay-1">
      <div class="glass-panel hero-zh-highlight">
        <p class="card-eyebrow">${content.hero.highlightLabel}</p>
        <p class="hero-zh-highlight-value">${content.hero.highlightValue}</p>
      </div>

      <div class="hero-facts hero-facts-zh">
        ${renderHeroFacts(content.hero.quickFacts)}
      </div>

      ${renderSharedHeroVisual(content)}
    </div>
  </section>
`;

const updateDocumentMetadata = (content) => {
  document.documentElement.lang = activeLanguage === "zh" ? "zh-CN" : "en";
  document.title = content.meta.title;

  const descriptionTag = document.querySelector('meta[name="description"]');

  if (descriptionTag) {
    descriptionTag.setAttribute("content", content.meta.description);
  }
};

const cleanupMotion = () => {
  if (motionController.cleanup) {
    motionController.cleanup();
    motionController.cleanup = null;
  }
};

const setupRevealMotion = (elements, reducedMotion) => {
  if (reducedMotion) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.16,
    },
  );

  elements.forEach((element) => observer.observe(element));

  return () => observer.disconnect();
};

const setupDepthMotion = (elements, reducedMotion) => {
  if (reducedMotion || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    elements.forEach((element) => {
      element.style.removeProperty("--tilt-x");
      element.style.removeProperty("--tilt-y");
      element.style.removeProperty("--glow-x");
      element.style.removeProperty("--glow-y");
    });
    return () => {};
  }

  const cleanupCallbacks = [];

  elements.forEach((element) => {
    const handleMove = (event) => {
      const rect = element.getBoundingClientRect();
      const offsetX = (event.clientX - rect.left) / rect.width;
      const offsetY = (event.clientY - rect.top) / rect.height;
      const rotateY = (offsetX - 0.5) * 7;
      const rotateX = (0.5 - offsetY) * 7;

      element.style.setProperty("--tilt-x", `${rotateX.toFixed(2)}deg`);
      element.style.setProperty("--tilt-y", `${rotateY.toFixed(2)}deg`);
      element.style.setProperty("--glow-x", `${(offsetX * 100).toFixed(2)}%`);
      element.style.setProperty("--glow-y", `${(offsetY * 100).toFixed(2)}%`);
    };

    const reset = () => {
      element.style.removeProperty("--tilt-x");
      element.style.removeProperty("--tilt-y");
      element.style.removeProperty("--glow-x");
      element.style.removeProperty("--glow-y");
    };

    element.addEventListener("pointermove", handleMove);
    element.addEventListener("pointerleave", reset);
    cleanupCallbacks.push(() => {
      element.removeEventListener("pointermove", handleMove);
      element.removeEventListener("pointerleave", reset);
      reset();
    });
  });

  return () => cleanupCallbacks.forEach((callback) => callback());
};

const setupParallaxMotion = (reducedMotion) => {
  const parallaxElements = [...root.querySelectorAll("[data-parallax]")];
  const ambientA = root.querySelector(".ambient-a");
  const ambientB = root.querySelector(".ambient-b");

  if (reducedMotion || !parallaxElements.length) {
    parallaxElements.forEach((element) => element.style.removeProperty("--parallax-offset"));
    ambientA?.style.removeProperty("--ambient-shift");
    ambientB?.style.removeProperty("--ambient-shift");
    return () => {};
  }

  let ticking = false;

  const update = () => {
    const viewportHeight = window.innerHeight;

    parallaxElements.forEach((element) => {
      const factor = Number(element.dataset.parallaxFactor || 16);
      const rect = element.getBoundingClientRect();
      const progress = (rect.top + rect.height * 0.5 - viewportHeight * 0.5) / viewportHeight;
      const offset = Math.max(-1, Math.min(1, progress)) * factor * -1;
      element.style.setProperty("--parallax-offset", `${offset.toFixed(2)}px`);
    });

    const scrollRatio = Math.min(window.scrollY / 1200, 1);
    ambientA?.style.setProperty("--ambient-shift", `${(scrollRatio * -18).toFixed(2)}px`);
    ambientB?.style.setProperty("--ambient-shift", `${(scrollRatio * -28).toFixed(2)}px`);
    ticking = false;
  };

  const requestTick = () => {
    if (ticking) {
      return;
    }

    ticking = true;
    window.requestAnimationFrame(update);
  };

  update();
  window.addEventListener("scroll", requestTick, { passive: true });
  window.addEventListener("resize", requestTick);

  return () => {
    window.removeEventListener("scroll", requestTick);
    window.removeEventListener("resize", requestTick);
  };
};

const setupMotion = () => {
  cleanupMotion();

  const reducedMotion = prefersReducedMotionQuery.matches;
  document.documentElement.classList.toggle("reduced-motion", reducedMotion);

  const revealElements = [...root.querySelectorAll(".reveal")];
  const depthElements = [...root.querySelectorAll(".motion-depth")];

  const cleanupReveal = setupRevealMotion(revealElements, reducedMotion);
  const cleanupDepth = setupDepthMotion(depthElements, reducedMotion);
  const cleanupParallax = setupParallaxMotion(reducedMotion);

  motionController.cleanup = () => {
    cleanupReveal();
    cleanupDepth();
    cleanupParallax();
  };
};

const setProjectCardExpanded = (card, expanded) => {
  const toggle = card.querySelector("[data-project-toggle]");
  const toggleText = card.querySelector("[data-project-toggle-text]");

  if (!toggle || !toggleText) {
    return;
  }

  card.classList.toggle("is-expanded", expanded);
  toggle.setAttribute("aria-expanded", String(expanded));
  toggleText.textContent = expanded ? toggle.dataset.closeLabel : toggle.dataset.openLabel;
};

const setupProjectCardInteractions = () => {
  const cards = [...root.querySelectorAll("[data-project-card]")];

  cards.forEach((card) => {
    setProjectCardExpanded(card, false);

    const toggle = card.querySelector("[data-project-toggle]");

    if (!toggle) {
      return;
    }

    toggle.addEventListener("click", () => {
      const shouldExpand = !card.classList.contains("is-expanded");

      cards.forEach((candidate) => {
        setProjectCardExpanded(candidate, shouldExpand && candidate === card);
      });
    });
  });
};

const renderPage = () => {
  const content = siteContent[activeLanguage];

  updateDocumentMetadata(content);

  root.innerHTML = `
    <div class="page-shell">
      <div class="ambient ambient-a"></div>
      <div class="ambient ambient-b"></div>
      <div class="grid-overlay"></div>

      <main class="layout">
        <header class="glass-panel topbar reveal">
          <p class="brand">${content.identity.name}</p>

          <div class="topbar-actions">
            <div class="language-toggle" aria-label="${content.navigation.languageLabel}">
              ${renderLanguageToggle()}
            </div>

            <a class="pill-link pill-link-solid motion-button" href="mailto:${content.contact.email}">${content.navigation.contactCta}</a>
          </div>
        </header>

        ${activeLanguage === "zh" ? renderChineseHero(content) : renderEnglishHero(content)}

        <section class="section about-section" id="about">
          <div class="reveal">
            <p class="eyebrow">${content.sections.about}</p>
            <h2>${content.about.heading}</h2>
          </div>
          <div class="glass-panel about-card reveal reveal-delay-1 motion-depth">
            <p>${content.about.body}</p>
          </div>
        </section>

        <section class="section services-section" id="services">
          <div class="services-copy">
            <div class="reveal">
              <p class="eyebrow">${content.sections.services}</p>
              <h2>${content.services.heading}</h2>
            </div>

            <div class="service-list">
              ${content.services.items
                .map(
                  (service, index) => `
                    <article class="glass-panel service-card reveal motion-depth" style="--reveal-delay: ${index * 120}ms;">
                      <h3>${service.title}</h3>
                      <p>${service.description}</p>
                    </article>
                  `,
                )
                .join("")}
            </div>
          </div>

          <aside class="glass-panel skills-card reveal reveal-delay-1 motion-depth">
            <p class="card-eyebrow">${content.services.stackEyebrow}</p>
            <div class="skills-cloud">
              ${content.skills
                .map(
                  (skill) => `
                    <span class="skill-pill">${skill}</span>
                  `,
                )
                .join("")}
            </div>
          </aside>
        </section>

        <section class="section projects-section" id="projects">
          <div class="reveal">
            <p class="eyebrow">${content.sections.projects}</p>
            <h2>${content.projects.heading}</h2>
          </div>

          <div class="projects-grid">
            ${content.projects.items
              .map((project, index) => renderProjectCard(content, project, index))
              .join("")}
          </div>
        </section>

        <section class="section signal-section">
          <div class="reveal">
            <p class="eyebrow">${content.credibility.heading}</p>
          </div>
          <div class="signal-grid">
            ${renderSignalCards(content.credibility.items)}
          </div>
        </section>

        <section class="section open-section" id="open-to">
          <div class="reveal">
            <p class="eyebrow">${content.sections.openTo}</p>
            <h2>${content.openTo.heading}</h2>
            <p class="lede">${content.openTo.intro}</p>
          </div>

          <div class="open-grid">
            ${renderOpenToCards(content.openTo.items)}
          </div>
        </section>

        <section class="glass-panel section contact-section reveal" id="contact">
          <div>
            <p class="eyebrow">${content.sections.contact}</p>
            <h2>${content.contact.heading}</h2>
            <p class="lede contact-copy">${content.contact.body}</p>
          </div>

          <div class="contact-actions">
            <a class="button button-light motion-button" href="mailto:${content.contact.email}">${content.contact.email}</a>
            <div class="contact-links">
              ${renderLinks(content.contact.links)}
            </div>
          </div>
        </section>
      </main>
    </div>
  `;

  root.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextLanguage = button.getAttribute("data-language");

      if (!nextLanguage || nextLanguage === activeLanguage || !siteContent[nextLanguage]) {
        return;
      }

      activeLanguage = nextLanguage;
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, activeLanguage);
      renderPage();
    });
  });

  setupProjectCardInteractions();
  setupMotion();
};

prefersReducedMotionQuery.addEventListener("change", () => {
  setupMotion();
});

renderPage();
