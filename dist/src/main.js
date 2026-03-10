import {
  defaultLanguage,
  languages,
  siteContent,
} from "./content/site.js";

const LANGUAGE_STORAGE_KEY = "personal-homepage-language";
const root = document.querySelector("#root");

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
        <a class="pill-link" href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>
      `,
    )
    .join("");

const renderLanguageToggle = () =>
  languages
    .map(
      (language) => `
        <button
          class="language-option${language.code === activeLanguage ? " is-active" : ""}"
          type="button"
          data-language="${language.code}"
          aria-pressed="${language.code === activeLanguage}"
        >
          ${language.label}
        </button>
      `,
    )
    .join("");

const updateDocumentMetadata = (content) => {
  document.documentElement.lang = activeLanguage === "zh" ? "zh-CN" : "en";
  document.title = content.meta.title;

  const descriptionTag = document.querySelector('meta[name="description"]');

  if (descriptionTag) {
    descriptionTag.setAttribute("content", content.meta.description);
  }
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

            <a class="pill-link pill-link-solid" href="mailto:${content.contact.email}">${content.navigation.contactCta}</a>
          </div>
        </header>

        <section class="hero">
          <div class="hero-copy reveal">
            <p class="eyebrow">${content.hero.eyebrow}</p>
            <h1><span class="text-gradient">${content.hero.intro}</span></h1>
            <p class="lede">${content.hero.shortBio}</p>

            <div class="cta-row">
              <a class="button button-primary" href="#projects">${content.hero.primaryCta}</a>
              <a class="button button-secondary" href="#contact">${content.hero.secondaryCta}</a>
            </div>

            <div class="meta-row">
              <span class="meta-pill meta-pill-accent">${content.identity.title}</span>
              <span class="meta-pill">${content.identity.location}</span>
              <span class="meta-pill">${content.identity.availability}</span>
            </div>
          </div>

          <aside class="glass-panel snapshot reveal reveal-delay-1">
            <div class="snapshot-head">
              <span>${content.hero.snapshotLabel}</span>
              <span class="status"><span class="status-dot"></span>${content.hero.status}</span>
            </div>

            <div class="snapshot-card">
              <p class="card-eyebrow">${content.hero.snapshotEyebrow}</p>
              <div class="stats-list">
                ${content.stats
                  .map(
                    (stat) => `
                      <div class="stat-row">
                        <p class="stat-value">${stat.value}</p>
                        <p class="stat-label">${stat.label}</p>
                      </div>
                    `,
                  )
                  .join("")}
              </div>
            </div>

            <p class="snapshot-note">
              ${content.hero.snapshotNote}
            </p>
          </aside>
        </section>

        <section class="section about-section" id="about">
          <div class="reveal">
            <p class="eyebrow">${content.sections.about}</p>
            <h2>${content.about.heading}</h2>
          </div>
          <div class="glass-panel about-card reveal reveal-delay-1">
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
                    <article class="glass-panel service-card reveal" style="animation-delay: ${index * 120}ms;">
                      <h3>${service.title}</h3>
                      <p>${service.description}</p>
                    </article>
                  `,
                )
                .join("")}
            </div>
          </div>

          <aside class="glass-panel skills-card reveal reveal-delay-1">
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
              .map(
                (project, index) => `
                  <article class="glass-panel project-card reveal" style="animation-delay: ${index * 140}ms;">
                    <p class="card-eyebrow">${content.projects.caseStudyLabel} ${index + 1}</p>
                    <h3>${project.name}</h3>
                    <p>${project.summary}</p>
                    <div class="tag-row">${renderTags(project.tags)}</div>
                  </article>
                `,
              )
              .join("")}
          </div>
        </section>

        <section class="glass-panel section contact-section reveal" id="contact">
          <div>
            <p class="eyebrow">${content.sections.contact}</p>
            <h2>${content.contact.heading}</h2>
          </div>

          <div class="contact-actions">
            <a class="button button-light" href="mailto:${content.contact.email}">${content.contact.email}</a>
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
};

renderPage();
