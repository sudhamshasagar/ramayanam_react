import React, { useState } from "react";
import "./Places.css"
import { Link } from "react-router-dom";

function Places(){
    const [ language, setLanguage] = useState('english');
    const title = [
        {
            english: "These are the major places mentioned in Ramayana",
            kannada: "ಇವು ರಾಮಾಯಣದಲ್ಲಿ ಉಲ್ಲೇಖಿಸಲಾದ ಪ್ರಮುಖ ಸ್ಥಳಗಳಾಗಿವೆ"
        }
    ]

    const places = [
        {
            nameinEnglish: "Ayodhya",
            nameinKannada: "ಅಯೋಧ್ಯೆ"
,           img: 'https://www.abhibus.com/blog/wp-content/uploads/2023/11/Ayodhya-Ram-Mandir-History-Opening-Date-How-to-Reach.jpg',
            statenameinEnglish: "Uttar Pradesh",
            statenameinKannada: "ಉತ್ತರ ಪ್ರದೇಶ",
        },
        {
            nameinEnglish: "Chitrakoot",
            nameinKannada: "ಚಿತ್ರಕೂಟ"
,           img: 'https://imgk.timesnownews.com/story/Chitrakoot_0.jpg',
            statenameinEnglish: "Uttar Pradesh",
            statenameinKannada: "ಉತ್ತರ ಪ್ರದೇಶ",
        },
        {
            nameinEnglish: "Dandakaranya",
            nameinKannada: "ದಂಡಕಾರಣ್ಯ"
,           img: 'https://1.bp.blogspot.com/-5F9AQ-1Kj0Y/XTsCWbxm1UI/AAAAAAAAARE/xkQCiHL0F-AxFZwj2odY-oug6_AasCzYgCLcBGAs/s1600/Dandakaranya.jpg',
            statenameinEnglish: "Chattisgarh",
            statenameinKannada: "ಛತ್ತೀಸ್‌ಗಡ",
        },
        {
            nameinEnglish: "Janakpur",
            nameinKannada: "ಜನಕಪುರ"
,           img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Inside_view_of_the_Janki_Mandir_of_Janakpur%2C_Nepal..JPG/800px-Inside_view_of_the_Janki_Mandir_of_Janakpur%2C_Nepal..JPG',
            statenameinEnglish: "Nepal",
            statenameinKannada: "ನೇಪಾಳ",
        },
        {
            nameinEnglish: "Nashik",
            nameinKannada: "ನಾಶಿಕ್"
,           img: 'https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/cover-image-of-Places-To-Visit-In-Nashik_7th-jan.jpg',
            statenameinEnglish: "Maharastra",
            statenameinKannada: "ಮಹಾರಾಷ್ಟ್ರ",
        },
        {
            nameinEnglish: "Lepakshi",
            nameinKannada: "ಲೇಪಾಕ್ಷಿ"
,           img: 'https://images.firstpost.com/wp-content/uploads/2023/11/Lepakshi-Temple-1.jpg?impolicy=website&width=1200&height=900',
            statenameinEnglish: "Maharastra",
            statenameinKannada: "ಮಹಾರಾಷ್ಟ್ರ",
        },
        {
            nameinEnglish: "Ram Setu",
            nameinKannada: "ರಾಮ ಸೇತು"
,           img: 'https://housing.com/news/wp-content/uploads/2023/08/shutterstock_1218479650-1200x700-compressed.jpg',
            statenameinEnglish: "Tamilnadu",
            statenameinKannada: "ತಮಿಳುನಾಡು",
        },
        {
            nameinEnglish: "Anjandri",
            nameinKannada: "ಅಂಜನಾದ್ರಿ"
,           img: 'https://www.shutterstock.com/image-photo/scenic-view-old-jain-mandir-600nw-2345468529.jpg',
            statenameinEnglish: "Karnataka",
            statenameinKannada: "ಕರ್ನಾಟಕ",
        },
        {
            nameinEnglish: "Prayagraj",
            nameinKannada: "ಪ್ರಯಾಗರಾಜ್"
,           img: 'https://www.opindia.com/wp-content/uploads/2023/06/kumbh1_20160422_600_855.jpg',
            statenameinEnglish: "Uttar Pradesh",
            statenameinKannada: "ಉತ್ತರಪ್ರದೇಶ",
        },
        {
            nameinEnglish: "Kishkindha",
            nameinKannada: "ಕಿಷ್ಕಿಂಧ"
,           img: 'https://images.news18.com/ibnkhabar/uploads/2021/04/kishkindha1.jpg?im=FitAndFill,width=1200,height=900',
            statenameinEnglish: "Karnataka",
            statenameinKannada: "ಕರ್ನಾಟಕ",
        },
        {
            nameinEnglish: "Mithila",
            nameinKannada: "ಮಿಥಿಲಾ"
,           img: 'https://www.holamon.cat/sites/default/files/styles/640x320/public/pla/images/2023-03/Fort_of_Darbhanga.jpg?h=924003c4&itok=5VsIlO6v',
            statenameinEnglish: "Bihar",
            statenameinKannada: "ಬಿಹಾರ್",
        },
        {
            nameinEnglish: "Kapil Ashrama",
            nameinKannada: "ಕಪಿಲಾಶ್ರಮ"
,           img: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Kapil_Muni_Temple.jpg',
            statenameinEnglish: "Bihar",
            statenameinKannada: "ಬಿಹಾರ್",
        },
        {
            nameinEnglish: "Ashok Vatika",
            nameinKannada: "ಅಶೋಕ ವಾಟಿಕಾ"
,           img: 'https://www.holidest.com/images/abroad/srilanka/srilanka%20(2).jpg',
            statenameinEnglish: "Sri Lanka",
            statenameinKannada: "ಶ್ರೀಲಂಕಾ",
        },
        {
            nameinEnglish: "Hampi",
            nameinKannada: "ಹಂಪೆ"
,           img: 'https://s3.us-west-1.amazonaws.com/goheritagerun.com/wp-content/uploads/2014/11/28105841/Vittala.jpg',
            statenameinEnglish: "Karnataka",
            statenameinKannada: "ಕರ್ನಾಟಕ",
        },
    ]
    return(
        <div className="placeDisplay">
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
            <div className="placeTitle">
                <h2>{title[0][language]}</h2>
            </div>
            <div className="placeCardContainer">
                {places.map((place) => (
                <div key={place.nameinEnglish} className="placeContainer">
                    <div className="image-container">
                        <img src={place.img} alt={place.nameinEnglish} />
                    </div>
                    <div className="name-container">
                        <h3>{language === "english" ? place.nameinEnglish : place.nameinKannada}</h3>
                        <h4>{language === "english" ? place.statenameinEnglish : place.statenameinKannada}</h4>
                    </div>
                </div>
                ))}
            </div>
            <div className="reference">
                <Link to = 'https://en.wikipedia.org/wiki/Category:Places_in_the_Ramayana' target = "_blank">Click Here For More..</Link>
                <h3>Places Reference: Google</h3>
            </div>
        </div>
    )
}
export default Places;