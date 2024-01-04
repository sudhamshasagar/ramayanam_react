import React, { useState } from "react";
import "./Hero.css"

function Hero(){

  const [ language, setLanguage] = useState('english');

  const contents = [
    { 
      img: "./ramayan2.jpeg",
      enlish_heading: `Welcome to our sacred online space dedicated to Shri Ram and the profound teachings of the Ramayan`,
      english_content: `Shri Ram, the epitome of virtue and perfection, embodies an emotion cherished by millions of Indians who believe in the divine. It is our privilege and joy to present a comprehensive project that unfolds the timeless saga of Ramayan, exploring the life of Shri Ram and delving into the significance of the Guru in our lives.

      Discover the complete Valmiki Ramayan, thoughtfully narrated in Kannada and English, presented in a captivating story format for easy comprehension. Immerse yourself in the spiritual essence by exploring translations of Ram Mantras, details about the sacred places mentioned in the Ramayana, and insights into plants with medicinal uses mentioned in the epic.
      
      Our endeavor extends beyond the narrative, encompassing a global perspective with a list of temples dedicated to Shri Ram around the world. The vision behind this project was inspired by the IITs, and with the grace of Shri Ram, it has evolved into a comprehensive exploration of the divine.
      
      In acknowledging the pivotal role of the Guru, we invite you to delve into the Guru Charitra, explore the Guru Paramapara of Shri Adi Shankaracharya, and learn about the lives of revered figures such as Shri Raghavendra Swamy and Shri Shridhara Swamy.
      
      As we align our efforts with the divine timing of the Pranapratishta of Shri Ram on January 22nd in Ayodhya, we are excited to announce the launch of our website on this auspicious day. May the wisdom, teachings, and blessings of Shri Ram and the Gurus illuminate your path as you explore the sacred content on our home page. Welcome to a journey of spiritual discovery and enlightenment.`,
      kannada_content: `ಶ್ರೀರಾಮನಿಗೆ ಮತ್ತು ರಾಮಾಯಣದ ಆಳವಾದ ಬೋಧನೆಗಳಿಗೆ ಮೀಸಲಾಗಿರುವ ನಮ್ಮ ಯೋಜನೆಯ ಬಗ್ಗೆ ಕಿರುನುಡಿ. 
      ಸದ್ಗುಣ ಮತ್ತು ಪರಿಪೂರ್ಣತೆಯ ಪ್ರತಿರೂಪವಾದ ಶ್ರೀ ರಾಮ, ದೈವಿಕತೆಯನ್ನು ನಂಬುವ ಲಕ್ಷಾಂತರ ಭಾರತೀಯರ ಪಾಲಿಸುವ ಭಾವನೆ ಶ್ರೀ ರಾಮ.
      
      ರಾಮಾಯಣದ ಕಾಲಾತೀತ ಕಥೆಯನ್ನು ಬಿಚ್ಚಿಡುವ, ಶ್ರೀರಾಮನ ಜೀವನವನ್ನು ಅನ್ವೇಷಿಸುವ ಮತ್ತು ನಮ್ಮ ಜೀವನದಲ್ಲಿ ಗುರುವಿನ ಮಹತ್ವವನ್ನು ಅಧ್ಯಯನ ಮಾಡುವ ಸಮಗ್ರ ಯೋಜನೆಯನ್ನು ಪ್ರಸ್ತುತಪಡಿಸುವುದು ನಮ್ಮ ಸೌಭಾಗ್ಯ ಮತ್ತು ಸಂತೋಷವಾಗಿದೆ.
      
      ವಾಲ್ಮೀಕಿ ರಾಮಾಯಣವನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಅನ್ವೇಷಿಸಿ, ಕನ್ನಡ ಮತ್ತು ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ಚಿಂತನಶೀಲವಾಗಿ ವಿವರಿಸಲಾಗಿದೆ, ಸುಲಭವಾಗಿ ಗ್ರಹಿಕೆಗಾಗಿ ಆಕರ್ಷಕ ಕಥಾ ಸ್ವರೂಪದಲ್ಲಿ ಪ್ರಸ್ತುತಪಡಿಸಲಾಗಿದೆ. ರಾಮ ಮಂತ್ರಗಳ ಭಾಷಾಂತರಗಳು, ರಾಮಾಯಣದಲ್ಲಿ ಉಲ್ಲೇಖಿಸಲಾದ ಪವಿತ್ರ ಸ್ಥಳಗಳ ವಿವರಗಳು ಮತ್ತು ಮಹಾಕಾವ್ಯದಲ್ಲಿ ಉಲ್ಲೇಖಿಸಲಾದ ಔಷಧೀಯ ಉಪಯೋಗಗಳೊಂದಿಗೆ ಸಸ್ಯಗಳ ಒಳನೋಟಗಳನ್ನು ಅನ್ವೇಷಿಸುವ ಮೂಲಕ ಆಧ್ಯಾತ್ಮಿಕ ಸಾರದಲ್ಲಿ ನಿಮ್ಮನ್ನು ತೊಡಗಿಸಿಕೊಳ್ಳಿ.
      
      ನಮ್ಮ ಪ್ರಯತ್ನವು ನಿರೂಪಣೆಯನ್ನು ಮೀರಿ ವಿಸ್ತರಿಸುತ್ತದೆ, ಪ್ರಪಂಚದಾದ್ಯಂತ ಶ್ರೀರಾಮನಿಗೆ ಸಮರ್ಪಿತವಾದ ದೇವಾಲಯಗಳ ಪಟ್ಟಿಯೊಂದಿಗೆ ಜಾಗತಿಕ ದೃಷ್ಟಿಕೋನವನ್ನು ಒಳಗೊಂಡಿದೆ. ಈ ಯೋಜನೆಯ ಹಿಂದಿನ ದೃಷ್ಟಿಕೋನವು ಐಐಟಿಗಳಿಂದ ಪ್ರೇರಿತವಾಗಿದೆ ಮತ್ತು ಶ್ರೀರಾಮನ ಅನುಗ್ರಹದಿಂದ ಇದು ದೈವಿಕತೆಯ ಸಮಗ್ರ ಪರಿಶೋಧನೆಯಾಗಿ ವಿಕಸನಗೊಂಡಿದೆ.
      
      ಗುರುವಿನ ಪ್ರಮುಖ ಪಾತ್ರವನ್ನು ಗುರುತಿಸಿ, ಗುರು ಚರಿತ್ರವನ್ನು ಅಧ್ಯಯನ ಮಾಡಲು, ಶ್ರೀ ಆದಿ ಶಂಕರಾಚಾರ್ಯರ ಗುರು ಪರಮಪರಾವನ್ನು ಅನ್ವೇಷಿಸಲು ಮತ್ತು ಶ್ರೀ ರಾಘವೇಂದ್ರ ಸ್ವಾಮಿ ಮತ್ತು ಶ್ರೀ ಶ್ರೀಧರ ಸ್ವಾಮಿಗಳಂತಹ ಪೂಜ್ಯ ವ್ಯಕ್ತಿಗಳ ಜೀವನದ ಬಗ್ಗೆ ತಿಳಿದುಕೊಳ್ಳಲು ನಾವು ನಿಮ್ಮನ್ನು ಆಹ್ವಾನಿಸುತ್ತೇವೆ.
      
      ಜನವರಿ 22 ರಂದು ಅಯೋಧ್ಯೆಯಲ್ಲಿ ಶ್ರೀರಾಮನ ಪ್ರಾಣಪ್ರತಿಷ್ಠೆಯ ದೈವಿಕ ಸಮಯದೊಂದಿಗೆ ನಾವು ನಮ್ಮ ಪ್ರಯತ್ನಗಳನ್ನು ಜೋಡಿಸಿದಂತೆ, ಈ ಮಂಗಳಕರ ದಿನದಂದು ನಮ್ಮ ವೆಬ್‌ಸೈಟ್‌ ಪ್ರಾರಂಭಿಸಲು ನಿರ್ಧರಿಸಿದ್ದೇವೆ.`,

      about_heading_english: `The Ramayan and the Lord Shri Ram`,
      about_heading_kannada: `ರಾಮಾಯಣ`,
      incarnation_heading_english: `The Ten Incarnations of Lord Vishnu`,
      incarnation_heading_kannada: `ವಿಷ್ಣುವಿನ ದಶಾವತಾರಗಳು`,

      about_ramayan_english: `One of the most revered and ancient epics in Hindu literature, narrates the timeless tale of virtue, righteousness, and devotion. Attributed to the sage Valmiki, the Ramayana recounts the life journey of Lord Rama, as he embarks on a quest to rescue his wife, Sita, from the demon king Ravana. Filled with moral teachings, ethical dilemmas, and divine interventions, the Ramayana is a profound guide that extends beyond religious boundaries, imparting lessons on duty, loyalty, and the triumph of good over evil. The characters, including Hanuman, Lakshmana, and Sita, symbolize unwavering devotion, selfless service, and resilience. Through its poetic verses and philosophical depth, The Ramayana not only captures the essence of ancient Indian wisdom but also transcends geographical and cultural boundaries, leaving an indelible mark on literature and philosophy. Its teachings emphasize the importance of virtue, humility, and compassion, making it a perennial source of inspiration for seekers of spiritual and ethical understanding.`
    }
    
  ]

  const Incarnations = [
    {
    id: 1,
    name: `Matsya Avatar`,
    avatar: `Vishnu took the form of a fish to save the ancient scriptures and the sage Manu from a great deluge.`,
    img: "/matsya.jpeg"
   },
   {
    id: 2,
    name: `Kurma Avatar`,
    avatar: `In this avatar, Vishnu incarnated as a tortoise to support Mount Mandara during the churning of the ocean (Samudra Manthan)`,
    img: "/tortise.jpeg"
   },
   {
    id: 3,
    name: `Varaaha Avatar`,
    avatar: `Vishnu assumed the form of a boar to rescue the Earth (personified as the goddess Bhudevi) from the demon Hiranyaksha`,
    img: "/varaha.jpeg"
   },
   {
    id: 4,
    name: `Narasimha Avatar`,
    avatar: `In this fierce form, Vishnu appeared as a half-man, half-lion to protect his devotee Prahlada and defeat the demon king Hiranyakashipu`,
    img: "/nr.jpeg"
   },
   {
    id: 5,
    name: `Vamana Avatar`,
    avatar: `Vishnu incarnated as a dwarf Brahmin to subdue the demon king Bali, who had gained control over the three worlds`,
    img: "/vamana.jpeg"
   },
   {
    id: 6,
    name: `Parashurama Avatar`,
    avatar: `Vishnu took the form of Parashurama, a Brahmin warrior with an axe, to rid the world of oppressive Kshatriya rulers`,
    img: "/pr.jpeg"
   },
   {
    id: 7,
    name: `Shri Ram Avatar`,
    avatar: `Lord Rama, the central figure in the Ramayana, exemplifies ideal human virtues and righteousness`,
    img: "/r.jpeg"
   },
   {
    id: 8,
    name: `Shri Krisha Avatar`,
    avatar: `Krishna played a key role in the Mahabharata, delivering the Bhagavad Gita and displaying divine leelas (pastimes)`,
    img: "/krishna.jpeg"
   },
   {
    id: 9,
    name: `Buddha Avatar`,
    avatar: `Some traditions consider Buddha, Siddhartha Gautama, as an avatar of Vishnu, spreading teachings of compassion and enlightenment`,
    img: "/buddha.jpeg"
   },
   {
    id: 10,
    name: `Kalki Avatar`,
    avatar: `Kalki is prophesied to be the future avatar, riding a white horse and wielding a sword, to restore dharma and bring an end to the current age of darkness`,
    img: "/kalki.jpeg"
   }
]
    return(
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

        <div className="hero-section">
            <div className="image-section">
              {contents.map((content)=>{
                return(
                  <img src={content.img}/>
                )
              })}
            </div>
            <div className="description-section">
              {
                contents.map((content)=>{
                  return(
                    <>
                    <h1>{language === 'english'? content.enlish_heading: ''}</h1>
                    <p>{language === 'english' ? content.english_content : content.kannada_content}</p>
                    </>
                  )
                })
              }
            </div>
        </div>
          <div className="about-ramayan">
              {
                contents.map((content)=>{
                  return (
                    <>
                      <h1>
                        {language=== 'english' ? content.about_heading_english : content.about_heading_kannada}
                      </h1>
                      <p className="about-heading">
                        {language=== 'english' ? content.about_ramayan_english : content.about_ramayan_kannada}
                      </p>
                      <div className="about-ram">
                        <h1>
                          {language=== 'english' ? content.incarnation_heading_english : content.incarnation_heading_kannada}
                        </h1>
                        <div className="incarnation_section">
                          {
                            Incarnations.map((incarnation)=>{
                              return(
                                <div className="incarnations">
                                    <div className="incarnation_image">
                                      <img src={incarnation.img}/>
                                    </div>
                                    <div className="incarnation_info">
                                      <h1>{incarnation.id}. {incarnation.name}</h1>
                                      <p>{incarnation.avatar}</p>
                                    </div>
                                </div>
                              )
                            })
                          }
                        </div>
                      </div>
                    </>
                  )
                })
              }
          </div>
       
      </>
        
    );
}

export default Hero;