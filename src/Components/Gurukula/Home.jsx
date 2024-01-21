import React, { useState } from 'react';
import './Gurukula.css'
import { Link } from 'react-router-dom';
function Home() {
    const [ language, setLanguage] = useState('english');
    const data =  [
        { 
            img: `Images/guru.jpeg`,
            english: `A guru is not just a source of knowledge but a spiritual guide, embodying the essence of divine wisdom. Often, a guru is considered a manifestation of the holy trinity—Lord Shiva, Vishnu, and Brahma—bringing forth profound teachings that lead seekers on the path of enlightenment.

            Delving into the essence of the Gurucharitra, we unravel a tapestry of spiritual narratives, illustrating the transformative power of a guru in the lives of disciples. This sacred scripture encapsulates the timeless wisdom imparted by gurus through generations, showcasing their role as mentors, guardians, and conduits of divine grace.
            
            Shedding light on the life journey of Shri Adi Shankaracharya, we embark on a pilgrimage through the footsteps of a spiritual luminary. His tireless efforts to revive and strengthen the Vedic tradition, coupled with his philosophical prowess, left an indelible mark on the spiritual landscape. We explore the philosophical doctrines, the establishment of mathas, and the profound influence of Adi Shankaracharya in shaping the course of Hindu philosophy.
            
            Turning our gaze to Shri Raghavendra Swamy, we encounter a saint whose life resonates with miracles and unwavering devotion. His divine interventions and selfless service stand as a testament to the boundless compassion that gurus embody. Through stories and teachings, we unravel the spiritual legacy of Shri Raghavendra Swamy, understanding the significance of surrender and faith in the guru-disciple relationship.
            
            In the luminous aura of Shri Shridhara Swamy, we find solace and wisdom. As a guide on the spiritual journey, his teachings emphasize the importance of love, compassion, and self-realization.Exploring the anecdotes and teachings of Shri Shridhara Swamy, we uncover the profound lessons that illuminate the path to spiritual awakening.
            
            Finally, we trace the parampara of Shri Adi Shankaracharya, a lineage that has preserved and propagated the ancient wisdom across centuries. This lineage serves as a bridge between the ancient scriptures and contemporary seekers, ensuring the continuity of spiritual knowledge and practices.
            
            Thus, in this exploration, we embark on a spiritual odyssey, unraveling the sacred threads that connect gurus, disciples, and the eternal pursuit of self-realization`,
            kannada: `ಗುರುವು ಕೇವಲ ಜ್ಞಾನದ ಮೂಲವಾಗಿರದೆ ಆಧ್ಯಾತ್ಮಿಕ ಮಾರ್ಗದರ್ಶಕ, ದೈವಿಕ ಬುದ್ಧಿವಂತಿಕೆಯ ಸಾರವನ್ನು ಒಳಗೊಂಡಿರುವ ಜೀವ ಮತ್ತು ಭಾವ. ಸಾಮಾನ್ಯವಾಗಿ, ಒಬ್ಬ ಗುರುವನ್ನು ಪವಿತ್ರ ತ್ರಿಮೂರ್ತಿಗಳ ಅಭಿವ್ಯಕ್ತಿ ಎಂದು ಪರಿಗಣಿಸಲಾಗುತ್ತದೆ. ಜ್ಞಾನೋದಯದ ಹಾದಿಯಲ್ಲಿ ಅನ್ವೇಷಕರನ್ನು ಕರೆದೊಯ್ಯುವ ಆಳವಾದ ಬೋಧನೆಗಳನ್ನು ಮುಂದಕ್ಕೆ ತರುತ್ತದೆ.

            ಗುರುಚರಿತ್ರೆಯ ಸಾರವನ್ನು ಪರಿಶೀಲಿಸುತ್ತಾ, ನಾವು ಆಧ್ಯಾತ್ಮಿಕ ನಿರೂಪಣೆಗಳ ವಸ್ತ್ರವನ್ನು ಬಿಚ್ಚಿಡುತ್ತೇವೆ, ಶಿಷ್ಯರ ಜೀವನದಲ್ಲಿ ಗುರುವಿನ ಪರಿವರ್ತಕ ಶಕ್ತಿಯನ್ನು ವಿವರಿಸುತ್ತೇವೆ. ಈ ಪವಿತ್ರ ಗ್ರಂಥವು ತಲೆಮಾರುಗಳ ಮೂಲಕ ಗುರುಗಳು ನೀಡಿದ ಸಮಯಾತೀತ ಬುದ್ಧಿವಂತಿಕೆಯನ್ನು ಒಳಗೊಂಡಿದೆ, ಮಾರ್ಗದರ್ಶಕರು, ರಕ್ಷಕರು ಮತ್ತು ದೈವಿಕ ಅನುಗ್ರಹದ ಮಾರ್ಗಗಳಾಗಿ ಅವರ ಪಾತ್ರವನ್ನು ಪ್ರದರ್ಶಿಸುತ್ತದೆ.
            
            ಶ್ರೀ ಆದಿ ಶಂಕರಾಚಾರ್ಯರ ಜೀವನ ಪಯಣದ ಮೇಲೆ ಬೆಳಕು ಚೆಲ್ಲುತ್ತಾ, ನಾವು ಆಧ್ಯಾತ್ಮಿಕ ಪ್ರಕಾಶಕರ ಹೆಜ್ಜೆಗಳ ಮೂಲಕ ತೀರ್ಥಯಾತ್ರೆಯನ್ನು ಪ್ರಾರಂಭಿಸುತ್ತೇವೆ. ವೈದಿಕ ಸಂಪ್ರದಾಯವನ್ನು ಪುನರುಜ್ಜೀವನಗೊಳಿಸಲು ಮತ್ತು ಬಲಪಡಿಸಲು ಅವರ ದಣಿವರಿಯದ ಪ್ರಯತ್ನಗಳು, ಅವರ ತಾತ್ವಿಕ ಪರಾಕ್ರಮದೊಂದಿಗೆ ಆಧ್ಯಾತ್ಮಿಕ ಭೂದೃಶ್ಯದ ಮೇಲೆ ಅಳಿಸಲಾಗದ ಗುರುತು ಹಾಕಿದವು. ನಾವು ತತ್ವಶಾಸ್ತ್ರದ ಸಿದ್ಧಾಂತಗಳು, ಮಠಗಳ ಸ್ಥಾಪನೆ ಮತ್ತು ಹಿಂದೂ ತತ್ವಶಾಸ್ತ್ರದ ಹಾದಿಯನ್ನು ರೂಪಿಸುವಲ್ಲಿ ಆದಿ ಶಂಕರಾಚಾರ್ಯರ ಆಳವಾದ ಪ್ರಭಾವವನ್ನು ಅನ್ವೇಷಿಸುತ್ತೇವೆ.
            
            ನಮ್ಮ ದೃಷ್ಟಿಯನ್ನು ಶ್ರೀ ರಾಘವೇಂದ್ರ ಸ್ವಾಮಿಗಳ ಕಡೆಗೆ ತಿರುಗಿಸಿದಾಗ, ಪವಾಡಗಳು ಮತ್ತು ಅಚಲವಾದ ಭಕ್ತಿಯಿಂದ ಪ್ರತಿಧ್ವನಿಸುವ ಒಬ್ಬ ಸಂತನನ್ನು ನಾವು ಎದುರಿಸುತ್ತೇವೆ. ಅವರ ದೈವಿಕ ಮಧ್ಯಸ್ಥಿಕೆಗಳು ಮತ್ತು ನಿಸ್ವಾರ್ಥ ಸೇವೆಯು ಗುರುಗಳು ಸಾಕಾರಗೊಳಿಸುವ ಅಪರಿಮಿತ ಕರುಣೆಗೆ ಸಾಕ್ಷಿಯಾಗಿದೆ. ಕಥೆಗಳು ಮತ್ತು ಬೋಧನೆಗಳ ಮೂಲಕ, ನಾವು ಶ್ರೀ ರಾಘವೇಂದ್ರ ಸ್ವಾಮಿಗಳ ಆಧ್ಯಾತ್ಮಿಕ ಪರಂಪರೆಯನ್ನು ಬಿಚ್ಚಿಡುತ್ತೇವೆ, ಗುರು-ಶಿಷ್ಯರ ಸಂಬಂಧದಲ್ಲಿ ಶರಣಾಗತಿ ಮತ್ತು ನಂಬಿಕೆಯ ಮಹತ್ವವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುತ್ತೇವೆ.
            
            ಶ್ರೀ ಶ್ರೀಧರ ಸ್ವಾಮಿಯ ಪ್ರಕಾಶಮಾನ ಪ್ರಭೆಯಲ್ಲಿ ನಾವು ಸಾಂತ್ವನ ಮತ್ತು ಬುದ್ಧಿವಂತಿಕೆಯನ್ನು ಕಾಣುತ್ತೇವೆ. ಆಧ್ಯಾತ್ಮಿಕ ಪ್ರಯಾಣದ ಮಾರ್ಗದರ್ಶಿಯಾಗಿ, ಅವರ ಬೋಧನೆಗಳು ಪ್ರೀತಿ, ಸಹಾನುಭೂತಿ ಮತ್ತು ಸ್ವಯಂ-ಸಾಕ್ಷಾತ್ಕಾರದ ಮಹತ್ವವನ್ನು ಒತ್ತಿಹೇಳುತ್ತವೆ. ಶ್ರೀ ಶ್ರೀಧರ ಸ್ವಾಮಿಗಳ ಉಪಾಖ್ಯಾನಗಳು ಮತ್ತು ಬೋಧನೆಗಳನ್ನು ಅನ್ವೇಷಿಸುತ್ತಾ, ಆಧ್ಯಾತ್ಮಿಕ ಜಾಗೃತಿಯ ಮಾರ್ಗವನ್ನು ಬೆಳಗಿಸುವ ಆಳವಾದ ಪಾಠಗಳನ್ನು ನಾವು ಬಹಿರಂಗಪಡಿಸುತ್ತೇವೆ.
            
            ಅಂತಿಮವಾಗಿ, ನಾವು ಶ್ರೀ ಆದಿ ಶಂಕರಾಚಾರ್ಯರ ಪರಂಪರಯನ್ನು ಗುರುತಿಸುತ್ತೇವೆ, ಇದು ಶತಮಾನಗಳಾದ್ಯಂತ ಧರ್ಮವನ್ನು ಸಂರಕ್ಷಿಸಿ ಮತ್ತು ಪ್ರಚಾರ ಮಾಡಿದ ಪರಂಪರೆಯಾಗಿದೆ. ಈ ವಂಶವು ಪ್ರಾಚೀನ ಗ್ರಂಥಗಳು ಮತ್ತು ಸಮಕಾಲೀನ ಅನ್ವೇಷಕರ ನಡುವೆ ಸೇತುವೆಯಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ, ಆಧ್ಯಾತ್ಮಿಕ ಜ್ಞಾನ ಮತ್ತು ಅಭ್ಯಾಸಗಳ ನಿರಂತರತೆಯನ್ನು ಖಾತ್ರಿಗೊಳಿಸುತ್ತದೆ.`
        }
    ]

    const gurukula = ['Shri Adi Shankaracharya', 'Shri Shridhara Swamy', 'Shri Raghavendra Swamy']

    const data_list_images = [`./Images/shankara.jpg`, `/Images/shridharaswamy.jpg`, `/Images/Raghavendra.jpg`]

    const labels = [
        {
            english: `Click here to view`,
            kannada: `ವೀಕ್ಷಿಸಲು ಇಲ್ಲಿ ಕ್ಲಿಕ್‌ ಮಾಡಿ`
        }
    ]

    function renderContent (content) {
        if(language === 'english'){
            return content.english;
        }else{
            return content.kannada;
        }
    }
    console.log(data[0].english);
  return (
    <>
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
        <div className="routes_gurukula">
                <ul>
                        {gurukula.map((data, index)=>{
                            return ( <Link to={`/gurukula/${data.toLowerCase().replace(/\s+/g, '-')}`}>
                                <div className='routes_container'>
                                    <img src={data_list_images[index]} alt='guruphotos' loading="lazy"/>
                                    <li>{data}</li>
                                    {labels.map((label)=>{
                                        return(
                                            <h5>{language === 'english'? label.english : label.kannada}</h5>
                                        )
                                    })}
                                </div>
                            </Link>
                        )})}
                 </ul>
        </div>
        <div className='gurukula_home'>
            <div className="image-section_gurukula">
                {data.map((content)=>{
                    return(
                        <img src={content.img} alt='Guru' loading="lazy"/>
                    )
                })}
            </div>
            <div className="content-section_gurukula">
                <div className="content_gurukula">
                    <p>{renderContent(data[0])}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home
