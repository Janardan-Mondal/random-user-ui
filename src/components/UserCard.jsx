import { motion } from "framer-motion";

export default function UserCard({ user, onClick }) {
  return (
    <motion.div
      layout
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className="bg-slate-800 rounded-2xl p-5 cursor-pointer border border-slate-700 shadow-xl"
    >
      <motion.img
        layoutId={user.login.uuid}
        src={user.picture.large}
        alt=""
        className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500"
      />

      <h2 className="text-center text-xl font-semibold mt-4">
        {user.name.first} {user.name.last}
      </h2>

      <p className="text-center text-gray-400 mt-2">{user.email}</p>

      <div className="mt-4 text-center text-sm text-gray-300">
        {user.location.city}, {user.location.country}
      </div>
    </motion.div>
  );
}
