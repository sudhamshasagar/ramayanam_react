import React from 'react'

function EkaShlokiRamayanam() {
    const ekaShlokiRamayanam = [
        {
            kannada: `ಆದೌ ರಾಮ ತಪೋವನಾದಿಗಮನಂ ಹತ್ವಾ ಮೃಗಂ ಕಾಂಚನಂ
            ವೈದೇಹೀ ಹರಣಂ ಜಟಾಯು ಮರಣಂ ಸುಗ್ರೀವ ಸಂಭಾಷಣಮ್ |
            ವಾಲೀ ನಿಗ್ರಹಣಂ ಸಮುದ್ರತರಣಂ ಲಂಕಾಪುರೀದಾಹನಂ
            ಪಶ್ಚಾದ್ರಾವಣಕುಂಭಕರ್ಣಹನನಂ ಹ್ಯೇತದ್ಧಿ ರಾಮಾಯಣಮ್ ||`

        },
        {
            english: `Adou Rama tapovanadigamanaṁ hatvaa mṛgam kañchanam
            Vaidehi haraṇaṁ Jatayu maraṇaṁ Sugriva sambhashaṇam
            Vali nigrahaṇaṁ samudrataraṇaṁ Lankāpuri dahanaṁ
            Paschaad Raavana Kumbhakarna hananaṁ hyetaddhi Rāmāyaṇam`
        }
    ]
    return(
        <div className="mantra">
            <div className="mantraDisplay">
                <div className="kannada">
                    {ekaShlokiRamayanam.map((mantra)=>{
                        return(
                            <p>{mantra.kannada}</p>
                        )
                    })}
                </div>
                <div className="english">
                    {ekaShlokiRamayanam.map((mantra)=>{
                        return(
                            <p>{mantra.english}</p>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default EkaShlokiRamayanam;

