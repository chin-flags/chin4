export default function Experience() {
  const experiences = [
    {
      title: "Developer Relations Engineer ( Contract ) – MetaMask Delegation Toolkit ",
      company: "Consensys – Sri Lanka (Remote)",
      companyLink: "https://consensys.io",
      period: "Oct 2024 – Present",
      description: [
        "Helped developers navigate the Delegation Toolkit from answering 'How do I?' to 'Why isn't this working?'",
        "Built a CLI tool and example repos.",
        "Hosted livestreams, workshops, and hackathons.",
        "Worked closely with the engineering team to suggest SDK improvements and smooth out the rough edges."
      ]
    },
    {
      title: "Software Engineer ( Contract ) – Rapid Application Development (RAD)",
      company: "Consensys – Sri Lanka (Remote)",
      companyLink: "https://consensys.io",
      period: "Jan 2023 – Oct 2024",
      description: [
        "Helped bridge the gap between developer experience and product vision across multiple teams (Linea, MetaMask SDK, Phosphor).",
        "Created demos, example projects, and documentation to make developers' lives a little easier (and a lot less frustrating)."
      ]
    },
    {
      title: "Fullstack Software Engineer ( Contract )",
      company: "Sircular – Sri Lanka (Remote)",
      companyLink: "https://sircular.ai",
      period: "March 2022 – Feb 2025",
      description: [
        "Wore multiple hats: built frontend UIs, backend APIs, and everything in between.",
        "Worked closely with designers and PMs to translate ideas into working features.",
        "Made sure the app didn't catch fire when users did *unexpected* things."
      ]
    },
    {
      title: "Freelance Software Developer",
      company: "",
      companyLink: "",
      period: "Feb 2020 – March 2022",
      description: [
        "Built full-stack web apps and backend services for clients across industries (and learned a lot of random stuff along the way)."
      ]
    }
  ];

  return (
    <section className="mb-16 max-w-4xl mx-auto">
      <div className="space-y-3">
        {experiences.map((experience, index) => (
          <div 
            key={index}
            className="group flex items-start gap-1 p-3 pl-0 hover:bg-accent/5 rounded-lg transition-colors duration-300"
          >
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {experience.title}
                </h3>
              </div>
              {experience.company && (
                <p className="text-sm sm:text-md text-muted-foreground mb-1">
                  {experience.companyLink ? (
                    <a 
                      href={experience.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-primary transition-colors duration-300 border-b border-transparent hover:border-primary/50"
                    >
                      {experience.company}
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="14" 
                        height="14" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="opacity-50 group-hover:opacity-100 transition-opacity"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  ) : (
                    experience.company
                  )}
                </p>
              )}
              <p className="text-md sm:text-lg text-muted-foreground mb-3">
                {experience.period}
              </p>
              <ul className="space-y-2">
                {experience.description.map((item, idx) => (
                  <li key={idx} className="text-muted-foreground text-lg sm:text-lg leading-relaxed">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
