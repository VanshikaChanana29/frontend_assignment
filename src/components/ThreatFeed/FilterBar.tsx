import { ThreatType } from '@/types/threat';

interface FilterBarProps {
  activeFilter: ThreatType | 'All';
  setActiveFilter: (filter: ThreatType | 'All') => void;
}

const FilterBar = ({ activeFilter, setActiveFilter }: FilterBarProps) => {
  const filters: (ThreatType | 'All')[] = ['All', 'Phishing', 'Malware', 'Spam'];

  return (
    <div className="flex justify-between items-center mb-4">
      <input
        type="text"
        placeholder="Search by subject or sender..."
        className="border rounded-md p-2 w-64"
      />
      <div className="flex space-x-4">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`px-4 py-2 rounded-md ${
              activeFilter === filter
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;