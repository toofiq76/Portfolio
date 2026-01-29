import ProjectCard from './ProjectCard'

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Simple Blog App backend",
      gradient: "linear-gradient(45deg, #1d4ed8, #1e40af)",
      tech: ["Node.js", "Express", "MongoDB", "MVC", "CRUD", "JS"],
      description: "This is a Simple Blog Backend API built with Node.js, Express and MongoDB. Purpose: A RESTful API for managing blog posts with full CRUD functionality.",
      details: "Framework: Express.js\nDatabase: MongoDB (via Mongoose ODM)\nLanguage: Node.js (CommonJS)",
      codeUrl: "https://github.com/toofiq76/Simple_Blog_App_Backend",
      demoUrl: "#"
    },
    {
      id: 2,
      title: "AuthFlow",
      gradient: "linear-gradient(45deg, #059669, #047857)",
      tech: ["Express.js", "Node.js", "Passport.js"],
      description: "Full-stack authentication system with local registration/login and OAuth 2.0 integration (Google & Facebook). Features secure password hashing with bcryptjs, session management, and protected routes.",
      details: "",
      codeUrl: "https://github.com/toofiq76/Passport_Auth",
      demoUrl: "http://localhost:3000"
    },
    {
      id: 3,
      title: "Project sample",
      gradient: "linear-gradient(45deg, #7c3aed, #6d28d9)",
      tech: ["Node.js", "MongoDB", "React"],
      description: "Project sample description goes here.",
      details: "",
      codeUrl: "#",
      demoUrl: "#"
    }
  ]

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
