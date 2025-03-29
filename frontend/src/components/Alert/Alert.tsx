"use client";
import { useAlert } from "@/context/AlertContext";
import { motion, AnimatePresence } from "framer-motion";

const alertStyles = {
  success: "bg-green-500 text-white",
  warn: "bg-yellow-500 text-black",
  error: "bg-red-500 text-white",
};

export default function Alert() {
  const { alerts } = useAlert();

  const selectIcon = (icon: string) => {
    switch (icon) {
      case "success":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2 text-green-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      case "error":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-ban-icon lucide-ban mr-2 text-red-800"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m4.9 4.9 14.2 14.2" />
          </svg>
        );

      default:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2 text-yellow-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        );
    }
  };

  return (
    <div className="fixed top-4 right-4 flex flex-col space-y-2 z-50">
      <AnimatePresence>
        {alerts.map((alert) => (
          <motion.div
            key={alert.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className={`p-3 rounded-lg shadow-lg ${alertStyles[alert.type]}`}
          >
            <span className="flex items-center">
              {selectIcon(alert.type)} {alert.message}
            </span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
