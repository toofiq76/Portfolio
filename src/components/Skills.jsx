import SkillCategory from './SkillCategory'

function Skills() {
  const skillCategories = [
    {
      id: 1,
      icon: "fas fa-server",
      title: "Backend",
      skills: [
        "Node.js & Express",
        "MongoDB (Aggregations)",
        "RESTful APIs",
        "JWT Auth & Security"
      ]
    },
    {
      id: 2,
      icon: "fas fa-laptop-code",
      title: "Frontend",
      skills: [
        "React.js (Hooks, Context)",
        "Redux Toolkit",
        "Tailwind CSS",
        "HTML5 & CSS3"
      ]
    },
    {
      id: 3,
      icon: "fas fa-tools",
      title: "Tools",
      skills: [
        "Git & GitHub",
        "Postman API Testing",
        "VS Code Debugging",
        "Docker (Basics)"
      ]
    }
  ]

  return (
    <section id="skills" className="section bg-darker">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-container">
        {skillCategories.map(category => (
          <SkillCategory key={category.id} category={category} />
        ))}
      </div>
    </section>
  )
}

export default Skills
