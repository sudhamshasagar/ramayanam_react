import React, { useState } from 'react'

function Shankara() {
  const [ language, setLanguage] = useState('english');
  const contents = [
    {
      profile_img: `/Images/adi.jpg`,
      name_english: `Shankaracharya`,
      name_kannada: `ಶಂಕರಾಚಾರ್ಯ`,
      early_life_english: `Adi Shankaracharya, also known as Shankara, is widely revered for his profound impact on Indian spirituality and the reestablishment of dharma during the 8th century CE. Believed to be an incarnation of Lord Shiva, Shankaracharya's transformative influence extended across India during his lifetime.

      In the period between 700 CE and 750 CE, Adi Shankaracharya founded four major monastic institutions known as mathas, strategically placed across the country. The recorded heads of these institutions provide varying dates of birth for Shankaracharya, ranging from 491 BCE in Dvārakā to 483 BCE in Sringeri. According to the Kanchi Peetham, Shankara was born in Kali 2593 (509 BCE). These mathas played a crucial role in preserving and disseminating the philosophical teachings of Shankaracharya.
      
      One notable matha established by Adi Shankaracharya is the Shri Ramachandrapura Matha. Appointing his disciple Shri Vidyananda as its first guru, Shankaracharya initiated an unbroken lineage of mathadishas (heads of the matha) that continues to this day.
      
      Beyond his organizational contributions, Shankaracharya made significant strides in literature. His profound philosophical insights were eloquently expressed in various works, such as commentaries on the Vedas, Upanishads, and Brahma Sutras. His compositions, including the famous "Bhaja Govindam" and "Soundarya Lahari," stand as timeless masterpieces, reflecting his deep spiritual understanding and poetic prowess. Adi Shankaracharya's literary legacy continues to inspire seekers and scholars alike, contributing immeasurably to the rich tapestry of Indian philosophical thought.`,
      early_life_kannada: `ಶಂಕರ ಎಂದೂ ಕರೆಯಲ್ಪಡುವ ಆದಿ ಶಂಕರಾಚಾರ್ಯರು ಭಾರತೀಯ ಆಧ್ಯಾತ್ಮಿಕತೆಯ ಮೇಲೆ ಆಳವಾದ ಪ್ರಭಾವವನ್ನು  ಹಾಗೂ ಧರ್ಮದ ಮರುಸ್ಥಾಪನೆಗಾಗಿ ವ್ಯಾಪಕವಾಗಿ 8 ನೇ ಶತಮಾನದ ಸಮಯದಲ್ಲಿ ಶ್ರಮಿಸಿದ್ದರು. ಇವರು ಈಶ್ವರನ ಅವತಾರವೆಂದು ನಂಬಲಾಗಿದೆ, ಶಂಕರಾಚಾರ್ಯರ ಪರಿವರ್ತಕ ಪ್ರಭಾವವು ಅವರ ಜೀವಿತಾವಧಿಯಲ್ಲಿ ಭಾರತದಾದ್ಯಂತ ವಿಸ್ತರಿಸಿತು.

      700 CE ಮತ್ತು 750 CE ನಡುವಿನ ಅವಧಿಯಲ್ಲಿ, ಆದಿ ಶಂಕರಾಚಾರ್ಯರು ನಾಲ್ಕು ಮಠಗಳನ್ನು ಸ್ಥಾಪಿಸಿದರು, ಇವು ಈಗಲೂ ಧರ್ಮದ ಹಾದಿಯಲ್ಲಿ ನಡೆಯುತ್ತ ಮಠದ ಶಿಷ್ಯರಿಗೆ ಜೀವನ ನಡೆಸಲು ಮೌಲ್ಯಗಳನ್ನು ನೀಡುತ್ತಿವೆ. ಈ ಮಠಗಳ ಪ್ರಕಾರ ಶಂಕರಾಚಾರ್ಯರ ಜನ್ಮ ದಿನಾಂಕಗಳನ್ನು ದ್ವಾರಕಾದಲ್ಲಿ 491 BCE , ಶೃಂಗೇರಿಯಲ್ಲಿ 483 BCE,  ಕಂಚಿ ಪೀಠದ ಪ್ರಕಾರ, ಶಂಕರರು 2593 (509 BCE) ನಲ್ಲಿ ಜನಿಸಿದರು ಎನ್ನಲಾಗುತ್ತಿದೆ. ಶಂಕರಾಚಾರ್ಯರ ತಾತ್ವಿಕ ಬೋಧನೆಗಳನ್ನು ಸಂರಕ್ಷಿಸುವಲ್ಲಿ ಮತ್ತು ಪ್ರಸಾರ ಮಾಡುವಲ್ಲಿ ಈ ಮಠಗಳು ನಿರ್ಣಾಯಕ ಪಾತ್ರವನ್ನು ವಹಿಸಿವೆ ಮತ್ತು ವಹಿಸುತ್ತಿವೆ.
      
      ಆದಿ ಶಂಕರಾಚಾರ್ಯರು ಸ್ಥಾಪಿಸಿದ ಒಂದು ಗಮನಾರ್ಹ ಮಠವೆಂದರೆ ಶ್ರೀ ರಾಮಚಂದ್ರಾಪುರ ಮಠ. ತನ್ನ ಶಿಷ್ಯ ಶ್ರೀ ವಿದ್ಯಾನಂದರನ್ನು ಅದರ ಮೊದಲ ಗುರುವಾಗಿ ನೇಮಿಸಿ, ಶಂಕರಾಚಾರ್ಯರು ಮಠಾಧೀಶರ (ಮಠದ ಮುಖ್ಯಸ್ಥರು) ಅವಿಚ್ಛಿನ್ನ ಪರಂಪರೆಯನ್ನು ಪ್ರಾರಂಭಿಸಿದರು, ಅದು ಇಂದಿಗೂ ಮುಂದುವರೆದಿದೆ.
      
      ಶಂಕರಾಚಾರ್ಯರು ಸಾಹಿತ್ಯದಲ್ಲಿಯೂ ಸಹ ಗಮನಾರ್ಹ ಕೊಡುಗೆಗಳನ್ನು ನೀಡಿದರು. ವೇದಗಳು, ಉಪನಿಷತ್ತುಗಳು ಮತ್ತು ಬ್ರಹ್ಮ ಸೂತ್ರಗಳ ವ್ಯಾಖ್ಯಾನಗಳಂತಹ ವಿವಿಧ ಕೃತಿಗಳಲ್ಲಿ ನಿರರ್ಗಳವಾಗಿ ವ್ಯಕ್ತವಾಗಿವೆ. ಪ್ರಸಿದ್ಧವಾದ "ಭಜ ಗೋವಿಂದಂ" ಮತ್ತು "ಸೌಂದರ್ಯ ಲಹರಿ" ಸೇರಿದಂತೆ ಅವರ ಸಂಯೋಜನೆಗಳು ಅವರ ಆಳವಾದ ಆಧ್ಯಾತ್ಮಿಕ ತಿಳುವಳಿಕೆ ಮತ್ತು ಕಾವ್ಯಾತ್ಮಕ ತಿಳುವಳಿಕೆಯನ್ನು ಪ್ರತಿಬಿಂಬಿಸುವ ಕಾಲಾತೀತ ಮೇರುಕೃತಿಗಳಾಗಿ ನಿಂತಿವೆ.`,
      pontiff_title_english: `Shri Raghaveshwara Bharathi Swamiji`,
      pontiff_title_kannada: `ಶ್ರೀ ರಾಘವೇಶ್ವರ ಭಾರತಿ ಸ್ವಾಮಿಜಿ`,
      pontiff_img: `/Images/samsthana.jpg`,
      pontiff_content_english: `Sri Sri Raghaveshwara Bharathi, originally known as Harish Sharma, is an Indian spiritual leader and the current head of Shri Ramachandrapura Mutt in Hosanagara, Shimoga district, Karnataka. He is the 36th leader (mathadhis) of the Shri Ramachandrapura Math, having taken up the role in April 1994 after receiving sannyasa from the previous leader, Jagadguru Sri Ragavendra Bharati Mahaswamiji.

      One of his notable initiatives is the "Kamadugha" program, advocating for the preservation of indigenous cow breeds. In April 2007, he led a nine-day Vishwa Go-Sammelan (World Cow Conference), and later organized the Vishwa Mangala Gou Grama Yatra, a campaign spanning many states that gathered over eight crore signatures petitioning for a complete ban on cow slaughter. This petition was submitted to the then President of India, Mrs. Pratibha Patil. The World Cow Conference drew participation from over 20 lakh devotees of indigenous cow enthusiasts from 11 countries.

      Sri Sri Raghaveshwara Bharathi initiated the Gouswarga project in May 2018, managed by the Kamadugha Trust under the Sri Ramachandrapura Matha. This project aims to protect and nurture indigenous cows in a natural environment, with 15 different breeds and a capacity for around a thousand cattle. The Goushala provides around 2.5 acres of freely grazing pasture, and the cows roam freely in a spacious and serene enclosure, choosing shelter as they please.

      In addition to his efforts for cow preservation, Sri Sri Raghaveshwara Bharathi is involved in the VVV initiative, an educational effort to preserve and promote India's traditional arts, languages, and the practices of Sanatana Dharma (eternal righteousness). The Vishnugupta Vishwa Vidyapeetham, named after the great guru Chanakya, seeks to blend modern and traditional education to impart knowledge to students, with the goal of reclaiming the lost heritage of Takshashila in the country.`,
      pontiff_content_kannada: `ಶ್ರೀ ಶ್ರೀ ರಾಘವೇಶ್ವರ ಭಾರತಿ, ಪೂರ್ವಾಶ್ರಮದ ಹೆಸರು ಹರೀಶ್‌ ಶರ್ಮಾ, ಇವರು ಹೊಸನಗರದಲ್ಲಿರುವ ಶ್ರೀ ರಾಮಚಂದ್ರಾಪುರ ಮಠದ ಪ್ರಸ್ತುತ ಮಠಾಧಿಪತಿಗಳಾಗಿದ್ದಾರೆ. ಇವರು ಶ್ರೀ ರಾಮಚಂದ್ರಾಪುರ ಮಠದ 36 ನೇ ಮಠಾಧೀಶರಾದ ಜಗದ್ಗುರು ಶ್ರೀ ರಾಘವೇಂದ್ರ ಭಾರತೀ ಮಹಾಸ್ವಾಮೀಜಿಯವರಿಂದ ೇಪ್ರಿಲ್‌ 1994 ರಲ್ಲಿ ಸನ್ಯಾಸ ಸ್ವೀಕರಿಸಿದರು. ಸ್ಥಳೀಯ ಹಸುವಿನ ತಳಿಗಳ ಸಂರಕ್ಷಣೆಗಾಗಿ ಪ್ರತಿಪಾದಿಸುವ "ಕಾಮದುಘಾ" ಕಾರ್ಯಕ್ರಮವು ಅವರ ಗಮನಾರ್ಹ ಉಪಕ್ರಮಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ. ಏಪ್ರಿಲ್ 2007 ರಲ್ಲಿ, ಅವರು ಒಂಬತ್ತು ದಿನಗಳ ವಿಶ್ವ ಗೋ-ಸಮ್ಮೇಳನ  ನೇತೃತ್ವವನ್ನು ವಹಿಸಿದ್ದರು, ಮತ್ತು ನಂತರ ವಿಶ್ವ ಮಂಗಲ ಗೋ ಗ್ರಾಮ ಯಾತ್ರೆಯನ್ನು ಆಯೋಜಿಸಿದರು, ಇದು ಗೋಹತ್ಯೆಯ ಸಂಪೂರ್ಣ ನಿಷೇಧಕ್ಕಾಗಿ ಎಂಟು ಕೋಟಿಗೂ ಹೆಚ್ಚು ಸಹಿಗಳನ್ನು ಒಟ್ಟುಗೂಡಿಸಿ ಅನೇಕ ರಾಜ್ಯಗಳನ್ನು ವ್ಯಾಪಿಸಿತು. ಈ ಮನವಿಯನ್ನು ಅಂದಿನ ಭಾರತದ ರಾಷ್ಟ್ರಪತಿ ಶ್ರೀಮತಿ ಪ್ರತಿಭಾ ಪಾಟೀಲ್ ಅವರಿಗೆ ಸಲ್ಲಿಸಲಾಯಿತು. ವಿಶ್ವ ಗೋವಿನ ಸಮ್ಮೇಳನದಲ್ಲಿ 11 ದೇಶಗಳ ಸ್ಥಳೀಯ ಗೋವಿನ ಉತ್ಸಾಹಿಗಳು ಮತ್ತು 20 ಲಕ್ಷಕ್ಕೂ ಹೆಚ್ಚು ಭಕ್ತರು ಭಾಗವಹಿಸಿದ್ದರು. ಶ್ರೀ ಶ್ರೀ ರಾಘವೇಶ್ವರ ಭಾರತಿಯವರು ಮೇ 2018 ರಲ್ಲಿ ಶ್ರೀ ರಾಮಚಂದ್ರಾಪುರ ಮಠದ ಅಡಿಯಲ್ಲಿ ಕಾಮದುಘಾ ಟ್ರಸ್ಟ್ ನಿರ್ವಹಿಸುವ ಗೌಸ್ವರ್ಗ ಯೋಜನೆಯನ್ನು ಪ್ರಾರಂಭಿಸಿದರು. ಈ ಯೋಜನೆಯು 15 ವಿವಿಧ ತಳಿಗಳು ಮತ್ತು ಸುಮಾರು ಒಂದು ಸಾವಿರ ಜಾನುವಾರುಗಳನ್ನು ಹೊಂದಿರುವ ನೈಸರ್ಗಿಕ ಪರಿಸರದಲ್ಲಿ ಸ್ಥಳೀಯ ಹಸುಗಳನ್ನು ರಕ್ಷಿಸಲು ಮತ್ತು ಪೋಷಿಸುವ ಗುರಿಯನ್ನು ಹೊಂದಿದೆ. ಗೋಶಾಲೆಯು ಸುಮಾರು 2.5 ಎಕರೆಗಳಷ್ಟು ಜಾಗದಲ್ಲಿ ಗೋವುಗಳನ್ನು ಕಟ್ಟದೇ,  ಮುಕ್ತವಾಗಿ ಮೇಯಲು ಮತ್ತು ವಿಶಾಲವಾದ, ಪ್ರಶಾಂತವಾದ ಆವರಣದಲ್ಲಿ ಮುಕ್ತವಾಗಿ ತಿರುಗಾಡುತ್ತವೆ, ತಮಗೆ ಬೇಕಾದಂತೆ ಆಶ್ರಯವನ್ನು ಆರಿಸಿಕೊಳ್ಳುತ್ತವೆ. ಗೋಸಂರಕ್ಷಣೆಯ ಜೊತೆಗೆ, ಶ್ರೀ ಶ್ರೀ ರಾಘವೇಶ್ವರ ಭಾರತಿ ಅವರು ವಿವಿವಿ ಉಪಕ್ರಮದಲ್ಲಿ ತೊಡಗಿಸಿಕೊಂಡಿದ್ದಾರೆ, ಇದು ಭಾರತದ ಸಾಂಪ್ರದಾಯಿಕ ಕಲೆಗಳು, ಭಾಷೆಗಳು ಮತ್ತು ಸನಾತನ ಧರ್ಮದ ಆಚರಣೆಗಳನ್ನು (ಶಾಶ್ವತ ಸದಾಚಾರ) ಸಂರಕ್ಷಿಸುವ ಮತ್ತು ಉತ್ತೇಜಿಸುವ ಶೈಕ್ಷಣಿಕ ಪ್ರಯತ್ನವಾಗಿದೆ. ಮಹಾನ್ ಗುರು ಚಾಣಕ್ಯನ ಹೆಸರಿನಲ್ಲಿರುವ ವಿಷ್ಣುಗುಪ್ತ ವಿಶ್ವ ವಿದ್ಯಾಪೀಠವು, ದೇಶದಲ್ಲಿ ಕಳೆದುಹೋದ ತಕ್ಷಶಿಲೆಯ ಪರಂಪರೆಯನ್ನು ಮರಳಿ ಪಡೆಯುವ ಗುರಿಯೊಂದಿಗೆ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಜ್ಞಾನವನ್ನು ನೀಡಲು ಆಧುನಿಕ ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ಶಿಕ್ಷಣವನ್ನು ಮಿಶ್ರಣದ ಪ್ರಯತ್ನವಾಗಿದೆ.`
    }
  ]
  const mutts = [
    {
    name_english: `Dakshinamnaya Sringeri Sharada Peeta`,
    name_kannada: `ದಕ್ಷಿಣಾಮ್ನಾಯ ಶೃಂಗೇರಿ ಶಾರದಾ ಪೀಠ`,
    img: `/Images/sm.jpg`,
    pontiff_name_english: `Pontiff: Sri Sri Vidhushekhara Bharathi Swamiji`,
    pontiff_name_kannada: `ಮಠಾಧಿಪತಿಗಳು: ಶ್ರೀ ಶ್ರೀ ವಿಧುಃಶೇಖರ ಭಾರತಿ ಸ್ವಾಮೀಜಿ`,
  },
  {
    name_english: `Uttaramnaya Jyotir Peeta`,
    name_kannada: ` ಉತ್ತರಾಮ್ನಾಯ ಜ್ಯೋತಿರ್ಪೀಠ`,
    img: `/Images/um.jpg`,
    pontiff_name_english: `Pontiff: Swami Avimukteshwaranand`,
    pontiff_name_kannada: `ಮಠಾಧಿಪತಿಗಳು: ಸ್ವಾಮಿ ಅವಿಮುಕ್ತೇಶ್ವರಾನಂದ`,
  },
  {
    name_english: `Paschimamnaya Sharada Peeta`,
    name_kannada: `ಪಶ್ಚಿಮಾಮ್ನಾಯ ಶಾರದಾ ಪೀಠ`,
    img: `/Images/pm.jpg`,
    pontiff_name_english: `Swami Sadananda Saraswati`,
    pontiff_name_kannada: `ಮಠಾಧಿಪತಿಗಳು: ಸ್ವಾಮಿ ಸದಾನಂದ ಸರಸ್ವತಿ`,
  },
  {
    name_english: `Purvamnaya Govardhana Peeta`,
    name_kannada: `ಪೂರ್ವಾಮ್ನಾಯ ಗೋವರ್ಧನ ಪೀಠ`,
    img: `/Images/gm.jpg`,
    pontiff_name_english: `Swami Nishchalananda Saraswati`,
    pontiff_name_kannada: `ಮಠಾಧಿಪತಿಗಳು: ಸ್ವಾಮಿ ನಿಶ್ಚಲಾನಂದ ಸರಸ್ವತಿ`,
  }
] 
  const listings_english = [ 'Early Life', 'The Four Amnaya Peethas Established by Adi Shankaracharya',  'Shri Ramachandrapura Matha', 'Mantralaya'];
  const listings_kannada = [ 'ಬಾಲ್ಯ', 'ಆದಿ ಶಂಕರಾಚಾರ್ಯರು ಸ್ಥಾಪಿಸಿದ ನಾಲ್ಕು ಆಮ್ನಯ ಪೀಠಗಳು', 'ಶ್ರೀ ರಾಮಚಂದ್ರಾಪುರ ಮಠ', 'ಮಂತ್ರಾಲಯ']

  function renderTitle(index){
    if(language === 'english'){
      return listings_english[index]
    }else{
      return listings_kannada[index]
    }
  }

  return (
    <div className="home_gurupages">
        <div className="selection">
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
          />Kannada
        </label>
      </div>
      <div className="bio">
        <div className="content_profile">
            <div className="content_p">
                <h1 className='earlyLife'>{renderTitle(0)}</h1>
                {contents.map((content, index)=>{
                return(
                  <p>{language === 'english' ? content.early_life_english : content.early_life_kannada}</p>
                )
                })}
            </div>
            <div className="profile_card">
            {contents.map((content)=>{
                    return(
                    <>
                        <img src={content.profile_img} alt= 'Adi Shankaracharya' loading="lazy"/>
                        <h2>
                        {language=== 'english'? content.name_english : content.name_kannada }
                        </h2>
                        <h3><h3>{language=== 'english'? content.birth_english : content.birth_kannada }</h3></h3>
                    </>
                    )
                })}
          </div>
        </div>
        <div className="mutt">
          <h1 >{renderTitle(1)}</h1>
              <div className="mutts-container">
                {mutts.map((mutt, index) => (
                  <div className="mutt-card" key={index}>
                    <img src={mutt.img} alt='Mutt' className="mutt-image" loading="lazy"/>
                    <h4>{language==='english'? mutt.name_english: mutt.name_kannada}</h4>
                  </div>
                ))}
              </div>
        </div>
        <h1 className='mutt_title'>{renderTitle(2)}</h1>
        <div className="present-pontiff">
            <div className="pontiff_title">
                  {contents.map((content)=>{
                    return(
                      <h2>
                        {language === 'english'? content.pontiff_title_english:content.pontiff_title_kannada}
                      </h2>
                    )
                  })}
            </div>
            <div className="pontiff_content_img rcm">
                <div className="pontiff_content">
                    {contents.map((content)=>{
                      return(
                        <p>{language==='english'? content.pontiff_content_english: content.pontiff_content_kannada}</p>
                      )
                    })}
                </div>
                <div className="pontiff_img">
                    {contents.map((content)=>{
                      return(
                        <img src={content.pontiff_img} alt='pontiff' loading="lazy"/>
                      )
                    })}
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Shankara
