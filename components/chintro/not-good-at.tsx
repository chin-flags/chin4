import SubSectionHeader from "../ui/sub-section-header";

export default function NotGoodAt() {
  const weaknesses = [
    {
      title: "Finishing side projects",
      description: "Finishing a side project once the fun part is over",
    },
    {
      title: "Asking for help",
      description:
        "Not because I don't want to collaborate. I just like banging my head on the wall first. It's part of the process.",
    },
    {
      title: "Meetings",
      description:
        "I don't hate them. I just don't thrive in them. Flow is where I do my best work, and unnnecessary meetings break that.",
    },
  ];

  return (
    <section className="mb-16 max-w-4xl mx-auto">
      <SubSectionHeader title="I'm Not So Good At" />

      <div className="space-y-3">
        {weaknesses.map((weakness, index) => (
          <div
            key={index}
            className="group flex items-start gap-1 p-3 hover:bg-accent/5 rounded-lg transition-colors duration-300"
          >
            <div>
              <h3 className="text-lg sm:text-xl text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                {weakness.title}
              </h3>
              <p className="text-muted-foreground text-md sm:text-lg leading-relaxed">
                {weakness.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
