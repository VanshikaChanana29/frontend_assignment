import { format } from 'date-fns';

export function severity(score: number): { label: string; badgeClass: string; barClass: string } {
  if (score < 40) {
    return { label: 'Low', badgeClass: 'bg-green-100 text-green-800', barClass: 'bg-green-500' };
  } else if (score < 70) {
    return { label: 'Medium', badgeClass: 'bg-yellow-100 text-yellow-800', barClass: 'bg-yellow-500' };
  } else if (score < 90) {
    return { label: 'High', badgeClass: 'bg-orange-100 text-orange-800', barClass: 'bg-orange-500' };
  } else {
    return { label: 'Critical', badgeClass: 'bg-red-100 text-red-800', barClass: 'bg-red-500' };
  }
}

export function formatTime(iso: string): string {
  const date = new Date(iso);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const hours = diff / (1000 * 60 * 60);

  if (hours < 24) {
    const minutes = Math.floor(diff / (1000 * 60));
    if (minutes < 60) {
      return `${minutes} minutes ago`;
    } else {
      return `${Math.floor(hours)} hours ago`;
    }
  } else {
    return format(date, 'dd MMM yyyy, HH:mm');
  }
}

export function typeMeta(type: string): { icon: string; accentClass: string } {
  switch (type) {
    case 'Phishing':
      return { icon: 'ShieldAlert', accentClass: 'text-blue-500' };
    case 'Malware':
      return { icon: 'Bug', accentClass: 'text-red-500' };
    case 'Spam':
      return { icon: 'MailWarning', accentClass: 'text-yellow-500' };
    default:
      return { icon: 'AlertCircle', accentClass: 'text-gray-500' };
  }
}

export function sortThreats<T extends { risk_score: number; timestamp: string }>(threats: T[]): T[] {
  return threats.sort((a, b) => {
    if (b.risk_score !== a.risk_score) {
      return b.risk_score - a.risk_score;
    }
    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
  });
}

export function filterByType<T extends { type: string }>(list: T[], active: 'All' | string): T[] {
  if (active === 'All') {
    return list;
  }
  return list.filter((item) => item.type === active);
}