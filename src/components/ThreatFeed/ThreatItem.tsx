import { Threat } from '@/types/threat';
import { severity, typeMeta } from '@/lib/utils';
import { toast } from 'react-toastify';
import { Bug, MailWarning, ShieldAlert } from 'lucide-react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

interface ThreatItemProps {
  threat: Threat;
}

const ThreatItem = ({ threat }: ThreatItemProps) => {
  const { label, badgeClass, barClass } = severity(threat.risk_score);
  const { icon, accentClass } = typeMeta(threat.type);

  const IconComponent = icon === 'ShieldAlert' ? ShieldAlert : icon === 'Bug' ? Bug : MailWarning;

  return (
    <div role="article" className={`bg-white shadow rounded-lg p-4 hover:shadow-lg transition-shadow duration-200 border-l-4 ${barClass}`}>
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-gray-900 truncate">{threat.details.subject}</h3>
        <span role="status" aria-label={`${label} Risk: ${threat.risk_score}`} className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${badgeClass}`}>
          {label}
          {threat.risk_score}
        </span>
      </div>
      <div className="mt-2 text-sm text-gray-500">
        <p>Sender: {threat.details.sender}</p>
        <p>Time: {dayjs(threat.timestamp).fromNow()}</p>
      </div>
      <div className="mt-2">
        <div className="flex items-center space-x-2">
          <IconComponent aria-label={threat.type} className={`h-4 w-4 ${accentClass}`} />
          <span className="text-sm font-medium text-gray-700 ml-auto">{threat.type}</span>
        </div>
      </div>
      <div className="mt-2 bg-gray-200 rounded-full h-2" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={threat.risk_score} aria-label={`Risk score: ${threat.risk_score}%`}>
        <div className={`${barClass} h-2 rounded-full`} style={{ width: `${threat.risk_score}%` }}></div>
      </div>
      <button onClick={() => {
        toast.success(`Threat ID: ${threat.id} viewed!`);
      }} className="mt-4 text-blue-500 hover:text-blue-700" aria-label={`View details for threat ID: ${threat.id}`}>
        View Details
      </button>
    </div>
  );
};

export default ThreatItem;