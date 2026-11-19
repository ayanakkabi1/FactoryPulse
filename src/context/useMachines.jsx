import { useContext } from 'react';
import { MachinesContext } from './MachinesContext';

export function useMachines() {
  const context = useContext(MachinesContext);

  if (!context) {
    throw new Error('useMachines doit être utilisé dans MachinesProvider');
  }

  return context;
}
