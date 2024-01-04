import React, { useState } from 'react';
import "./Guru.css";

function Guru() {
  const [ language, setLanguage] = useState('english');
  const items = [
    {
        img: "./guruImg1.jpeg",
        info_english: "Guru is not merely an individual; it is the radiant light that illuminates the lives of all. In various countries, the reverence accorded to a Guru varies, but in India, the Guru holds a paramount role. Since time immemorial, the Guru has been regarded as a divine entity.There exists a saying that if God were to be displeased with humanity, the Guru has the power to intervene, surpassing even the capabilities of gods. In the spiritual realm, the Guru embodies the essence of Shiva, Vishnu, and Brahma—a trinity of profound significance. Following the Guru's guidance is paramount, as it is believed that obedience to the Guru's teachings is akin to honoring divine directives.The love and favor of a Guru are considered unparalleled. It is said that winning the affection of the Guru opens the door to limitless possibilities in this world. The Guru, therefore, transcends the role of a mere mortal, serving as a conduit to spiritual enlightenment and a guide on the path to realizing one's highest potential.",
        info_kannada: "ಗುರು, 'ಗುರು' ಎಂಬುದು ಎರಡಕ್ಷರದ ಪದವಲ್ಲ. ಗುರು ಎನ್ನುವುದೊಂದು ಭಾವ. ದೈವೀಕ ಗುಣಗಳಿದ್ದು , ಹರಿ ಹರ ಬ್ರಹ್ಮ ಮೊದಲಾದ ದೇವತೆಗಳು ಸಹ ವಂದಿಸುವ ಒಂದು ಜೀವವೆ 'ಗುರು'. ಜೀವನದಲ್ಲಿ ಗುರಿ ಇದ್ದು ಗುರು ಇಲ್ಲವಾದರೆ ಅದು ವ್ಯರ್ಥ. ಒಂದು ವೇಳೆ ದೇವರು ನಮ್ಮ ಮೇಲೆ ಸಿಟ್ಟಿಗೆದ್ದರೆ ಗುರುವು ನಮ್ಮನ್ನು ರಕ್ಷಿಸಬಲ್ಲರು ಆದರೆ, ಗುರುವು ಸಿಟ್ಟಿಗೆದ್ದರೆ ಯಾವ ದೇವತೆಗಳಿಂದಲೂ ನಮ್ಮನ್ನು ರಕ್ಷಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ ",
        heading_english: "Explore our contents on 'Guru'",
        heading_kannada: "'ಗುರು' ಇದರ ಬಗ್ಗೆ ಮತ್ತಷ್ಟು ತಿಳಿಯಲು ಈ ಕೆಳಗಿನ ಆಯ್ಕೆಗಳ ಮೇಲೆ ಕ್ಲಿಕ್‌ ಮಾಡಿ"
    }
  ]

  const cards = [
    {
        name_english: "Shri Guru Charitre",
        name_kannada: "ಶ್ರೀ ಗುರು ಚರಿತ್ರೆ"
    },
    {
        name_english: "Adi Shankaracharyaru",
        name_kannada: "ಆದಿ ಶಂಕರಾಚಾರ್ಯರು"
    },
    {
        name_english: "Shri Shridhara Swamy",
        name_kannada: "ಶ್ರೀ ಶ್ರೀಧರ ಸ್ವಾಮಿ"
    },
    {
        name_english: "Shri Raghavendra Swamy",
        name_kannada: "ಶ್ರೀ ರಾಘವೇಂದ್ರ ಸ್ವಾಮಿ"
    },

  ]
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
    <div className='guru_list_container'>
    {items.map((item)=>(
        <div className="guru-list">
             <div className="guru-image">
                <img src={item.img}/>
             </div>
            <div className="guru-description">
                <p>{language==="english" ? item.info_english : item.info_kannada }</p>
                <p className='g_heading'>{language==="english" ? item.heading_english: item.heading_kannada}</p>
                {cards.map((card)=>(
                    <div className='card'>
                        <h3>{language === "english" ? card.name_english : card.name_kannada }</h3>
                    </div>
                ))}
                
            </div>
        </div>
    ))}
       
    </div>
    </>
  )
}

export default Guru;
