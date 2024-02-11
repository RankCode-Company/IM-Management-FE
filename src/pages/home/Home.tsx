import React from "react";

import { useTranslation } from "react-i18next";
import LargeButton from "../../components/LargeButton";

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
      <span>{t("home.welcome_message")}</span>
    </div>
  );
};

export default Home;
