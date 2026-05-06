import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function UserModal({ user, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 40 }}
        transition={{ type: "spring", stiffness: 120 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-slate-900 border border-slate-700 rounded-3xl p-8 w-full max-w-md relative"
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-gray-400 hover:text-white"
        >
          <X />
        </button>

        <motion.img
          layoutId={user.login.uuid}
          src={user.picture.large}
          alt=""
          className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500"
        />

        <h2 className="text-3xl font-bold text-center mt-5">
          {user.name.first} {user.name.last}
        </h2>

        <div className="mt-6 space-y-3 text-gray-300">
          <p>
            <span className="font-semibold text-white">Email:</span>{" "}
            {user.email}
          </p>

          <p>
            <span className="font-semibold text-white">Phone:</span>{" "}
            {user.phone}
          </p>

          <p>
            <span className="font-semibold text-white">Gender:</span>{" "}
            {user.gender}
          </p>

          <p>
            <span className="font-semibold text-white">Location:</span>{" "}
            {user.location.city}, {user.location.country}
          </p>

          <p>
            <span className="font-semibold text-white">Username:</span>{" "}
            {user.login.username}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
