import { useEffect, useMemo, useState } from 'react';
import { MachinesContext } from './machinesContext';
import { getNextMachineId } from '../utils/machineValidation';

export function MachinesProvider({ children }) {
  const [machines, setMachines] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState('');

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

  const addMachine = (machineDetails) => {
    let createdMachine;

    setMachines((currentMachines) => {
      createdMachine = {
        ...machineDetails,
        id: getNextMachineId(currentMachines),
      };

      return [...currentMachines, createdMachine];
    });

    return createdMachine;
  };

  const value = useMemo(
    () => ({ machines, isLoading, loadError, addMachine }),
    [machines, isLoading, loadError],
  );

  return <MachinesContext.Provider value={value}>{children}</MachinesContext.Provider>;
}
