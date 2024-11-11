import React from 'react';
import { useTranslation } from 'react-i18next';

const Languages: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>{t('welcome')}</h2>
      <p>{t('description')}</p>
      <div>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('de')}>Deutsch</button>
        <button onClick={() => changeLanguage('fa')}>فارسی</button>
      </div>
    </div>
  );
};

export default Languages;
