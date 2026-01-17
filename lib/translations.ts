export type Language = "en" | "ptBR"

export const translations = {
  en: {
  nav: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    greeting: "Good afternoon",
    name: "Eloá Mello",
    title: "Software Developer",
    description: "",
    bio:
      "I'm a software developer with over two years of professional experience.",
    currentRole: "Currently, I work as a Software Developer at",
    company: "Mainô",
    companyDescription:
      "where I contribute to the evolution of a legacy ERP application, working closely with the operations team.",
    pastExperience: "",
    personalTime:
      "In my free time, I enjoy reading, watching movies and TV shows, and playing games.",
    cta: "Learn more about me",
  },
  experience: {
    title: "Experience",
    present: "Present",
    items: [
      {
        period: "NOV 2025 — Present",
        role: "Software Development Intern",
        company: "Mainô",
        description:
          "Work on the development and maintenance of a legacy ERP built with Ruby on Rails, implementing new features, improving existing flows, and contributing to code quality and standardization.",
        technologies: ["Ruby on Rails", "Vue"],
      },
      {
        period: "NOV 2023 — JAN 2025",
        role: "Software Developer",
        company: "Intelitrader",
        description:
          "Worked on the development of web and desktop applications using .NET, contributing to systems that support financial operations. Participated in client-allocated projects, performing analysis, implementation, and system optimization. Used SQL Server, PostgreSQL, and Redis for data storage and querying, along with tools such as Git (Bitbucket), Azure DevOps, and Jira for version control and project management. Also worked within agile teams, contributing to sprint planning. Additionally, gained experience with the FIX protocol, applying it to system integrations for financial data exchange.",
        technologies: [".NET", "C#"],
      },
      {
        period: "JAN 2023 — NOV 2023",
        role: "RPA Development Intern",
        company: "GoLiveTech",
        description:
          "As part of the Robotic Process Automation (RPA) and Robotic Automation as a Service (RAAS) team, worked on multiple automation projects using C#, Python, Selenium, and Git. Developed automation scripts in C# and Python leveraging Selenium, and used Git for version control and team collaboration.",
        technologies: ["C#", "Selenium"],
      },
    ],
    viewResume: "View Full Résumé",
  },
  projects: {
    title: "Projects",
    items: [
      {
        name: "Movie Catalog",
        description:
          "A Ruby on Rails application built as a technical test to manage a movie catalog. Allows users to add, edit, delete, and view their favorite movies, featuring smart search, categories, and tags.",
        technologies: ["Ruby on Rails", "Sidekiq"],
        link: "https://github.com/eloamello/catalogo-de-filmes",
        image: "catalogo-de-filmes.svg",
      },
    ],
    viewAll: "View All Projects",
  },
  contact: {
    title: "Contact",
    description:
      "If you'd like to talk about a project, collaboration, or just say hi, feel free to reach out.",
    cta: "Get in Touch",
    email: "eloamello126@gmail.com",
  },
  footer: {
    copyright: "Built with Next.js and Tailwind CSS.",
    credits: "Design inspired by Brittany Chiang.",
  },
  theme: {
    light: "Light",
    dark: "Dark",
    system: "System",
  },
  language: {
    switch: "Switch language",
  },
  },

  ptBR: {
    nav: {
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      contact: "Contato",
    },
    hero: {
      greeting: "Boa tarde",
      name: "Eloá Mello",
      title: "Desenvolvedora de Software",
      description:
        " ",
      bio:
        "Sou uma desenvolvedora de software com mais de dois anos de experiência profissional.",
      currentRole: "Atualmente, atuo como Desenvolvedora de Software na",
      company: "Mainô",
      companyDescription:
        "onde contribuo para a evolução de uma aplicação ERP legado, trabalhando junto do time de operações.",
      pastExperience:
        " ",
      personalTime:
        "No meu tempo livre, gosto de ler, assistir filmes e séries e jogar.",
      cta: "Saiba mais sobre mim",
    },
    experience: {
      title: "Experiência",
      present: "Presente",
      items: [
        {
          period: "NOV 2025 — Presente",
          role: "Estagiária em Desenvolvimento de Software",
          company: "Mainô",
          description:
            "Atuo no desenvolvimento e manutenção de um ERP legado em Ruby on Rails, implementando novas funcionalidades, melhorando fluxos existentes e contribuindo para a qualidade e padronização do código.",
          technologies: ["Ruby on Rails", "Vue"],
        },
        {
          period: "NOV 2023 — JAN 2025",
          role: "Desenvolvedora de Software",
          company: "Intelitrader",
          description:
            "Trabalhei no desenvolvimento de aplicações web e desktop utilizando .NET, contribuindo para a criação de sistemas voltados ao suporte de operações financeiras. Atuei em projetos alocada em cliente, desempenhando atividades de análise, implementação e otimização de sistemas. Utilizei SQL Server, PostgreSQL e Redis para armazenamento e consulta de informações, além de ferramentas como Git (Bitbucket), Azure DevOps e Jira para controle de versão e gestão de projetos. Também participei de equipes ágeis, contribuindo para o planejamento de sprints. Ademais, adquiri experiência com o protocolo FIX, aplicando-o na integração de sistemas para troca de informações financeiras.",
          technologies: [".Net", "C#"],
        },
        {
          period: "JAN 2023 — NOV 2023",
          role: "Estagiária em Desenvolvimento RPA",
          company: "GoLiveTech",
          description:
            "Como membro da equipe de Automação de Processos Robóticos (RPA) e Automação Robótica como Serviço (RAAS), tive a oportunidade de trabalhar em diversos projetos utilizando minhas habilidades em C#, Python, Selenium e Git. Utilizei C# e Python para desenvolver scripts que utilizavam o Selenium para automatizar esses projetos. Além disso, empregamos o Git para controle de versão e colaboração com a equipe.",
          technologies: ["C#", "Selenium"],
        },
      ],
      viewResume: "Ver Currículo Completo",
    },
    projects: {
      title: "",
      items: [
        {
          name: "Catálogo de Filmes",
          description:
            "Um catálogo de filmes feito em rails como teste técnicoAplicação Ruby on Rails para gerenciar um catálogo de filmes, permitindo aos usuários adicionar, editar, excluir e visualizar informações sobre seus filmes favoritos, com busca inteligente, categorias e tags.",
          technologies: ["Ruby on Rails", "Sidekiq"],
          link: "https://github.com/eloamello/catalogo-de-filmes",
          image: "catalogo-de-filmes.svg",
        }
      ],
      viewAll: "Ver Todos os Projetos",
    },
    contact: {
      title: "Contato",
      description:
        "Se quiser conversar sobre um projeto, colaboração ou apenas dizer oi, é só entrar em contato.",
      cta: "Entrar em Contato",
      email: "eloamello126@gmail.com",
    },
    footer: {
      copyright: "Construído com Next.js e Tailwind CSS.",
      credits: "Design inspirado por Brittany Chiang.",
    },
    theme: {
      light: "Claro",
      dark: "Escuro",
      system: "Sistema",
    },
    language: {
      switch: "Trocar idioma",
    },
  },
} as const

export type Translations = typeof translations.en