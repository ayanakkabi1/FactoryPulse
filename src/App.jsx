import { Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Dashboard from './pages/Dashboard';
import Machines from './pages/Machines';
import Kanban from './pages/Kanban';

export default function App() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[1126px] flex-col border-x border-[#e5e4e7] bg-white text-center">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/machines" element={<Machines />} />
        <Route path="/kanban" element={<Kanban />} />
        {/* Add other routes as needed */}
      </Routes>
    </div>
  );
}
