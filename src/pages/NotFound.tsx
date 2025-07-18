// src/pages/NotFound.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-6 bg-white dark:bg-gray-900 text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-6xl font-bold text-gray-800 dark:text-white mb-4">404</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
        Page Not Found. The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        ← Back to Home
      </Link>
    </motion.div>
  );
}
