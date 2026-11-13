export const zones = ['Atelier A', 'Atelier B', 'Atelier C', 'Atelier D'];
export const statuses = ['En fonctionnement', "À l'arrêt", 'En panne'];

export function validateMachineForm(form) {
  const errors = {};
  const trimmedName = form.name.trim();

  if (!trimmedName) {
    errors.name = 'Le nom de la machine est obligatoire.';
  } else if (trimmedName.length < 2) {
    errors.name = 'Le nom doit contenir au moins 2 caractères.';
  }

  if (!zones.includes(form.zone)) {
    errors.zone = 'Sélectionnez une zone valide.';
  }

  if (!statuses.includes(form.status)) {
    errors.status = 'Sélectionnez un statut valide.';
  }

  if (form.dailyProduction === '') {
    errors.dailyProduction = 'La production quotidienne est obligatoire.';
  } else if (!/^\d+$/.test(form.dailyProduction)) {
    errors.dailyProduction = 'Saisissez un nombre entier positif ou nul.';
  }

  return errors;
}

export function getNextMachineId(machines) {
  const highestId = machines.reduce((highest, machine) => {
    const numericId = Number.parseInt(machine.id?.replace('M-', ''), 10);
    return Number.isNaN(numericId) ? highest : Math.max(highest, numericId);
  }, 0);

  return `M-${String(highestId + 1).padStart(3, '0')}`;
}
