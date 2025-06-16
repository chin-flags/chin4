import SubSectionHeader from "@/components/ui/sub-section-header";

export default function GoodAt() {
  const skills = [
    {
      title: "Building Full stack web apps",
      description: "I am fairly good at building full stack webapps, React, node"
    },
    {
      title: "Dealing with LLMs",
      description: "I usually say thank you when a LLM responds to me with good answers, even though we assume that they are soulless and gets grumpy when they don't cooperate"
    },
    {
      title: "Blockchain, web3 and other related stuff",
      description: "I build web3 apps and navigate the decentralized universe"
    },
    {
      title: "Fixing leaking pipes, including gas and water",
      description: "Carried this skill from my previous job. I had to do those stuff when we didn't have idle technicians and customer (often a hospital) says its urgent and threatens to sue us. I still do these fixes for a non profit organisation called \"Home\""
    },
    {
      title: "Raising my 3-year old daughter",
      description: "Our home's junior dev, whose job hasn't been replaced by AI yet, likely won't be, because no LLM is trained to handle the infinite \"but why?\" loop, and who tests LLMs with prompts like \"asfuhgf kjsfskajfh\""
    }
  ];

  return (
    <section className="mb-16 max-w-4xl mx-auto">
      <SubSectionHeader 
        title="I'm Usually Good At"
      />
      
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="group flex items-start gap-1 p-3 hover:bg-accent/5 rounded-lg transition-colors duration-300"
          >
            <div>
              <h3 className="text-2xl text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                {skill.title}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {skill.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
