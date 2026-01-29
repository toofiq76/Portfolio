function SkillCategory({ category }) {
  return (
    <div className="skill-category">
      <h3><i className={category.icon}></i> {category.title}</h3>
      <ul>
        {category.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}

export default SkillCategory
