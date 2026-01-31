import React, { useState } from 'react';

// --- Types ---
interface Project {
  id: number;
  title: string;
  desc: string;
}

interface AdminDashboardProps {
  onLogout: () => void;
}

// --- Main Component ---
const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  // 1. Navigation State: Controls which "screen" is visible
  const [activeView, setActiveView] = useState<'home' | 'projects' | 'info' | 'skills' | 'achievements'>('home');

  // 2. Data State (Simulating a Database)
  const [bio, setBio] = useState("I am a passionate developer...");
  
  const [projects, setProjects] = useState<Project[]>([
    { id: 1, title: "Portfolio V1", desc: "My first HTML/CSS site" },
    { id: 2, title: "E-Commerce App", desc: "Built with MERN Stack" }
  ]);
  
  const [skills, setSkills] = useState<string[]>(["React", "TypeScript", "Tailwind"]);
  
  // 3. Form States (Temporary storage for inputs)
  const [newProject, setNewProject] = useState({ title: '', desc: '' });
  const [newSkill, setNewSkill] = useState('');

  // --- Handlers ---

  // Project Handlers
  const handleAddProject = () => {
    if (!newProject.title) return;
    setProjects([...projects, { id: Date.now(), ...newProject }]);
    setNewProject({ title: '', desc: '' }); // Reset form
  };

  const handleDeleteProject = (id: number) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  // Skill Handlers
  const handleAddSkill = () => {
    if (!newSkill || skills.includes(newSkill)) return;
    setSkills([...skills, newSkill]);
    setNewSkill('');
  };

  const handleDeleteSkill = (skillToDelete: string) => {
    setSkills(skills.filter(s => s !== skillToDelete));
  };


  // --- Render Helpers ---

  // 1. The Home Grid (The "Picture" you provided originally)
  const renderHome = () => (
    <div className="bg-white p-8 rounded-lg brutalist-border brutalist-shadow">
      <h2 className="text-3xl font-bold mb-4">Welcome, Admin!</h2>
      <p className="text-lg text-gray-700 mb-6">Control center. Select a module to edit.</p>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Project Card */}
        <div onClick={() => setActiveView('projects')} className="bg-gray-50 p-6 rounded-md brutalist-border cursor-pointer hover:bg-gray-100 transition-colors">
          <h3 className="text-xl font-bold mb-2">Manage Projects</h3>
          <p className="text-gray-600">Add, edit, or remove projects ({projects.length} active).</p>
        </div>

        {/* Info Card */}
        <div onClick={() => setActiveView('info')} className="bg-gray-50 p-6 rounded-md brutalist-border cursor-pointer hover:bg-gray-100 transition-colors">
          <h3 className="text-xl font-bold mb-2">Edit Information</h3>
          <p className="text-gray-600">Update your "About Me" and bio.</p>
        </div>

        {/* Skills Card */}
        <div onClick={() => setActiveView('skills')} className="bg-gray-50 p-6 rounded-md brutalist-border cursor-pointer hover:bg-gray-100 transition-colors">
          <h3 className="text-xl font-bold mb-2">Update Skills</h3>
          <p className="text-gray-600">Manage tech stack ({skills.length} listed).</p>
        </div>

        {/* Achievements Card (Placeholder for now) */}
        <div className="bg-gray-50 p-6 rounded-md brutalist-border opacity-60 cursor-not-allowed">
          <h3 className="text-xl font-bold mb-2">Achievements</h3>
          <p className="text-gray-600">Coming soon in v2.0</p>
        </div>
      </div>
    </div>
  );

  // 2. The Projects Editor View
  const renderProjectsEditor = () => (
    <div className="bg-white p-8 rounded-lg brutalist-border brutalist-shadow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Project Manager</h2>
        <button onClick={() => setActiveView('home')} className="text-sm underline hover:text-blue-600">Back to Dashboard</button>
      </div>

      {/* Add New Form */}
      <div className="mb-8 p-4 bg-gray-50 border-2 border-black border-dashed rounded-md">
        <h3 className="font-bold mb-2">Add New Project</h3>
        <input 
          type="text" 
          placeholder="Project Title" 
          className="w-full p-2 mb-2 border-2 border-gray-300 rounded focus:border-black outline-none"
          value={newProject.title}
          onChange={(e) => setNewProject({...newProject, title: e.target.value})}
        />
        <input 
          type="text" 
          placeholder="Short Description" 
          className="w-full p-2 mb-2 border-2 border-gray-300 rounded focus:border-black outline-none"
          value={newProject.desc}
          onChange={(e) => setNewProject({...newProject, desc: e.target.value})}
        />
        <button onClick={handleAddProject} className="bg-black text-white px-4 py-2 font-bold rounded hover:bg-gray-800">
          + Add Project
        </button>
      </div>

      {/* List */}
      <div className="space-y-4">
        {projects.map((p) => (
          <div key={p.id} className="flex justify-between items-center p-4 border-2 border-gray-200 rounded hover:border-black transition-colors">
            <div>
              <h4 className="font-bold">{p.title}</h4>
              <p className="text-sm text-gray-600">{p.desc}</p>
            </div>
            <button 
              onClick={() => handleDeleteProject(p.id)}
              className="text-red-500 font-bold text-sm hover:underline"
            >
              Delete
            </button>
          </div>
        ))}
        {projects.length === 0 && <p className="text-gray-500 italic">No projects yet.</p>}
      </div>
    </div>
  );

  // 3. The Skills Editor View
  const renderSkillsEditor = () => (
    <div className="bg-white p-8 rounded-lg brutalist-border brutalist-shadow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Skills Manager</h2>
        <button onClick={() => setActiveView('home')} className="text-sm underline hover:text-blue-600">Back to Dashboard</button>
      </div>

      {/* Input */}
      <div className="flex gap-2 mb-6">
        <input 
          type="text" 
          placeholder="e.g. C++" 
          className="flex-1 p-2 border-2 border-black rounded"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAddSkill()}
        />
        <button onClick={handleAddSkill} className="bg-black text-white px-6 font-bold rounded">Add</button>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="px-3 py-1 bg-gray-200 border border-black rounded-full font-medium flex items-center gap-2">
            {skill}
            <button onClick={() => handleDeleteSkill(skill)} className="text-red-600 font-bold hover:text-red-800">×</button>
          </span>
        ))}
      </div>
    </div>
  );

  // 4. The Profile Editor View
  const renderInfoEditor = () => (
    <div className="bg-white p-8 rounded-lg brutalist-border brutalist-shadow">
       <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Edit Profile Info</h2>
        <button onClick={() => setActiveView('home')} className="text-sm underline hover:text-blue-600">Back to Dashboard</button>
      </div>
      
      <div className="space-y-4">
        <div>
            <label className="block font-bold mb-1">About Me / Bio</label>
            <textarea 
                rows={5}
                className="w-full p-3 border-2 border-black rounded-md focus:ring-2 focus:ring-gray-400 outline-none"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
            />
        </div>
        <button onClick={() => setActiveView('home')} className="bg-black text-white px-6 py-2 rounded font-bold">
            Save Changes
        </button>
      </div>
    </div>
  );

  // --- Main Render ---
  return (
    <div className="min-h-screen bg-[#F9F9F9] font-sans">
      <header className="bg-white border-b-2 border-black sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-black tracking-tight">ADMIN DASHBOARD</h1>
          <button onClick={onLogout} className="bg-red-500 text-white font-bold py-2 px-4 rounded-md border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all">
            Logout
          </button>
        </div>
      </header>

      <main className="container mx-auto p-6">
        {activeView === 'home' && renderHome()}
        {activeView === 'projects' && renderProjectsEditor()}
        {activeView === 'skills' && renderSkillsEditor()}
        {activeView === 'info' && renderInfoEditor()}
      </main>
    </div>
  );
};

export default AdminDashboard;
