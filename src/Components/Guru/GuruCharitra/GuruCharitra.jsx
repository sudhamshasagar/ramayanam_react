import React, { useState } from 'react'

function GuruCharitra() {
    const [language, setLanguage] = useState('english');
  return (
    <>
          <div className="language">
                <label>
                    <input 
                     type="radio"
                     name="language"
                     checked={language === 'english'}
                     onChange={() => setLanguage("english")}
                    />English
                </label>
                <label>
                    <input 
                     type="radio"
                     name="language"
                     checked={language === 'kannada'}
                     onChange={() => setLanguage("kannada")}
                    />ಕನ್ನಡ
                </label>
    </div>
    <div className='guruCharitra'>
      <div className="titleContainer">
        <h3>Section - 1</h3>
      </div>
      <div className="charitra-context">
        <p>ಗಜಾನನ, ನೀನು ನಿನ್ನ ಎರಡು ಅಗಲವಾದ ಕಿವಿಗಳನ್ನ ಅಲುಗಾಡಿಸಿದಾಗ ಹುಟ್ಟುವ ಗಾಳಿಯು ವಿಘ್ನವನ್ನು ನಾಶ ಮಾಡುತ್ತದೆ. ಬ್ರಹ್ಮಾದಿ ದೇವತೆಗಳು ವೇದ, ಶಾಸ್ತ್ರ, ಪುರಾಣಗಳನ್ನು ಹೇಳಿದ ನಿನ್ನನ್ನು ಎಲ್ಲಾ ಕಾರ್ಯಾರಂಭಕ್ಕು ಮುನ್ನ ಪೂಜಿಸುತ್ತಾರೆ. ನೀನು ನನ್ನ ಬುದ್ಧಿಯನ್ನು ಪ್ರಕಾಶಿಸಬೇಕು. ಆಪಸ್ತಂಭ ಶಾಖೆಯ ಕೌಂಡಿಣ್ಯ ಮಹಾಋಷಿ ಗೋತ್ರದ 'ಸಾಖರೆ' ಎಂಬ ಅಡ್ಡ ಹೆಸರಿನ ಸಾಯಂದೇವ ಎಂಬುವನು ನಮ್ಮ ಕುಲದ ಮೂಲ ಪುರುಷನಾಗಿದ್ದು, ಇದೇ ವಂಶದ 'ಗಂಗಾಧರ' ಎಂಬುವವನು ನನ್ನ ತಂದೆ. ನನ್ನ ಹೆಸರು ಸರಸ್ವತಿ. ಅನಂತರ ನನಗೆ 'ಸರಸ್ವತಿ ಗಂಗಾಧರ' ಎಂಬ ಹೆಸರು ಬಂದಿತು.</p>
        <p>ಶ್ರೀ ಗುರುಗಳ ಪ್ರೇರೆಪಣೆಯಂತೆ ಈಗ ನಾನು ಗುರುಚರಿತ್ರೆಯನ್ನು ಹೇಳುತ್ತೇನೆ.</p>
      </div>
    </div>
    </>
  )
}

export default GuruCharitra;
