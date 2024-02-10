import React from 'react';
import { Link } from 'react-router-dom';
import '../../components/components.css'; // Adjusted for a hypothetical styles folder within src
import { useTranslation } from 'react-i18next';

interface LargeButtonProps {
  path: string;
  label: string;
}

const LargeButton: React.FC<LargeButtonProps> = ({ path, label }) => {
  return (
    <Link to={path} className="large-nav-button grid-item">
      {label}
    </Link>
  );
};

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto p-4 grid-container">
      <LargeButton path="/about" label="About Us" />
      <LargeButton path="/orders" label="Orders" />
      <LargeButton path="/spreadsheet" label="SpreadSheet" />
      <LargeButton path="/spreadsheet" label="Template 1" />
      <LargeButton path="/spreadsheet" label="Template 2" />
      <LargeButton path="/orders" label="Template 3" />
      <span>{t("home.homepage_title")}</span>
    </div>
  );
};

export default Home;