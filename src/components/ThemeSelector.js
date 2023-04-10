import "./ThemeSelector.css";
import { useTheme } from "../hooks/useTheme";
import themeIcon from "../assets/theme-icon.svg";

const themeColors = ["#58289d", "#84985b", "#f74234"];

export default function ThemeSelector() {
  const { changeColor, changeTheme, theme } = useTheme();

  const toggleTheme = () => {
    changeTheme(theme === "light" ? "dark" : "light");
  };

  console.log(theme);

  return (
    <div className="theme-selector">
      <div className="theme-buttons">
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
      <div className="theme-toggle">
        <img
          onClick={toggleTheme}
          src={themeIcon}
          alt="toggle icon"
          style={{ filter: theme === "dark" ? "invert(100%)" : "invert(10%)" }}
        />
      </div>
    </div>
  );
}
