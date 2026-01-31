
import React from 'react';

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <header className="bg-white border-b-2 border-black">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <button onClick={onLogout} className="bg-red-500 text-white font-bold py-2 px-4 rounded-md brutalist-button">
            Logout
          </button>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <div className="bg-white p-8 rounded-lg brutalist-border brutalist-shadow">
            <h2 className="text-3xl font-bold mb-4">Welcome, Admin!</h2>
            <p className="text-lg text-gray-700 mb-6">This is your control center for the portfolio. From here, you'll be able to manage all the content on your site.</p>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-md brutalist-border">
                    <h3 className="text-xl font-bold mb-2">Manage Projects</h3>
                    <p className="text-gray-600">Add new projects you've built, edit existing ones, or remove old ones.</p>
                </div>
                 <div className="bg-gray-50 p-6 rounded-md brutalist-border">
                    <h3 className="text-xl font-bold mb-2">Edit Information</h3>
                    <p className="text-gray-600">Update your "About Me" section, contact details, and other personal info.</p>
                </div>
                 <div className="bg-gray-50 p-6 rounded-md brutalist-border">
                    <h3 className="text-xl font-bold mb-2">Update Skills</h3>
                    <p className="text-gray-600">Add new technologies to your toolbox as you learn them.</p>
                </div>
                 <div className="bg-gray-50 p-6 rounded-md brutalist-border">
                    <h3 className="text-xl font-bold mb-2">Add Achievements</h3>
                    <p className="text-gray-600">Showcase your latest certifications and accomplishments.</p>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
