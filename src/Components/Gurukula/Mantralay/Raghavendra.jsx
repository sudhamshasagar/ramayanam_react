import React, { useState } from 'react'

function Raghavendra() {
  const [ language, setLanguage] = useState('english');
  const contents = [{
      profile_img: `/Images/Raghavendra.jpg`,
      name_english: `Shri Raghavendra Swamy`,
      name_kannada: `ಶ್ರೀ ರಾಘವೇಂದ್ರ ಸ್ವಾಮಿ`,
      birth_english: `1595, Bhuvanagiri`,
      birth_kannada: `೧೫೯೫, ಭುವನಗಿರಿ`,
      early_life_english: `Shri Raghavendra Swamy, originally named Venkatanatha, came into the world in 1595 in the town of Madhugiri. His father, Thimmanna Bhatta, also known as Thimmannacharya, was not only a scholarly figure but also a skilled musician. The family eventually moved to Kanchi, with Thimmannacharya and his wife Gopikamba. In addition to Venkatanatha, the family included two more members, Gururaja and Venkatamba.

      The significant turning point in Raghavendra Swamy's life occurred in 1624 when he assumed the role of the pontiff at the Kumbhakonam Matha. This institution, previously named Vijayeendra Matha or Dakshinadi Matha, is now renowned as Mantralaya Sri Raghavendra Swamy Matha.
      
      Raghavendra Swamy is often reverently referred to as the "Kaliyuga Kalpavruksha." An extraordinary aspect of his life is the unique promise he made before entering samadhi alive. He pledged to remain alive for the next 450 years, serving as a source of assistance for people during the challenging era of Kaliyuga. Even in contemporary times, individuals who visit Mantralaya experience the resolution of their problems.
      
      The Brindavan image of Mantralaya serves as a visual testament to the sacred and spiritual presence associated with Shri Raghavendra Swamy.`,
      early_life_kannada: `ಶ್ರೀ ರಾಘವೇಂದ್ರ ಸ್ವಾಮಿಗಳು, ಮೂಲತಃ ವೆಂಕಟನಾಥ ಎಂದು ಹೆಸರಿಸಲ್ಪಟ್ಟರು, ಅವರು 1595 ರಲ್ಲಿ ಮಧುಗಿರಿ ಪಟ್ಟಣದಲ್ಲಿ ಜಗತ್ತಿಗೆ ಬಂದರು. ಅವರ ತಂದೆ ತಿಮ್ಮಣ್ಣ ಭಟ್ಟ, ತಿಮ್ಮಣ್ಣಾಚಾರ್ಯ ಎಂದೂ ಕರೆಯುತ್ತಾರೆ, ಅವರು ವಿದ್ವಾಂಸರು ಮಾತ್ರವಲ್ಲದೆ ನುರಿತ ಸಂಗೀತಗಾರರೂ ಆಗಿದ್ದರು. ಕುಟುಂಬವು ಅಂತಿಮವಾಗಿ ತಿಮ್ಮಣ್ಣಾಚಾರ್ಯ ಮತ್ತು ಅವರ ಪತ್ನಿ ಗೋಪಿಕಾಂಬರೊಂದಿಗೆ ಕಂಚಿಗೆ ಸ್ಥಳಾಂತರಗೊಂಡಿತು. ವೆಂಕಟನಾಥನಲ್ಲದೆ, ಕುಟುಂಬವು ಗುರುರಾಜ ಮತ್ತು ವೆಂಕಟಾಂಬ ಎಂಬ ಇಬ್ಬರು ಸದಸ್ಯರನ್ನು ಒಳಗೊಂಡಿತ್ತು.

      ರಾಘವೇಂದ್ರ ಸ್ವಾಮಿಗಳ ಜೀವನದಲ್ಲಿ ಮಹತ್ವದ ತಿರುವು 1624 ರಲ್ಲಿ ಕುಂಭಕೋಣಂ ಮಠದಲ್ಲಿ ಮಠಾಧೀಶರ ಪಾತ್ರವನ್ನು ವಹಿಸಿದಾಗ ಸಂಭವಿಸಿತು. ಈ ಹಿಂದೆ ವಿಜಯೀಂದ್ರ ಮಠ ಅಥವಾ ದಕ್ಷಿಣಾದಿ ಮಠ ಎಂದು ಹೆಸರಿಸಲ್ಪಟ್ಟ ಈ ಸಂಸ್ಥೆಯು ಈಗ ಮಂತ್ರಾಲಯ ಶ್ರೀ ರಾಘವೇಂದ್ರ ಸ್ವಾಮಿ ಮಠ ಎಂದು ಪ್ರಸಿದ್ಧವಾಗಿದೆ.
      
      ರಾಘವೇಂದ್ರ ಸ್ವಾಮಿಯನ್ನು ಸಾಮಾನ್ಯವಾಗಿ "ಕಲಿಯುಗ ಕಲ್ಪವೃಕ್ಷ" ಎಂದು ಪೂಜ್ಯಪೂರ್ವಕವಾಗಿ ಉಲ್ಲೇಖಿಸಲಾಗುತ್ತದೆ. ಸಮಾಧಿಯನ್ನು ಜೀವಂತವಾಗಿ ಪ್ರವೇಶಿಸುವ ಮೊದಲು ಅವರು ಮಾಡಿದ ಅನನ್ಯ ಭರವಸೆ ಅವರ ಜೀವನದ ಅಸಾಧಾರಣ ಅಂಶವಾಗಿದೆ. ಕಲಿಯುಗದ ಸವಾಲಿನ ಯುಗದಲ್ಲಿ ಜನರಿಗೆ ಸಹಾಯದ ಮೂಲವಾಗಿ ಸೇವೆ ಸಲ್ಲಿಸುವ ಅವರು ಮುಂದಿನ 450 ವರ್ಷಗಳವರೆಗೆ ಜೀವಂತವಾಗಿರಲು ಪ್ರತಿಜ್ಞೆ ಮಾಡಿದರು. ಸಮಕಾಲೀನ ಕಾಲದಲ್ಲೂ, ಮಂತ್ರಾಲಯಕ್ಕೆ ಭೇಟಿ ನೀಡುವ ವ್ಯಕ್ತಿಗಳು ತಮ್ಮ ಸಮಸ್ಯೆಗಳ ಪರಿಹಾರವನ್ನು ಅನುಭವಿಸುತ್ತಾರೆ.
      
      ಮಂತ್ರಾಲಯದ ಬೃಂದಾವನ ಚಿತ್ರವು ಶ್ರೀ ರಾಘವೇಂದ್ರ ಸ್ವಾಮಿಗಳಿಗೆ ಸಂಬಂಧಿಸಿದ ಪವಿತ್ರ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಉಪಸ್ಥಿತಿಯ ದೃಶ್ಯ ಸಾಕ್ಷಿಯಾಗಿದೆ.`,
      img: [ `/Images/bn.jpg`, `/Images/bn2.jpg`],
      village_english: `Mantralaya`,
      village_kannada: `ಮಂತ್ರಾಲಯ`,
      about_village_english: `Mantralayam, nestled in the Kurnool district of Andhra Pradesh, India, is a sacred pilgrim village situated on the banks of the Tungabhadra River, sharing its border with Karnataka. Notably, it is renowned as the resting place (samadhi) of the esteemed saint Raghavendra Tirtha, who lived during the 17th century.

      For those planning a visit, Mantralayam is approximately 382 kilometers away from Bangalore and 532 kilometers from Mysore. These distances underscore the pilgrimage's significance, offering devotees and spiritual seekers a serene and spiritually enriched experience in the tranquil surroundings along the Tungabhadra River.`,
      about_village_kannada: `ಭಾರತದ ಆಂಧ್ರಪ್ರದೇಶದ ಕರ್ನೂಲ್ ಜಿಲ್ಲೆಯಲ್ಲಿ ನೆಲೆಸಿರುವ ಮಂತ್ರಾಲಯವು ತುಂಗಭದ್ರಾ ನದಿಯ ದಡದಲ್ಲಿ ನೆಲೆಗೊಂಡಿರುವ ಪವಿತ್ರ ಯಾತ್ರಿಕರ ಗ್ರಾಮವಾಗಿದ್ದು, ಕರ್ನಾಟಕದೊಂದಿಗೆ ತನ್ನ ಗಡಿಯನ್ನು ಹಂಚಿಕೊಳ್ಳುತ್ತದೆ. ಗಮನಾರ್ಹವಾಗಿ, ಇದು 17 ನೇ ಶತಮಾನದಲ್ಲಿ ವಾಸಿಸುತ್ತಿದ್ದ ಗೌರವಾನ್ವಿತ ಸಂತ ರಾಘವೇಂದ್ರ ತೀರ್ಥರ ವಿಶ್ರಾಂತಿ ಸ್ಥಳ (ಸಮಾಧಿ) ಎಂದು ಹೆಸರಾಗಿದೆ.

      ಭೇಟಿ ನೀಡಲು ಯೋಜಿಸುವವರಿಗೆ, ಮಂತ್ರಾಲಯವು ಬೆಂಗಳೂರಿನಿಂದ ಸರಿಸುಮಾರು 382 ಕಿಲೋಮೀಟರ್ ಮತ್ತು ಮೈಸೂರಿನಿಂದ 532 ಕಿಲೋಮೀಟರ್ ದೂರದಲ್ಲಿದೆ. ಈ ದೂರಗಳು ತೀರ್ಥಯಾತ್ರೆಯ ಮಹತ್ವವನ್ನು ಒತ್ತಿಹೇಳುತ್ತವೆ, ಭಕ್ತರು ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಅನ್ವೇಷಕರಿಗೆ ತುಂಗಭದ್ರಾ ನದಿಯ ಉದ್ದಕ್ಕೂ ಇರುವ ಪ್ರಶಾಂತ ಪರಿಸರದಲ್ಲಿ ಪ್ರಶಾಂತ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕವಾಗಿ ಶ್ರೀಮಂತ ಅನುಭವವನ್ನು ನೀಡುತ್ತವೆ.`
  }]


  const listings_english = [ 'Early Life', 'Guru Parampara of Mantralaya',  'Shri Raghavendra Swamy and Appannacharya', 'Mantralaya'];
  const listings_kannada = [ 'ಬಾಲ್ಯ', 'ಮಂತ್ರಾಲಯದ ಗುರುಪರಂಪರೆ', 'ರಾಘವೇಂಧ್ರ ಸ್ವಾಮಿಗಳು ಮತ್ತು ಅಪ್ಪಣ್ಣಚಾರ್ಯರು', 'ಮಂತ್ರಾಲಯ']

  const parampara_english = [
      "Sri Hamsanamaka Paramatma",
      "Sri Chaturmukha Brahma",
      "Sri Sanaka Teertharu",
      "Sri Sanandana Teertharu",
      "Sri Sanatkumara Teertharu",
      "Sri Sanatana Teertharu",
      "Sri Doorvasa Teertharu",
      "Sri Jnananidhi Teertharu",
      "Sri Garuda vahana Teertharu",
      "Sri Kaivalya Teertharu",
      "Sri Jnanesha Teertharu",
      "Sri ParaTeertharu",
      "Sri Satyaprajna Teertharu",
      "Sri Prajna Teertharu",
      "Sri Achyutaprekshacaryaru",
      "Sri Madhwacharyaru",
      "Sri Padmanabha Teertharu",
      "Sri Narahari Teertharu",
      "Sri Madhava Teertharu",
      "Sri Akshobhya Teertharu",
      "Sri Jayateertharu",
      "Shri Vidyadhiraja Teertharu",
      "Shri Kaveendra Teertharu",
      "Shri Vaageesha Teertharu",
      "Shri Ramachandra Teertharu",
      "Shri Vibudhendra Teertharu",
      "Shri Jitamitra Teertharu",
      "Shri Raghunandana Teertharu",
      "Shri Surendra Teertharu",
      "Shri Vijayeendra Teertharu",
      "Sri Sudheendra Teertharu",
      "Sri Raghavendra Teertharu",
      "Sri Yogeendra Teertharu",
      "Sri Sooreendra Teertharu",
      "Sri Sumateendra Teertharu",
      "Sri Upendra Teeertharu",
      "Sri Vadeendra Teertharu",
      "Sri Vasudhendra Teertharu",
      "Sri Varadendra Teertharu",
      "Sri Dheerendra Teertharu",
      "Sri Bhuvanendra Teertharu",
      "Sri Subodhendra Teertharu",
      "Sri Sujanendra Teertaru",
      "Sri Sujnanendra Teertharu",
      "Sri Sudharmendra Teertharu",
      "Sri Sugunendra Teertharu",
      "Sri Suprajnendra Teertharu",
      "Sri Sukrutheendra Teertharu",
      "Sri Susheelendra Teertharu",
      "Sri Suvrateendra Teertharu",
      "Sri Suyameendra Teertharu",
      "Sri Sujayeendra Teertharu",
      "Sri Sushameendra Teertharu",
      "Shri Suyateendra Teertharu",
      "Sri Subudhendra Teertharu"
  ]

  const paramapa_kannada = [
      "ಶ್ರೀ ಹಂಸನಾಮಕ ಪರಮಾತ್ಮ",
      "ಶ್ರೀ ಚತುರ್ಮುಖ ಬ್ರಹ್ಮ",
      "ಶ್ರೀ ಸನಕ ತೀರ್ಥರು",
      "ಶ್ರೀ ಸನಂದನ ತೀರ್ಥರು",
      "ಶ್ರೀ ಸನತ್ಕುಮಾರ ತೀರ್ಥರು",
      "ಶ್ರೀ ಸನಾತನ ತೀರ್ಥರು",
      "ಶ್ರೀ ದೂರ್ವಾಸ ತೀರ್ಥರು",
      "ಶ್ರೀ ಜ್ಞಾನನಿಧಿ ತೀರ್ಥರು",
      "ಶ್ರೀ ಗರುಡ ವಾಹನ ತೀರ್ಥರು",
      "ಶ್ರೀ ಕೈವಲ್ಯ ತೀರ್ಥರು",
      "ಶ್ರೀ ಜ್ಞಾನೇಶ ತೀರ್ಥರು",
      "ಶ್ರೀ ಪರತೀರ್ಥರು",
      "ಶ್ರೀ ಸತ್ಯಪ್ರಜ್ಞಾ ತೀರ್ಥರು",
      "ಶ್ರೀ ಪ್ರಜ್ಞಾ ತೀರ್ಥರು",
      "ಶ್ರೀ ಅಚ್ಯುತಪ್ರೇಕ್ಷಾಾಚಾರ್ಯರು",
      "ಶ್ರೀ ಮಧ್ವಾಚಾರ್ಯರು",
      "ಶ್ರೀ ಪದ್ಮನಾಭ ತೀರ್ಥರು",
      "ಶ್ರೀ ನರಹರಿ ತೀರ್ಥರು",
      "ಶ್ರೀ ಮಾಧವ ತೀರ್ಥರು",
      "ಶ್ರೀ ಅಕ್ಷೋಭ್ಯ ತೀರ್ಥರು",
      "ಶ್ರೀ ಜಯತೀರ್ಥರು",
      "ಶ್ರೀ ವಿದ್ಯಾಧಿರಾಜ ತೀರ್ಥರು",
      "ಶ್ರೀ ಕವೀಂದ್ರ ತೀರ್ಥರು",
      "ಶ್ರೀ ವಾಗೀಶ ತೀರ್ಥರು",
      "ಶ್ರೀ ರಾಮಚಂದ್ರ ತೀರ್ಥರು",
      "ಶ್ರೀ ವಿಬುಧೇಂದ್ರ ತೀರ್ಥರು",
      "ಶ್ರೀ ಜಿತಾಮಿತ್ರ ತೀರ್ಥರು",
      "ಶ್ರೀ ರಘುನಂದನ ತೀರ್ಥರು",
      "ಶ್ರೀ ಸುರೇಂದ್ರ ತೀರ್ಥರು",
      "ಶ್ರೀ ವಿಜಯೀಂದ್ರ ತೀರ್ಥರು",
      "ಶ್ರೀ ಸುಧೀಂದ್ರ ತೀರ್ಥರು",
      "ಶ್ರೀ ರಾಘವೇಂದ್ರ ತೀರ್ಥರು",
      "ಶ್ರೀ ಯೋಗೀಂದ್ರ ತೀರ್ಥರು",
      "ಶ್ರೀ ಸೂರೇಂದ್ರ ತೀರ್ಥರು",
      "ಶ್ರೀ ಸುಮತೀಂದ್ರ ತೀರ್ಥರು",
      "ಶ್ರೀ ಉಪೇಂದ್ರ ತೀರ್ಥರು",
      "ಶ್ರೀ ವದೀಂದ್ರ ತೀರ್ಥರು",
      "ಶ್ರೀ ವಸುಧೇಂದ್ರ ತೀರ್ಥರು",
      "ಶ್ರೀ ವರದೇಂದ್ರ ತೀರ್ಥರು",
      "ಶ್ರೀ ಧೀರೇಂದ್ರ ತೀರ್ಥರು",
      "ಶ್ರೀ ಭುವನೇಂದ್ರ ತೀರ್ಥರು",
      "ಶ್ರೀ ಸುಬೋಧೇಂದ್ರ ತೀರ್ಥರು",
      "ಶ್ರೀ ಸುಜನೇಂದ್ರ ತೀರ್ಥರು",
      "ಶ್ರೀ ಸುಜ್ಞಾನೇಂದ್ರ ತೀರ್ಥರು",
      "ಶ್ರೀ ಸುಧರ್ಮೇಂದ್ರ ತೀರ್ಥರು",
      "ಶ್ರೀ ಸುಗುಣೇಂದ್ರ ತೀರ್ಥರು",
      "ಶ್ರೀ ಸುಪ್ರಜ್ಞೇಂದ್ರ ತೀರ್ಥರು",
      "ಶ್ರೀ ಸುಕೃತೀಂದ್ರ ತೀರ್ಥರು",
      "ಶ್ರೀ ಸುಶೀಲೇಂದ್ರ ತೀರ್ಥರು",
      "ಶ್ರೀ ಸುವ್ರತೀಂದ್ರ ತೀರ್ಥರು",
      "ಶ್ರೀ ಸುಯಮೀಂದ್ರ ತೀರ್ಥರು",
      "ಶ್ರೀ ಸುಜಯೀಂದ್ರ ತೀರ್ಥರು",
      "ಶ್ರೀ ಸುಶಮೀಂದ್ರ ತೀರ್ಥರು",
      "ಶ್ರೀ ಸುಯತೀಂದ್ರ ತೀರ್ಥರು",
      "ಶ್ರೀ ಸುಬುಧೇಂದ್ರ ತೀರ್ಥರು"]

  function renderTitle(index){
    if(language === 'english'){
      return listings_english[index]
    }else{
      return listings_kannada[index]
    }
  }

  function renderParampara(){
    if(language==='english'){
      return parampara_english;
    }else{
      return paramapa_kannada;
    }
  }


  return (
    <div className='home_gurupages'>
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
      <div className="content_allguru">
          <div className="bio">
            <h1 className='earlyLife'>{renderTitle(0)}</h1>
            
            {contents.map((content, index)=>{
              return(
                <>
                  <p>{language === 'english' ? content.early_life_english : content.early_life_kannada}</p>
                  <div className="brindavan_images">
                    {content.img.map((image, index) => (
                      <img key={index} src={image} alt={`Shri Raghavendra Brindavana ${index + 1}`} />
                    ))}
                  </div>
                </>
              )
            })}

            <br></br>

            <h1 className='parampara'>{renderTitle(1)}</h1>
            <div className="paramapa_content">
              <div className="parampara-list">
                <ul>
                  {parampara_english.map((lineage, index) => (
                    <li key={index}>{lineage}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="location">
              {contents.map((content)=>{
                return(
                  <>
                  <h1>{language === 'english'? content.village_english: content.village_kannada}</h1>
                  <p>{language === 'english'? content.about_village_english: content.about_village_kannada}</p>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.4438324263324!2d75.32988167487801!3d14.856440285660751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb941e64a151363%3A0x65c387bbee978068!2sVaradahalli%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1705026509641!5m2!1sen!2sin" width="1200" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </>
                )
              })}
          </div>
          </div>
          <div className="profile_card">
          {contents.map((content)=>{
                return(
                  <>
                    <img src={content.profile_img} alt= 'Raghavendra Swamy'/>
                    <h2>
                      {language=== 'english'? content.name_english : content.name_kannada }
                    </h2>
                    <h3><h3>{language=== 'english'? content.birth_english : content.birth_kannada }</h3></h3>
                  </>
                )
              })}
          </div>
      </div>
      
    </div>
  )
}

export default Raghavendra;
