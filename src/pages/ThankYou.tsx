import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ThankYou() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-background px-6"
    >
      <div className="max-w-md w-full text-center space-y-6">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center"
        >
          <CheckCircle2 className="text-green-500 w-16 h-16" />
        </motion.div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-foreground">
          Thank You!
        </h1>
        <p className="text-muted-foreground text-base leading-relaxed">
          Your message has been successfully sent. I’ll get back to you as soon as possible. 🚀
        </p>

        {/* Action Button */}
        <div className="flex justify-center pt-2">
          <Link to="/">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Footer-like note */}
        <p className="text-xs text-muted-foreground pt-4">
          Built with ❤️ by Arwill Joshua using React, Tailwind & Shadcn UI
        </p>
      </div>
    </motion.section>
  );
}
