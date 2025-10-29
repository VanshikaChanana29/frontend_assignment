"use client";
import { useState } from 'react';
import mockThreatData from '@/data/mockThreatData.json' assert { type: "json" };
import type { ThreatFeed } from '@/types/threat';
import { ThreatType } from '@/types/threat';
import FilterBar from '@/components/ThreatFeed/FilterBar';
import SummaryCards from '@/components/ThreatFeed/SummaryCards';
import ThreatList from '@/components/ThreatFeed/ThreatList';

const ThreatFeed = () => {
  const [activeFilter, setActiveFilter] = useState<ThreatType | 'All'>('All');
  const threatData: ThreatFeed = mockThreatData as ThreatFeed;

  const filteredThreats = activeFilter === 'All'
    ? threatData.threats
    : threatData.threats.filter((threat: { type: ThreatType }) => threat.type === activeFilter);

  const sortedThreats = [...filteredThreats].sort((a, b) => {
    if (b.risk_score !== a.risk_score) {
      return b.risk_score - a.risk_score;
    }
    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
  });

  return (
    <div className="space-y-6">
      <FilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <SummaryCards summary={threatData.summary} />
      {sortedThreats.length > 0 ? (
        <ThreatList threats={sortedThreats} />
      ) : (
        <div className="text-center">
          <p className="text-gray-500">No threats found.</p>
          <button
            className="mt-4 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-700"
            onClick={() => setActiveFilter('All')}
          >
            Reset Filter
          </button>
        </div>
      )}
    </div>
  );
};

export default ThreatFeed;