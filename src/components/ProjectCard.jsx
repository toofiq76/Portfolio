function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="card-image">
        <div className="placeholder-img" style={{ background: project.gradient }}></div>
      </div>
      <div className="card-content">
        <h3>{project.title}</h3>
        <div className="tech-stack">
          {project.tech.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
        <p>
          {project.description}
          {project.details && (
            <>
              <br /><b>Tech Stack:</b><br />
              {project.details}
            </>
          )}
        </p>
        <div className="card-links">
          <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> Code
          </a>
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-external-link-alt"></i> Live Demo
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
