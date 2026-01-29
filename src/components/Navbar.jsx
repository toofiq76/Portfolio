function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">TK<span className="accent">.Portfolio</span></div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact" className="btn-contact">Contact Me</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
