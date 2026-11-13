import { useEffect, useState } from 'react';
import StatusBadge from '../components/common/StatusBadge';

const filters = [
  { value: 'all', label: 'Toutes' },
  { value: 'En fonctionnement', label: 'En marche' },
  { value: "À l'arrêt", label: "À l'arrêt" },
  { value: 'En panne', label: 'En panne' },
];

export default function Machines() {
  const [machines, setMachines] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    const controller = new AbortController();

    async function loadMachines() {
      try {
        const response = await fetch('/machines.json', {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Impossible de charger les machines (${response.status})`);
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error('Le format des données machines est invalide');
        }

        setMachines(data);
      } catch (error) {
        if (error.name !== 'AbortError') {
          setLoadError(error.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadMachines();

    return () => controller.abort();
  }, []);

  const filteredMachines = machines.filter((machine) => {
    const search = searchTerm.toLowerCase();
    const matchesSearch =
      machine.name.toLowerCase().includes(search) ||
      machine.id.toLowerCase().includes(search);
    const matchesStatus =
      statusFilter === 'all' || machine.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <main className="min-h-screen bg-[#f8f4ef] px-[42px] pb-10 pt-8 text-[#2d1d0c] max-[900px]:px-4 max-[900px]:pt-6">
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-[#6e473b]">
            Parc industriel
          </p>
          <h1 className="m-0 text-[38px] font-semibold leading-[1.2] tracking-[-2px] max-[600px]:text-[28px]">
            Gestion des machines
          </h1>
          <p className="mt-2 text-[13px] font-extralight tracking-[-0.4px]">
            Suivez et gérez l&apos;ensemble de votre parc industriel
          </p>
        </div>

        <button
          type="button"
          className="rounded-[20px] bg-[#6e473b] px-5 py-2.5 text-[13px] font-medium text-white shadow-sm transition-colors hover:bg-[#57372e]"
        >
          + Ajouter une machine
        </button>
      </header>

      <section className="mb-6 rounded-2xl bg-[#ebe4db] p-4">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <label className="relative w-full md:max-w-[320px]">
            <span className="sr-only">Rechercher une machine</span>
            <svg
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#6e473b]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="21" y2="21" />
            </svg>
            <input
              type="search"
              placeholder="Rechercher par nom ou ID..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="w-full rounded-xl border border-[#d6c6b5] bg-[#f8f4ef] py-2.5 pl-10 pr-4 text-sm text-[#2d1d0c] outline-none placeholder:text-[#8f7e70] focus:border-[#6e473b] focus:ring-2 focus:ring-[#6e473b]/20"
            />
          </label>

          <div className="flex gap-2 overflow-x-auto pb-1">
            {filters.map((filter) => {
              const isActive = statusFilter === filter.value;

              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setStatusFilter(filter.value)}
                  className={`whitespace-nowrap rounded-[20px] px-4 py-2 text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-[#6e473b] text-white'
                      : 'border border-[#d6c6b5] bg-[#f8f4ef] text-[#6e473b] hover:bg-[#ddceb9]'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden rounded-2xl bg-[#ebe4db] shadow-sm">
        <div className="flex items-center justify-between border-b border-[#d6c6b5] px-6 py-5 max-[600px]:px-4">
          <div>
            <h2 className="m-0 text-lg font-semibold">Toutes les machines</h2>
            <p className="mt-1 text-xs font-extralight text-[#6e473b]">
              {filteredMachines.length} machine{filteredMachines.length !== 1 ? 's' : ''} affichée{filteredMachines.length !== 1 ? 's' : ''}
            </p>
          </div>
          <span className="rounded-full bg-[#ddceb9] px-3 py-1 text-xs font-medium text-[#6e473b]">
            {machines.length} au total
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="border-b border-[#d6c6b5] text-[11px] uppercase tracking-[0.12em] text-[#6e473b]">
                <th className="px-6 py-4 font-medium">Machine</th>
                <th className="px-6 py-4 font-medium">Zone</th>
                <th className="px-6 py-4 font-medium">Statut</th>
                <th className="px-6 py-4 font-medium">Production</th>
                <th className="px-6 py-4 text-right font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#d6c6b5]">
              {isLoading ? (
                <tr>
                  <td colSpan="5" className="px-6 py-12 text-center text-sm font-extralight text-[#6e473b]">
                    Chargement des machines...
                  </td>
                </tr>
              ) : loadError ? (
                <tr>
                  <td colSpan="5" className="px-6 py-12 text-center text-sm text-red-700">
                    {loadError}
                  </td>
                </tr>
              ) : filteredMachines.length > 0 ? (
                filteredMachines.map((machine) => (
                  <tr key={machine.id} className="transition-colors hover:bg-[#f8f4ef]/60">
                    <td className="px-6 py-4">
                      <div className="font-medium">{machine.name}</div>
                      <div className="mt-1 text-xs font-extralight text-[#6e473b]">{machine.id}</div>
                    </td>
                    <td className="px-6 py-4 text-sm">{machine.zone}</td>
                    <td className="px-6 py-4">
                      <StatusBadge status={machine.status} />
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-[#6e473b]">{machine.dailyProduction} p/h</td>
                    <td className="space-x-2 px-6 py-4 text-right text-xs">
                      <button type="button" className="font-medium text-[#6e473b] hover:text-[#2d1d0c]">
                        Modifier
                      </button>
                      <span className="text-[#b7a391]">|</span>
                      <button type="button" className="font-medium text-red-700 hover:text-red-900">
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-12 text-center text-sm font-extralight text-[#6e473b]">
                    Aucune machine trouvée.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
