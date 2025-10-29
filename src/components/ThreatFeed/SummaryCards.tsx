import { ThreatSummary } from '@/types/threat';

interface SummaryCardsProps {
  summary: ThreatSummary;
}

const SummaryCards = ({ summary }: SummaryCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:flex-row">
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-lg font-medium text-gray-700">Emails Scanned</h3>
        <p className="text-3xl font-bold text-gray-900">{summary.emails_scanned}</p>
      </div>
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-lg font-medium text-gray-700">Threats Detected</h3>
        <p className="text-3xl font-bold text-gray-900">{summary.threats_detected}</p>
      </div>
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-lg font-medium text-gray-700">Quarantined Items</h3>
        <p className="text-3xl font-bold text-gray-900">{summary.quarantined_items}</p>
      </div>
    </div>
  );
};

export default SummaryCards;