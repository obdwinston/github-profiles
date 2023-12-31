import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

import AlertContext from "../../context/alert/AlertContext";

const Alert = () => {
  const { alert } = useContext(AlertContext);

  return (
    alert !== null && (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <p className="flex items-start mb-4 space-x-2">
            {alert.type === "error" && (
              <svg
                className="w-6 h-6 flex-none mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="12" fill="#FECDD3"></circle>
                <path
                  d="M8 8l8 8M16 8l-8 8"
                  stroke="#B91C1C"
                  strokeWidth="2"
                ></path>
              </svg>
            )}
            <p className="flex-1 text-base font-bold leading-7 text-white">
              <strong>{alert.message}</strong>
            </p>
          </p>
        </motion.div>
      </AnimatePresence>
    )
  );
};

export default Alert;
