
export default function StatusBadge({ status }) {
  const getStatusStyles = () => {
    switch (status) {
      case 'running':
      case 'En fonctionnement':
        return 'bg-[#10B981]/20 text-[#10B981] border-[#10B981]/30';
      case 'stopped':
      case "À l'arrêt":
        return 'bg-[#F59E0B]/20 text-[#F59E0B] border-[#F59E0B]/30';
      case 'breakdown':
      case 'En panne':
        return 'bg-[#EF4444]/20 text-[#EF4444] border-[#EF4444]/30';
      default:
        return 'bg-gray-200 text-gray-700 border-gray-300';
    }
  };

  const getStatusLabel = () => {
    switch (status) {
      case 'running':
      case 'En fonctionnement':
        return 'En fonctionnement';
      case 'stopped':
      case "À l'arrêt":
        return 'À l\'arrêt';
      case 'breakdown':
      case 'En panne':
        return 'En panne';
      default:
        return 'Inconnu';
    }
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusStyles()}`}>
      {getStatusLabel()}
    </span>
  );
}