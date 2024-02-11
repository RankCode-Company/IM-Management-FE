import { Link } from "react-router-dom";
import "./components.css"; // Adjusted for a hypothetical styles folder within src
import { useTranslation } from "react-i18next";
interface LargeButtonProps {
  path: string;
  label: string;
  extraClass?: string;
}

const LargeButton: React.FC<LargeButtonProps> = ({
  path,
  label,
  extraClass,
}) => {
  const { t } = useTranslation();
  return (
    <Link to={path} className={`large-nav-button grid-item ${extraClass}`}>
      {t(label)}
    </Link>
  );
};

export default LargeButton;
