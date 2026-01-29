function Hero() {
  return (
    <header className="hero">
      <div className="hero-content">
        <span className="badge">Full-Stack Developer</span>
        <h1>Building Scalable <br /> <span className="text-gradient">Web Applications</span></h1>
        <p>
          I specialize in the MERN stack (MongoDB, Express, React, Node.js).
          I turn complex business logic into clean, efficient code.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="https://github.com/toofiq76" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>
      </div>
    </header>
  )
}

export default Hero
