import { skills } from "../constants";

const SkillsSection = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-label">Stack</h2>
        <div className="skills__groups">
          <div className="skills__group">
            <span className="skills__group-label">Frontend</span>
            <div className="skills__tags">
              {skills.frontend.map((skill) => (
                <span key={skill} className="skills__tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="skills__group">
            <span className="skills__group-label">Backend</span>
            <div className="skills__tags">
              {skills.backend.map((skill) => (
                <span key={skill} className="skills__tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="skills__group">
            <span className="skills__group-label">Database</span>
            <div className="skills__tags">
              {skills.database.map((skill) => (
                <span key={skill} className="skills__tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
