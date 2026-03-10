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
    <div class="glass-panel portrait-card">
      <img class="portrait-image" src="./src/assets/portrait.jpg" alt="Portrait of ${content.identity.name}" />
      <div class="portrait-glow"></div>
    </div>

    <div class="glass-panel snapshot">
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
        <article class="glass-panel signal-card reveal" style="animation-delay: ${index * 90}ms;">
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
        <article class="glass-panel open-card reveal" style="animation-delay: ${index * 100}ms;">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `,
    )
    .join("");

const renderProjectDetails = (content, project) => `
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
`;

const renderEnglishHero = (content) => `
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
          <a class="button button-primary" href="#projects">${content.hero.primaryCta}</a>
          <a class="button button-secondary" href="#contact">${content.hero.secondaryCta}</a>
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

        ${activeLanguage === "zh" ? renderChineseHero(content) : renderEnglishHero(content)}

        <section class="section about-section" id="about">
          <div class="reveal">
            <p class="eyebrow">${content.sections.about}</p>
            <h2>${content.about.heading}</h2>
          </div>
          <div class="glass-panel about-card reveal reveal-delay-1">
            <p>${content.about.body}</p>
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
                    <p class="project-summary">${project.summary}</p>
                    ${renderProjectDetails(content, project)}
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
            <p class="lede contact-copy">${content.contact.body}</p>
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
