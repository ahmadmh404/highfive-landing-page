import { useTheme } from "@/lib/theme/theme-provider";
import { motion, AnimatePresence } from "framer-motion";

export const ThemeToggleLogo = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <motion.button
      onClick={handleToggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative flex items-center justify-center p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
    >
      <div className="relative w-8 h-8 flex items-center justify-center">
        {/* Left Hand */}
        <motion.div
          animate={{ x: isDark ? -1 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className={`absolute inset-0 ${isDark ? "text-white" : "text-slate-900"}`}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 4L5 15H9L12 10V4Z" />
          </svg>
        </motion.div>

        {/* Right Hand */}
        <motion.div
          animate={{ x: isDark ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className={`absolute inset-0 ${isDark ? "text-white/80" : "text-slate-700"}`}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 4L19 15H15L12 10V4Z" />
          </svg>
        </motion.div>

        {/* The Mode Indicator (Center) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={isDark ? "moon" : "sun"}
            initial={{ y: 10, opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -10, opacity: 0, scale: 0.5 }}
            className="absolute z-10 bottom-1"
          >
            {/* Small 8px Sun/Moon icon or dot */}
            <div
              className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-indigo-400" : "bg-orange-400"}`}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.button>
  );
};
