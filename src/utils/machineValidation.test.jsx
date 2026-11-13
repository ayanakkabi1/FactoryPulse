import { describe, expect, it } from 'vitest';
import { getNextMachineId, validateMachineForm } from './machineValidation';

const validMachine = {
  name: 'Robot de soudage',
  zone: 'Atelier A',
  status: 'En fonctionnement',
  dailyProduction: '125',
};

describe('validateMachineForm', () => {
  it('accepts a complete machine form', () => {
    expect(validateMachineForm(validMachine)).toEqual({});
  });

  it('reports targeted errors for missing required fields', () => {
    expect(validateMachineForm({
      name: '',
      zone: '',
      status: '',
      dailyProduction: '',
    })).toEqual({
      name: 'Le nom de la machine est obligatoire.',
      zone: 'Sélectionnez une zone valide.',
      status: 'Sélectionnez un statut valide.',
      dailyProduction: 'La production quotidienne est obligatoire.',
    });
  });

  it('rejects invalid names and production values', () => {
    expect(validateMachineForm({
      ...validMachine,
      name: 'A',
      dailyProduction: '-1',
    })).toEqual({
      name: 'Le nom doit contenir au moins 2 caractères.',
      dailyProduction: 'Saisissez un nombre entier positif ou nul.',
    });
  });

  it('accepts zero production', () => {
    expect(validateMachineForm({
      ...validMachine,
      dailyProduction: '0',
    })).toEqual({});
  });
});

describe('getNextMachineId', () => {
  it('generates the next ID after the highest existing machine ID', () => {
    expect(getNextMachineId([
      { id: 'M-001' },
      { id: 'M-008' },
      { id: 'M-003' },
    ])).toBe('M-009');
  });

  it('starts at M-001 when there are no existing machines', () => {
    expect(getNextMachineId([])).toBe('M-001');
  });
});
