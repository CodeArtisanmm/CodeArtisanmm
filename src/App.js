import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouters from "./routes/AppRouters";
import "./assets/fonts/exo/exo.css";
import "./assets/fonts/fira-sans/fira-sans.css";
import "slick-carousel/slick/slick.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/fontawesome.css";
import "./assets/scss/style.scss";
import { I18nextProvider, useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  return (
    <BrowserRouter>
      <I18nextProvider>
        <AppRouters />
      </I18nextProvider>
    </BrowserRouter>
  );
}

export default App;
