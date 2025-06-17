import { Card, CardContent } from "@/components/ui/card";

export default function Interests() {
  const skills = [
    {
      title: "Building Full stack web apps",
      description:
        "I am fairly good at building full stack webapps (like this one) I don't have a fixed stack but these days its Next, node, tailwind, etc.",
    },
    {
      title: "Creative problem solving (or making)",
      description:
        "I look for different ways to fix things when the usual ways don't work. I enjoy finding creative ways through tight spots.",
    },
    {
      title: "Dealing with LLMs",
      description:
        "I usually say thank you when a LLM responds to me with good answers, even though we assume that they are soulless. Further I build LLM apps for fun",
    },
    {
      title: "Blockchain, web3 and other related stuff",
      description: "I build web3 apps and navigate the decentralized world.",
    },
    {
      title: "Fixing leaking pipes, including gas and water",
      description:
        'Carried this skill from my previous job. I still do these fixes for a non profit organisation called "Home"',
    },
    {
      title: "Raising my 3-year old daughter",
      description:
        'Our home\'s junior dev, whose job hasn\'t been replaced by AI yet, likely won\'t be, because no LLM is trained to handle the infinite "but why?" loop, and who tests LLMs with prompts like "asfuhgf kjsfskajfh"',
    },
  ];

  return (
    <section className="mb-16 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <Card key={index} className="h-full">
            <CardContent className="p-6 h-full flex flex-col">
              <h3 className="text-lg sm:text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {skill.title}
              </h3>
              <p className="text-muted-foreground text-md sm:text-lg leading-relaxed flex-grow">
                {skill.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
