import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import SearchBar from "./components/SearchBar.jsx";
import UserCard from "./components/UserCard.jsx";
import UserModal from "./components/UserModal.jsx";
import SkeletonCard from "./components/SkeletonCard.jsx";

export default function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        "https://api.freeapi.app/api/v1/public/randomusers",
      );

      const data = await res.json();

      setUsers(data.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    `${user.name.first} ${user.name.last}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen p-6">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold"
        >
          Random Users
        </motion.h1>

        <SearchBar search={search} setSearch={setSearch} />

        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          onClick={fetchUsers}
          className="bg-blue-500 px-5 py-2 rounded-xl font-semibold"
        >
          Refresh Users
        </motion.button>
      </div>

      {/* GRID */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : filteredUsers.map((user, index) => (
              <UserCard
                key={index}
                user={user}
                onClick={() => setSelectedUser(user)}
              />
            ))}
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedUser && (
          <UserModal
            user={selectedUser}
            onClose={() => setSelectedUser(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
