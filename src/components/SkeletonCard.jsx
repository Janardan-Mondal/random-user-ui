import { motion } from "framer-motion";

export default function SkeletonCard() {
  return (
    <div className="bg-slate-800 rounded-2xl p-5 border border-slate-700">
      <motion.div
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="space-y-4"
      >
        <div className="w-24 h-24 rounded-full bg-slate-700 mx-auto"></div>

        <div className="h-5 bg-slate-700 rounded w-3/4 mx-auto"></div>

        <div className="h-4 bg-slate-700 rounded w-full"></div>

        <div className="h-4 bg-slate-700 rounded w-1/2 mx-auto"></div>
      </motion.div>
    </div>
  );
}
