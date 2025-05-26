export default function Expertise() {
  const skills = ["React", "Next.js", "Node.js", "web3"];
  
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Expertise
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
} 