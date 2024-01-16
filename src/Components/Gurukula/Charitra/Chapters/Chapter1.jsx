import React, { useState } from 'react';
import contents from '../Contents';

function Chapter1() {
    const [language, setLanguage] = useState('english');
  return (
    <>
      <div className="charitra_book">
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
            {contents.map((content)=>{
                return(
                <>
                <h1>
                    {language==='english'? content.chapter1.heading_english: content.chapter1.heading_kannada}
                </h1>
                <p className='unique'>
                    {language==='english'? content.chapter1.english_p1: content.chapter1.kannada_p1}
                </p>
                <h1>
                    {language==='english'? content.chapter1.english_h1: content.chapter1.kannada_h1}
                </h1>
                <div className="para_image">
                    <p>{language==='english'? content.chapter1.english_p2: content.chapter1.kannada_p2}</p>
                    <div className="img-caption">
                        <img src={content.chapter1.img1} alt='Namadharaka'/>
                        <h6>{language==='english'? content.chapter1.img1_title_english: content.chapter1.img1_title_kannada}
                        </h6>
                    </div>
                </div>
                <div className="para_image_reverse">
                    <p>{language==='english'? content.chapter1.english_p3: content.chapter1.kannada_p3}</p>
                    <div className="img-caption">
                        <img src={content.chapter1.img2} alt='Namadharaka'/>
                        <h6>{language==='english'? content.chapter1.img2_title_english: content.chapter1.img2_title_kannada}
                        </h6>
                    </div>
                </div>
                </>
                )
            })}
       </div>
    </>
  )
}

export default Chapter1;

