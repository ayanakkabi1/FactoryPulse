import { Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Dashboard from './pages/Dashboard';
import Machines from './pages/Machines';
import Kanban from './pages/Kanban';
import NewMachine from './pages/NewMachine';
import { MachinesProvider } from './context/MachinesProvider';

export default function App() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[1126px] flex-col border-x border-[#e5e4e7] bg-white text-center">
      <Navbar />
      <MachinesProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/machines" element={<Machines />} />
          <Route path="/machines/new" element={<NewMachine />} />
          <Route path="/kanban" element={<Kanban />} />
          {/* Add other routes as needed */}
        </Routes>
      </MachinesProvider>
    </div>
  );
}
