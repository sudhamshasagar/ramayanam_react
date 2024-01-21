import React from 'react'

function JayaMantra() {
    const jayaMantra = [
        {
            kannada: `ಜಯತ್ಯತಿಬಲೋ ರಾಮೋ ಲಕ್ಷ್ಮಣಶ್ಚ ಮಹಾಬಲಃ |
            ರಾಜಾ ಜಯತಿ ಸುಗ್ರೀವೋ ರಾಘವೇಣಾಭಿಪಾಲಿತಃ || ೧ ||
            
            ದಾಸೋಽಹಂ ಕೋಸಲೇಂದ್ರಸ್ಯ ರಾಮಸ್ಯಾಕ್ಲಿಷ್ಟಕರ್ಮಣಃ |
            ಹನುಮಾನ್ ಶತ್ರುಸೈನ್ಯಾನಾಂ ನಿಹಂತಾ ಮಾರುತಾತ್ಮಜಃ || ೨ ||
            
            ನ ರಾವಣಸಹಸ್ರಂ ಮೇ ಯುದ್ಧೇ ಪ್ರತಿಬಲಂ ಭವೇತ್ |
            ಶಿಲಾಭಿಸ್ತು ಪ್ರಹರತಃ ಪಾದಪೈಶ್ಚ ಸಹಸ್ರಶಃ || ೩ ||
            
            ಅರ್ದಯಿತ್ವಾ ಪುರೀಂ ಲಂಕಾಮಭಿವಾದ್ಯ ಚ ಮೈಥಿಲೀಮ್ |
            ಸಮೃದ್ಧಾರ್ಥೋ ಗಮಿಷ್ಯಾಮಿ ಮಿಷತಾಂ ಸರ್ವರಕ್ಷಸಾಮ್ || ೪ ||`

        },
        {
            english: `jayatyatibalō rāmō lakṣmaṇaśca mahābalaḥ |
            rājā jayati sugrīvō rāghavēṇābhipālitaḥ || 1 ||
            
            dāsō:’haṁ kōsalēndrasya rāmasyākliṣṭakarmaṇaḥ |
            hanumān śatrusainyānāṁ nihantā mārutātmajaḥ || 2 ||
            
            na rāvaṇasahasraṁ mē yuddhē pratibalaṁ bhavēt |
            śilābhistu praharataḥ pādapaiśca sahasraśaḥ || 3 ||
            
            ardayitvā purīṁ laṅkāmabhivādya ca maithilīm |
            samr̥ddhārthō gamiṣyāmi miṣatāṁ sarvarakṣasām || 4 ||
            Paschaad Raavana Kumbhakarna hananaṁ hyetaddhi Rāmāyaṇam`
        }
    ]
    return(
        <div className="mantra">
            <div className="mantraDisplay">
                <div className="kannada">
                    {jayaMantra.map((mantra)=>{
                        return(
                            <p>{mantra.kannada}</p>
                        )
                    })}
                </div>
                <div className="english">
                    {jayaMantra.map((mantra)=>{
                        return(
                            <p>{mantra.english}</p>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default JayaMantra
