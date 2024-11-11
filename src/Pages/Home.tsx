import React from 'react';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation(); // Hook to get the `t` function for translations

  return (
    <div>
      <h1>{t('welcome_message')}</h1>
      <p>{t('intro_text')}</p>
      <button>{t('learn_more_button')}</button>
    </div>
  );
};

export default Home;
