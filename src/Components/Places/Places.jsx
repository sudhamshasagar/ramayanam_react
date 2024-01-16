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
,           img: './Images/ayodhya.jpg',
            statenameinEnglish: "Uttar Pradesh",
            statenameinKannada: "ಉತ್ತರ ಪ್ರದೇಶ",
        },
        {
            nameinEnglish: "Chitrakoot",
            nameinKannada: "ಚಿತ್ರಕೂಟ"
,           img: './Images/chitrakoot.png',
            statenameinEnglish: "Uttar Pradesh",
            statenameinKannada: "ಉತ್ತರ ಪ್ರದೇಶ",
        },
        {
            nameinEnglish: "Dandakaranya",
            nameinKannada: "ದಂಡಕಾರಣ್ಯ"
,           img: './Images/Dandakaranya.jpg',
            statenameinEnglish: "Chattisgarh",
            statenameinKannada: "ಛತ್ತೀಸ್‌ಗಡ",
        },
        {
            nameinEnglish: "Janakpur",
            nameinKannada: "ಜನಕಪುರ"
,           img: './Images/jankapur.jpg',
            statenameinEnglish: "Nepal",
            statenameinKannada: "ನೇಪಾಳ",
        },
        {
            nameinEnglish: "Nashik",
            nameinKannada: "ನಾಶಿಕ್"
,           img: './Images/nashik.jpeg',
            statenameinEnglish: "Maharastra",
            statenameinKannada: "ಮಹಾರಾಷ್ಟ್ರ",
        },
        {
            nameinEnglish: "Lepakshi",
            nameinKannada: "ಲೇಪಾಕ್ಷಿ"
,           img: './Images/lepakshi.jpeg',
            statenameinEnglish: "Maharastra",
            statenameinKannada: "ಮಹಾರಾಷ್ಟ್ರ",
        },
        {
            nameinEnglish: "Ram Setu",
            nameinKannada: "ರಾಮ ಸೇತು"
,           img: './Images/ramsetu.jpg',
            statenameinEnglish: "Tamilnadu",
            statenameinKannada: "ತಮಿಳುನಾಡು",
        },
        {
            nameinEnglish: "Anjanadri",
            nameinKannada: "ಅಂಜನಾದ್ರಿ"
,           img: './Images/anjanadri.jpg',
            statenameinEnglish: "Karnataka",
            statenameinKannada: "ಕರ್ನಾಟಕ",
        },
        {
            nameinEnglish: "Prayagraj",
            nameinKannada: "ಪ್ರಯಾಗರಾಜ್"
,           img: './Images/prayagraj.jpg',
            statenameinEnglish: "Uttar Pradesh",
            statenameinKannada: "ಉತ್ತರಪ್ರದೇಶ",
        },
        {
            nameinEnglish: "Kishkindha",
            nameinKannada: "ಕಿಷ್ಕಿಂಧ"
,           img: './Images/kishkindha.jpg',
            statenameinEnglish: "Karnataka",
            statenameinKannada: "ಕರ್ನಾಟಕ",
        },
        {
            nameinEnglish: "Mithila",
            nameinKannada: "ಮಿಥಿಲಾ"
,           img: './Images/mithila.jpg',
            statenameinEnglish: "Bihar",
            statenameinKannada: "ಬಿಹಾರ್",
        },
        {
            nameinEnglish: "Kapila Ashrama",
            nameinKannada: "ಕಪಿಲಾಶ್ರಮ"
,           img: './Images/ka.jpg',
            statenameinEnglish: "Bihar",
            statenameinKannada: "ಬಿಹಾರ್",
        },
        {
            nameinEnglish: "Ashok Vatika",
            nameinKannada: "ಅಶೋಕ ವಾಟಿಕಾ"
,           img: './Images/av.jpg',
            statenameinEnglish: "Sri Lanka",
            statenameinKannada: "ಶ್ರೀಲಂಕಾ",
        },
        {
            nameinEnglish: "Hampi",
            nameinKannada: "ಹಂಪೆ"
,           img: './Images/hampi.jpg',
            statenameinEnglish: "Karnataka",
            statenameinKannada: "ಕರ್ನಾಟಕ",
        },
    ]
    return(
        <div className="placeDisplay">
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