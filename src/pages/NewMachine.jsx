import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMachines } from '../context/useMachines';
import { statuses, validateMachineForm, zones } from '../utils/machineValidation';

const initialForm = {
  name: '',
  zone: '',
  status: 'En fonctionnement',
  dailyProduction: '',
};

export default function NewMachine() {
  const navigate = useNavigate();
  const { addMachine } = useMachines();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
    setErrors((currentErrors) => ({ ...currentErrors, [name]: '' }));
    setSubmitError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validateMachineForm(form);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    try {
      addMachine({
        name: form.name.trim(),
        zone: form.zone,
        status: form.status,
        dailyProduction: Number(form.dailyProduction),
      });
      navigate('/machines');
    } catch {
      setSubmitError("Impossible d'ajouter la machine. Réessayez.");
    }
  };

  return (
    <main className="min-h-screen bg-[#f8f4ef] px-[42px] pb-10 pt-8 text-left text-[#2d1d0c] max-[900px]:px-4 max-[900px]:pt-6">
      <div className="mx-auto max-w-2xl">
        <Link
          to="/machines"
          className="text-xs font-medium uppercase tracking-[0.16em] text-[#6e473b] hover:text-[#2d1d0c]"
        >
          ← Retour au parc machines
        </Link>

        <header className="mb-8 mt-5">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-[#6e473b]">
            Parc industriel
          </p>
          <h1 className="m-0 text-[38px] font-semibold leading-[1.2] tracking-[-2px] max-[600px]:text-[28px]">
            Nouvelle machine
          </h1>
          <p className="mt-2 text-[13px] font-extralight">
            Enregistrez une machine avec ses informations de production.
          </p>
        </header>

        <form onSubmit={handleSubmit} noValidate className="rounded-2xl bg-[#ebe4db] p-6 shadow-sm max-[600px]:p-4">
          <div className="grid gap-5 md:grid-cols-2">
            <FormField
              id="name"
              label="Nom de la machine"
              error={errors.name}
              required
            >
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={updateField}
                placeholder="Ex. Robot de soudage"
                className={inputClass(errors.name)}
                aria-invalid={Boolean(errors.name)}
              />
            </FormField>

            <FormField id="zone" label="Zone" error={errors.zone} required>
              <select
                id="zone"
                name="zone"
                value={form.zone}
                onChange={updateField}
                className={inputClass(errors.zone)}
                aria-invalid={Boolean(errors.zone)}
              >
                <option value="">Sélectionner une zone</option>
                {zones.map((zone) => <option key={zone} value={zone}>{zone}</option>)}
              </select>
            </FormField>

            <FormField id="status" label="Statut" error={errors.status} required>
              <select
                id="status"
                name="status"
                value={form.status}
                onChange={updateField}
                className={inputClass(errors.status)}
                aria-invalid={Boolean(errors.status)}
              >
                {statuses.map((status) => <option key={status} value={status}>{status}</option>)}
              </select>
            </FormField>

            <FormField
              id="dailyProduction"
              label="Production quotidienne (p/h)"
              error={errors.dailyProduction}
              required
            >
              <input
                id="dailyProduction"
                name="dailyProduction"
                type="number"
                min="0"
                step="1"
                value={form.dailyProduction}
                onChange={updateField}
                placeholder="Ex. 125"
                className={inputClass(errors.dailyProduction)}
                aria-invalid={Boolean(errors.dailyProduction)}
              />
            </FormField>
          </div>

          {submitError && (
            <p role="alert" className="mt-5 rounded-xl bg-red-100 px-4 py-3 text-sm text-red-800">
              {submitError}
            </p>
          )}

          <div className="mt-8 flex justify-end gap-3 max-[600px]:flex-col-reverse">
            <Link
              to="/machines"
              className="rounded-[20px] border border-[#b7a391] px-5 py-2.5 text-center text-[13px] font-medium text-[#6e473b] hover:bg-[#ddceb9]"
            >
              Annuler
            </Link>
            <button
              type="submit"
              className="rounded-[20px] bg-[#6e473b] px-5 py-2.5 text-[13px] font-medium text-white shadow-sm transition-colors hover:bg-[#57372e]"
            >
              Enregistrer la machine
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

function FormField({ id, label, error, required, children }) {
  return (
    <label htmlFor={id} className="block text-sm font-medium">
      <span className="mb-2 block">
        {label}
        {required && <span className="ml-1 text-red-700">*</span>}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs font-normal text-red-700">{error}</span>}
    </label>
  );
}

function inputClass(error) {
  return `w-full rounded-xl border bg-[#f8f4ef] px-4 py-2.5 text-sm text-[#2d1d0c] outline-none placeholder:text-[#8f7e70] focus:border-[#6e473b] focus:ring-2 focus:ring-[#6e473b]/20 ${
    error ? 'border-red-600' : 'border-[#d6c6b5]'
  }`;
}
