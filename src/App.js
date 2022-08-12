import { useTranslation } from "react-i18next";

import './App.css';
import MainNavBar from './components/MainNavBar/MainNavBar'

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <MainNavBar />
      <section className="App-content">
        {t('welcome')}
      </section>
    </div>
  );
}

export default App;
