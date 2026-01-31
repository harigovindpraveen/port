
import React from 'react';
import { SKILLS } from '../constants';
import { Skill, SkillCategory } from '../types';

const Skills = () => {
  const groupedSkills = SKILLS.reduce((acc, skill) => {
    const { category } = skill;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<SkillCategory, Skill[]>);

  const categoryOrder: SkillCategory[] = ['Frontend', 'Backend', 'Tools'];

  return (
    <section id="skills" className="py-24 fade-in-section">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Toolbox
        </h2>
        
        <div className="stagger-in space-y-16">
          {categoryOrder.map((category) => (
            <div key={category}>
              <h3 className="text-2xl font-bold mb-6 text-center">{category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {groupedSkills[category].map((skill) => (
                  <div
                    key={skill.name}
                    className="relative group bg-white p-6 rounded-md flex flex-col items-center justify-center space-y-3 brutalist-border transition-transform duration-300 hover:scale-105 hover:shadow-lg stagger-item"
                  >
                    <skill.icon className="h-12 w-12 text-black" />
                    <span className="font-bold text-black text-center">{skill.name}</span>
                    {/* Tooltip */}
                    <div className="absolute bottom-full mb-2 w-max px-3 py-1 text-sm font-bold text-white bg-black rounded-md shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      {skill.name}
                      {/* Tooltip Arrow */}
                      <div className="absolute left-1/2 top-full -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-black"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;