
// FIX: Import React to provide the 'React' namespace for ComponentType.
import React from 'react';

export type SkillCategory = 'Frontend' | 'Backend' | 'Tools';

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  category: SkillCategory;
}

export interface Project {
  title: string;
  description: string;
  detailedDescription: string;
  imageUrl: string;
  tags: string[];
  date: string; // YYYY-MM-DD
  liveUrl?: string;
  videoUrl?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  date: string;
  description: string;
}