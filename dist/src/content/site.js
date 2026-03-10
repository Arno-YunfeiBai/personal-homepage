export const defaultLanguage = "en";

export const languages = [
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" },
];

export const siteContent = {
  en: {
    meta: {
      title: "Arno Bai | Systems-Focused Student Builder",
      description:
        "Arno Bai is a University of Sydney Advanced Computing student seeking software, backend, systems, and AI-adjacent internships across ambitious teams.",
    },
    navigation: {
      contactCta: "Discuss internships",
      languageLabel: "Language",
    },
    hero: {
      eyebrow: "Advanced Computing Student / Systems Builder / Startup Operator",
      intro: "I build reliable systems, ship product fast, and take ownership early.",
      shortBio:
        "I’m Arno Bai, a University of Sydney Advanced Computing student graduating in 2026. I’m looking for software engineering, backend, systems, and AI-adjacent internships where strong technical judgment, speed, and real ownership matter.",
      primaryCta: "View selected work",
      secondaryCta: "Contact Arno",
      snapshotLabel: "Now",
      status: "Actively seeking internships",
      snapshotEyebrow: "Why teams reach out",
      snapshotNote:
        "My edge is the crossover: systems depth, full-stack execution, startup operating experience, and the ability to use AI tooling pragmatically to move faster without losing rigor.",
      quickFacts: [
        { label: "University", value: "Advanced Computing at the University of Sydney" },
        { label: "Leadership", value: "COO at Little Bird Intelligent Learning" },
        { label: "Founder Signal", value: "Former FliFli co-founder / CEO" },
      ],
    },
    sections: {
      about: "Positioning",
      services: "How I Work",
      openTo: "Open To",
      projects: "Selected Projects",
      contact: "Contact",
    },
    identity: {
      name: "Arno Bai / 白云飞",
      title: "Student builder for systems-heavy products and ambitious teams",
      availability:
        "Open to software engineering, backend, systems, and AI-builder internships",
      location: "Sydney, Australia",
    },
    stats: [
      { value: "USYD", label: "Advanced Computing, Computer Science major" },
      { value: "2026", label: "Expected graduation" },
      { value: "Strong", label: "GPA and academic standing" },
      { value: "EN / ZH", label: "Works across English and Mandarin" },
    ],
    about: {
      heading: "Intern-ready for teams that want more than a narrow IC profile.",
      body: "I’m most useful where product ambition meets technical complexity. I’ve worked across startup building, education operations, and hands-on engineering, which means I can reason about architecture, ship features, handle ambiguity, and keep momentum when a project is still messy. I naturally gravitate toward backend and systems problems, but I also care deeply about product judgment, execution quality, and building things that survive real use.",
    },
    credibility: {
      heading: "Signal",
      items: [
        {
          title: "Academic base",
          detail:
            "University of Sydney, Advanced Computing, expected 2026 graduation with strong academic performance.",
        },
        {
          title: "Ownership",
          detail:
            "Led in both startup and operating roles, including COO responsibility and founder-level product direction.",
        },
        {
          title: "AI exposure",
          detail:
            "Comfortable with AI-assisted workflows, Azure AI fundamentals exposure, and NVIDIA / Coursera AI infrastructure and operations fundamentals.",
        },
        {
          title: "Communication",
          detail:
            "Able to work in English and Mandarin across technical, product, and stakeholder contexts.",
        },
      ],
    },
    services: {
      heading: "The value I bring is technical range plus execution pressure tolerance.",
      stackEyebrow: "Core Themes",
      items: [
        {
          title: "Systems and backend judgment",
          description:
            "I’m drawn to concurrency, POSIX, multithreaded C, backend architecture, and secure system design. I like problems where correctness, coordination, and operational discipline matter.",
        },
        {
          title: "Product-minded engineering",
          description:
            "I do not treat engineering as isolated implementation. I think in terms of product tradeoffs, user trust, iteration speed, and what actually makes a feature useful.",
        },
        {
          title: "Ownership under ambiguity",
          description:
            "Because I’ve worked in startup and operations environments, I’m comfortable stepping into unclear situations, structuring the work, and driving toward a concrete outcome.",
        },
      ],
    },
    skills: [
      "Systems Programming",
      "Backend Engineering",
      "Concurrency",
      "POSIX",
      "Multithreaded C",
      "Secure Systems",
      "Full-Stack Delivery",
      "Product Thinking",
      "Technical Leadership",
      "AI-Assisted Workflows",
      "Azure AI Fundamentals Exposure",
      "AI Infrastructure Fundamentals",
    ],
    openTo: {
      heading: "The teams and roles I’m targeting.",
      intro:
        "I’m specifically looking for environments where I can contribute as a high-agency builder, not just fill a narrow internship seat.",
      items: [
        {
          title: "Software / backend / systems internships",
          description:
            "Teams building infrastructure, platform capabilities, developer tooling, security-sensitive software, or core backend systems.",
        },
        {
          title: "Product-minded technical roles",
          description:
            "Roles where engineers are expected to care about product direction, execution velocity, and why the system exists, not only how it is implemented.",
        },
        {
          title: "Startups and ambitious technical teams",
          description:
            "High-ownership environments where people move quickly, think clearly, and value builders who can operate across code, product, and ambiguity.",
        },
        {
          title: "AI-related builder environments",
          description:
            "Applied AI, AI tooling, or AI-enabled product teams where pragmatic engineering, workflow acceleration, and technical curiosity are useful.",
        },
      ],
    },
    projects: {
      heading:
        "Each project below shows how I approach hard constraints, not just what I built.",
      caseStudyLabel: "Case Study",
      detailLabel: "Project Notes",
      openDetailsLabel: "Open case study",
      closeDetailsLabel: "Hide details",
      challengeLabel: "Hard problem",
      ownershipLabel: "What I handled",
      signalLabel: "Why it matters",
      items: [
        {
          name: "FliFli",
          summary:
            "An Australian second-hand trading platform that forced me to think beyond feature delivery into marketplace trust, execution sequencing, and early-stage product discipline.",
          challenge:
            "The hard part was not just shipping pages. It was creating enough clarity around trust, supply-demand balance, and user experience for a marketplace idea to feel credible.",
          ownership:
            "As co-founder and CEO, I drove product direction, team coordination, and platform execution while translating a broad startup idea into concrete workstreams.",
          signal:
            "This is the clearest signal that I can operate with founder-level ownership and understand how technical decisions connect to business reality.",
          tags: ["Startup", "Marketplace", "Execution"],
        },
        {
          name: "Real-Time Collaborative Markdown Editor",
          summary:
            "A collaborative editor built in C with POSIX-oriented systems thinking, focused on synchronization and real-time coordination rather than superficial interface polish.",
          challenge:
            "Concurrent editing is fundamentally a coordination problem: multiple users, shared state, ordering, and conflict handling under real-time pressure.",
          ownership:
            "I handled the systems design, synchronization logic, and low-level coordination required to make the editor behave predictably in a multi-user environment.",
          signal:
            "It demonstrates that I’m comfortable working close to the system, reasoning about concurrency, and choosing implementation tradeoffs deliberately.",
          tags: ["C", "POSIX", "Concurrency"],
        },
        {
          name: "Secure Communication System",
          summary:
            "A secure communication project built around encryption, backend discipline, and reliability, with an emphasis on designing for trust instead of bolting security on later.",
          challenge:
            "Security work is unforgiving. The difficult part was keeping the design coherent across encryption, protocol behavior, and backend structure so the system stayed trustworthy as a whole.",
          ownership:
            "I designed and implemented the core communication flow with attention to end-to-end encryption, system integrity, and a backend structure that supported dependable behavior.",
          signal:
            "This project highlights security-minded engineering, careful system design, and the willingness to solve problems where correctness matters more than surface-level speed.",
          tags: ["Security", "Backend", "Encryption"],
        },
      ],
    },
    contact: {
      heading:
        "If you’re hiring interns for backend, systems, software engineering, or AI-adjacent product teams, I’m ready for a serious conversation.",
      body:
        "The best fit is a team that values ownership, technical depth, and people who can contribute across engineering and product context. Email is the fastest way to reach me.",
      email: "sirobai0122@gmail.com",
      links: [
        { label: "Email", href: "mailto:sirobai0122@gmail.com" },
        { label: "GitHub", href: "https://github.com/Arno-YunfeiBai" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/yunfei-bai-788812309" },
      ],
    },
  },
  zh: {
    meta: {
      title: "Arno Bai | 系统方向学生 Builder",
      description:
        "白云飞的个人主页。悉尼大学 Advanced Computing 学生，正在寻找软件工程、后端、系统与 AI 相关方向实习机会。",
    },
    navigation: {
      contactCta: "联系实习机会",
      languageLabel: "语言",
    },
    hero: {
      eyebrow: "Advanced Computing 学生 / 系统方向 Builder / 创业型执行者",
      intro: "我能做扎实系统，也能在高要求团队里把产品快速推进到位。",
      shortBio:
        "我是白云飞，悉尼大学 Advanced Computing 在读，预计 2026 年毕业。目前重点寻找软件工程、后端、系统方向，以及 AI 相关 builder 环境的实习机会。",
      statement:
        "我适合那些希望实习生不仅会写代码，还能理解系统、承担 ownership、并把事情真正往前推进的团队。",
      rhythmTitle: "我能提供的，不只是单点开发能力",
      rhythmLines: [
        "既能深入并发、POSIX、多线程 C、后端架构这类偏底层问题，也能理解产品为什么要这样做。",
        "做过创业、带过团队、扛过运营压力，遇到模糊问题时更习惯先拆清楚，再把执行拉起来。",
        "会用 AI 工具提升分析、写作、原型和工作流效率，但不会把 AI 当成替代严谨思考的捷径。",
      ],
      primaryCta: "查看项目",
      secondaryCta: "联系我",
      snapshotLabel: "当前状态",
      status: "正在积极寻找实习",
      snapshotEyebrow: "为什么值得聊",
      snapshotNote:
        "我的辨识度在于交叉能力: 有系统和后端深度，也有创业执行感、产品判断，以及把 AI 工具真正用进工作流的实践习惯。",
      highlightLabel: "定位一句话",
      highlightValue: "适合高标准团队的学生 Builder: 系统思维、产品感和执行 ownership 同时在线。",
      quickFacts: [
        { label: "学校背景", value: "悉尼大学 Advanced Computing" },
        { label: "当前角色", value: "Little Bird Intelligent Learning COO" },
        { label: "创业经历", value: "曾任 FliFli 联合创始人 / CEO" },
      ],
    },
    sections: {
      about: "定位",
      services: "我如何工作",
      openTo: "求职方向",
      projects: "精选项目",
      contact: "联系",
    },
    identity: {
      name: "白云飞 / Arno Bai",
      title: "面向系统型产品与高要求团队的学生 Builder",
      availability: "开放软件工程、后端、系统和 AI 相关实习机会",
      location: "澳大利亚悉尼",
    },
    stats: [
      { value: "USYD", label: "Advanced Computing / Computer Science" },
      { value: "2026", label: "预计毕业" },
      { value: "优秀", label: "GPA 与学术表现" },
      { value: "中 / EN", label: "可在中文和英文环境协作" },
    ],
    about: {
      heading: "如果团队想找的是有潜力接更大责任的实习生，我会更匹配。",
      body: "我最擅长的位置，是产品目标明确但实现过程复杂、节奏又快的环境。我做过创业，也做过教育业务运营，同时持续做工程和系统相关项目，所以我不是只会接需求做实现。我更习惯从系统结构、产品取舍、执行路径和团队节奏一起思考，尤其适合需要判断力和推进力并存的角色。",
    },
    credibility: {
      heading: "背景与优势",
      items: [
        {
          title: "学术背景",
          detail:
            "悉尼大学 Advanced Computing，在读 Computer Science，预计 2026 年毕业，学术表现稳健。",
        },
        {
          title: "推进与担当",
          detail:
            "既做过创业项目联合创始人，也在业务场景里承担 COO 级别推进责任，不怕模糊和压力。",
        },
        {
          title: "AI 相关基础",
          detail:
            "有 AI 辅助工作流实践，也接触过 Azure AI fundamentals 与 NVIDIA / Coursera 的 AI 基础设施和运维基础内容。",
        },
        {
          title: "沟通能力",
          detail:
            "中英文双语，可在技术、产品、业务和对外沟通场景中切换。",
        },
      ],
    },
    services: {
      heading: "我能带来的价值，是技术判断力和执行推进力同时在线。",
      stackEyebrow: "核心方向",
      items: [
        {
          title: "系统与后端判断力",
          description:
            "持续关注并发、POSIX、多线程 C、后端架构和安全系统设计。我对那些要求稳定性、正确性和结构感的问题有长期兴趣。",
        },
        {
          title: "有产品感的工程执行",
          description:
            "我不会把开发只看成实现任务。会同时考虑用户体验、功能边界、迭代速度和技术投入是否真正值得。",
        },
        {
          title: "能扛事的 ownership",
          description:
            "因为经历过创业和运营场景，我对不确定性比较适应。问题不够清楚时，我更倾向于主动拆解、补结构、把事情推进到结果。",
        },
      ],
    },
    skills: [
      "系统编程",
      "后端工程",
      "并发",
      "POSIX",
      "多线程 C",
      "安全系统",
      "全栈交付",
      "产品判断",
      "技术领导力",
      "AI 辅助工作流",
      "Azure AI 基础认知",
      "AI 基础设施基础",
    ],
    openTo: {
      heading: "我现在最想加入的团队和机会。",
      intro:
        "我希望进入的是能让我真正参与核心问题、而不是只做外围任务的实习环境。",
      items: [
        {
          title: "软件工程 / 后端 / 系统方向实习",
          description:
            "基础设施、平台能力、开发者工具、安全敏感系统、核心后端服务等方向都很匹配。",
        },
        {
          title: "有产品参与感的技术岗位",
          description:
            "希望工程师不仅写代码，还能参与产品判断、迭代优先级和实际用户价值的讨论。",
        },
        {
          title: "创业公司或高要求技术团队",
          description:
            "偏好节奏快、标准高、ownership 强的环境，尤其适合愿意让年轻 builder 真正扛事的团队。",
        },
        {
          title: "AI 相关 builder 环境",
          description:
            "包括应用型 AI、AI tooling、AI 增强工作流或与模型基础设施相邻的产品和工程团队。",
        },
      ],
    },
    projects: {
      heading: "下面这些项目更能说明我如何处理难问题，而不只是列做过什么。",
      caseStudyLabel: "案例",
      detailLabel: "项目拆解",
      openDetailsLabel: "展开案例",
      closeDetailsLabel: "收起细节",
      challengeLabel: "难点是什么",
      ownershipLabel: "我负责什么",
      signalLabel: "这说明什么",
      items: [
        {
          name: "FliFli",
          summary:
            "澳洲二手交易平台项目。它真正锻炼我的，不只是做产品，而是如何让一个早期平台在用户信任、执行节奏和供需平衡之间站得住。",
          challenge:
            "难点并不只是把功能做出来，而是如何让一个交易平台在早期就具备可信度，避免停留在“有想法但没有产品感”的阶段。",
          ownership:
            "作为联合创始人和 CEO，我负责产品方向、团队推进和平台落地，把宽泛的创业想法拆成能执行的产品与协作路径。",
          signal:
            "它说明我可以带着 founder 级 ownership 做事，也理解技术和产品决策最终要对业务结果负责。",
          tags: ["创业", "交易平台", "执行力"],
        },
        {
          name: "实时协作文档编辑器",
          summary:
            "基于 C 和 POSIX 思路完成的协作式 Markdown 编辑器，重点不是界面，而是多人实时协作背后的同步与协调问题。",
          challenge:
            "并发编辑本质上是共享状态和顺序控制问题，需要处理多用户同时修改、状态一致性以及实时响应之间的平衡。",
          ownership:
            "我负责系统设计、同步逻辑和底层协调实现，让编辑器在多用户环境下保持可预测、可理解的行为。",
          signal:
            "它体现了我愿意往底层走，能认真处理并发问题，也会在实现上权衡复杂度、稳定性和可维护性。",
          tags: ["C", "POSIX", "并发"],
        },
        {
          name: "安全通信系统",
          summary:
            "围绕加密、后端结构和整体可靠性设计实现的安全通信项目，重点是从一开始就把“可信”作为核心约束。",
          challenge:
            "安全系统最难的是整体一致性。加密、协议和后端结构如果彼此脱节，系统就很容易只剩表面安全感。",
          ownership:
            "我负责核心通信流程设计与实现，重点关注端到端加密、系统完整性，以及后端结构能否支撑稳定可信的行为。",
          signal:
            "这个项目说明我会认真对待 correctness 和系统边界，也愿意处理那些不能只追求表面速度的工程问题。",
          tags: ["安全", "后端", "加密"],
        },
      ],
    },
    contact: {
      heading:
        "如果你正在招软件工程、后端、系统方向，或 AI 相关产品团队的实习生，欢迎直接联系我。",
      body:
        "最适合我的团队，是那些既看技术质量，也看 ownership、节奏感和产品判断的团队。邮箱联系最快。",
      email: "sirobai0122@gmail.com",
      links: [
        { label: "邮箱", href: "mailto:sirobai0122@gmail.com" },
        { label: "GitHub", href: "https://github.com/Arno-YunfeiBai" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/yunfei-bai-788812309" },
      ],
    },
  },
};
