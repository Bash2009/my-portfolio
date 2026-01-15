import React from "react";
import { skills } from "../constants";
import { Code2, Database, Server } from "lucide-react";

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="section"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-card-header">
              <Code2 size={24} />
              <h3>Frontend Development</h3>
            </div>
            <div className="skill-tags">
              {skills.frontend.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-card-header">
              <Server size={24} />
              <h3>Backend Development</h3>
            </div>
            <div className="skill-tags">
              {skills.backend.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-card-header">
              <Database size={24} />
              <h3>Database Management</h3>
            </div>
            <div className="skill-tags">
              {skills.database.map((skill) => (
                <span key={skill} className="skill-tag">
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
