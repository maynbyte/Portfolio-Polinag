// src/pages/ThankYou.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export default function ThankYou() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-6 bg-gray-50 dark:bg-gray-900"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
    >
      <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
        Thank You!
      </h1>
      <p className="text-gray-600 dark:text-gray-300 text-center mb-6 max-w-md">
        Your message has been sent successfully. I'll get back to you soon!
      </p>
      <Link
        to="/"
        className="text-blue-600 dark:text-blue-400 hover:underline"
      >
        ← Back to Home
      </Link>
    </motion.div>
  );
}
