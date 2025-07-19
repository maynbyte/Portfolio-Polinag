import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center px-6 bg-background"
    >
      <div className="max-w-lg w-full text-center space-y-6">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center"
        >
          <AlertTriangle className="text-yellow-500 w-16 h-16" />
        </motion.div>

        {/* Headline */}
        <h1 className="text-4xl font-bold text-foreground">
          404 — Page Not Found
        </h1>
        <p className="text-muted-foreground text-base leading-relaxed">
          Oops! The page you’re looking for doesn’t exist.
        </p>

        {/* Action */}
        <div className="flex justify-center pt-2">
          <Link to="/">
            <Button variant="default" className="flex items-center gap-2">
              Go Back Home
            </Button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
