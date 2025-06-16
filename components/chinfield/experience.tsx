export default function Experience() {
  const experiences = [
    {
      title: "Developer Relations Engineer – MetaMask Delegation Toolkit (Contract)",
      company: "Consensys – Sri Lanka (Remote)",
      period: "Oct 2024 – Present",
      description: [
        "Helped developers navigate the Delegation Toolkit – from answering 'How do I?' to 'Why isn't this working?'",
        "Built a CLI tool and example repos – because if you can't make it easy, why bother?",
        "Hosted livestreams, workshops, and hackathons – keeping the community curious and engaged.",
        "Worked closely with the engineering team to suggest SDK improvements and smooth out the rough edges."
      ]
    },
    {
      title: "Software Engineer – Rapid Application Development (RAD)",
      company: "Consensys – Sri Lanka (Remote)",
      period: "Jan 2023 – Oct 2024",
      description: [
        "Helped bridge the gap between developer experience and product vision across multiple teams (Linea, MetaMask SDK, Phosphor).",
        "Created demos, example projects, and documentation to make developers' lives a little easier (and a lot less frustrating)."
      ]
    },
    {
      title: "Fullstack Software Engineer (Contract, part-time)",
      company: "Sircular – Sri Lanka (Remote)",
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
      period: "Feb 2020 – March 2022",
      description: [
        "Built full-stack web apps and backend services for clients across industries (and learned a lot of random stuff along the way)."
      ]
    }
  ];

  return (
    <section className="mb-16 max-w-4xl mx-auto">
      <h2 className="text-4xl font-semibold text-foreground mb-6">Experience</h2>
      
      <div className="space-y-3">
        {experiences.map((experience, index) => (
          <div 
            key={index}
            className="group flex items-start gap-1 p-3 hover:bg-accent/5 rounded-lg transition-colors duration-300"
          >
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-3xl text-foreground group-hover:text-primary transition-colors duration-300">
                  {experience.title}
                </h3>
                <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                  {experience.period}
                </span>
              </div>
              {experience.company && (
                <p className="text-lg text-muted-foreground mb-3">
                  {experience.company}
                </p>
              )}
              <ul className="space-y-2">
                {experience.description.map((item, idx) => (
                  <li key={idx} className="text-muted-foreground text-lg leading-relaxed">
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