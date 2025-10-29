import { Threat } from '@/types/threat';
import ThreatItem from './ThreatItem';
import { motion } from 'framer-motion';

interface ThreatListProps {
  threats: Threat[];
}

const ThreatList = ({ threats }: ThreatListProps) => {
  if (!threats || threats.length === 0) {
    return <div className="text-gray-500 p-4">No threats found.</div>;
  }

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 sm:px-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {threats.map((threat) => (
        <motion.div
          key={threat.id}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ThreatItem threat={threat} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ThreatList;