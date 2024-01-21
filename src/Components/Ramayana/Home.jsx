import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Ramayan.css';

function RamayanaHome() {
  const [language, setLanguage] = useState('english');
  const heading = {
    english: `Click on the Chapter you want to read`,
    kannada: `ನೀವು ಓದಲು ಬಯಸುವ ಕಾಂಡದ ಮೇಲೆ ಕ್ಲಿಕ್‌ ಮಾಡಿ`
  }
  const notices = {
    english: `This Page is Under Construction, All the Kandas will be added in story format with interactive AI images and also in the shloka format soon`,
    kannada: `ಈ ಪುಟವು ನಿರ್ಮಾಣ ಹಂತದಲ್ಲಿದೆ, ಎಲ್ಲಾ ಕಾಂಡಗಳನ್ನು ಸಂವಾದಾತ್ಮಕ AI ಚಿತ್ರಗಳೊಂದಿಗೆ ಕಥೆಯ ಸ್ವರೂಪದಲ್ಲಿ ಮತ್ತು ಶೀಘ್ರದಲ್ಲೇ ಶ್ಲೋಕ ಸ್ವರೂಪದಲ್ಲಿ ಸೇರಿಸಲಾಗುತ್ತದೆ`
  }
  const lists = [
    {
      english: ['Bala Kanda', 
      'Ayodhya Kanda', 
      'Aranya Kanda', 
      ],
      kannada: ['ಬಾಲಕಾಂಡ', 'ಅಯೋಧ್ಯ ಕಾಂಡ', 'ಅರಣ್ಯ ಕಾಂಡ'],
    },
  ];
  
  const selectedList = lists[0][language];
  const currentHeading = language === 'english' ? heading.english : heading.kannada;

  const currentNotice = Object.entries(notices).map(([lang, note], index) => (
  <h2 key={index}>{language === lang ? note : null}</h2>
));

  return (
    <>
      <div className="selection">
        <label>
          <input
            type="radio"
            name="language"
            checked={language === 'english'}
            onChange={() => setLanguage('english')}
          />
          English
        </label>
        <label>
          <input
            type="radio"
            name="language"
            checked={language === 'kannada'}
            onChange={() => setLanguage('kannada')}
          />
          ಕನ್ನಡ
        </label>
      </div>
      <div className="ram-heading">
        <h1>{currentHeading}</h1>
      </div>
      <ul className="ramayana-list">
        {selectedList.map((item, index) => (
          <Link to={`/ramayan/${item.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
            <li>{item}</li>
          </Link>
        ))}
      </ul>
      <div>
        <h2 className='notice'>{currentNotice}</h2>
      </div>
    </>
  );
}

export default RamayanaHome;
