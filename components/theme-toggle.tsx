import { useTheme } from "@/lib/theme/theme-provider";
import { FiMoon, FiSun } from "react-icons/fi";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <button
      onClick={handleToggleTheme}
      aria-label="Toggle theme"
      className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200 hover:bg-white/10"
      style={{
        border: "1px solid rgba(255,255,255,0.12)",
        color: "#C1C2D3",
      }}
    >
      {isDark ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
    </button>
  );
}
