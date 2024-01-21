import React from 'react'
function Ramastakam() {

    const ramastakam = [
        {
            kannada: `ಭಜೇ ವಿಶೇಷಸುಂದರಂ ಸಮಸ್ತಪಾಪಖಂಡನಮ್ |
                      ಸ್ವಭಕ್ತಚಿತ್ತರಂಜನಂ ಸದೈವ ರಾಮಮದ್ವಯಮ್ || ೧ ||
                    
                      ಜಟಾಕಲಾಪಶೋಭಿತಂ ಸಮಸ್ತಪಾಪನಾಶಕಮ್ |
                      ಸ್ವಭಕ್ತಭೀತಿಭಂಜನಂ ಭಜೇ ಹ ರಾಮಮದ್ವಯಮ್ || ೨ ||
                    
                      ನಿಜಸ್ವರೂಪಬೋಧಕಂ ಕೃಪಾಕರಂ ಭವಾಽಪಹಮ್ |
                      ಸಮಂ ಶಿವಂ ನಿರಂಜನಂ ಭಜೇ ಹ ರಾಮಮದ್ವಯಮ್ || ೩ ||
                    
                      ಸದಾ ಪ್ರಪಂಚಕಲ್ಪಿತಂ ಹ್ಯನಾಮರೂಪವಾಸ್ತವಮ್ |
                      ನಿರಾಕೃತಿಂ ನಿರಾಮಯಂ ಭಜೇ ಹ ರಾಮಮದ್ವಯಮ್ || ೪ ||
                    
                      ನಿಷ್ಪ್ರಪಂಚ ನಿರ್ವಿಕಲ್ಪ ನಿರ್ಮಲಂ ನಿರಾಮಯಮ್ |
                      ಚಿದೇಕರೂಪಸಂತತಂ ಭಜೇ ಹ ರಾಮಮದ್ವಯಮ್ || ೫ ||
                    
                      ಭವಾಬ್ಧಿಪೋತರೂಪಕಂ ಹ್ಯಶೇಷದೇಹಕಲ್ಪಿತಮ್ |
                      ಗುಣಾಕರಂ ಕೃಪಾಕರಂ ಭಜೇ ಹ ರಾಮಮದ್ವಯಮ್ || ೬ ||
                    
                      ಮಹಾಸುವಾಕ್ಯಬೋಧಕೈರ್ವಿರಾಜಮಾನವಾಕ್ಪದೈಃ |
                      ಪರಂ ಚ ಬ್ರಹ್ಮ ವ್ಯಾಪಕಂ ಭಜೇ ಹ ರಾಮಮದ್ವಯಮ್ || ೭ ||
                    
                      ಶಿವಪ್ರದಂ ಸುಖಪ್ರದಂ ಭವಚ್ಛಿದಂ ಭ್ರಮಾಪಹಮ್ |
                      ವಿರಾಜಮಾನದೈಶಿಕಂ ಭಜೇ ಹ ರಾಮಮದ್ವಯಮ್ || ೮ ||
                    
                      ರಾಮಾಷ್ಟಕಂ ಪಠತಿ ಯಃ ಸುಖದಂ ಸುಪುಣ್ಯಂ
                      ವ್ಯಾಸೇನ ಭಾಷಿತಮಿದಂ ಶೃಣುತೇ ಮನುಷ್ಯಃ |
                      ವಿದ್ಯಾಂ ಶ್ರಿಯಂ ವಿಪುಲಸೌಖ್ಯಮನಂತಕೀರ್ತಿಂ
                      ಸಂಪ್ರಾಪ್ಯ ದೇಹವಿಲಯೇ ಲಭತೇ ಚ ಮೋಕ್ಷಮ್ || ೯ || `

        },
        {
            english: `bhaje visesasundaram samastapapakhandanam ।
                      svabhaktacittaranjanam sadaiva ramamadvayam ॥ 1 ॥
                    
                      jatakalapasobhitam samastapapanasakam ।
                      svabhaktabhitibhanjanam bhaje ha ramamadvayam ॥ 2 ॥
                    
                      nijasvarupabodhakam krpakaram bhavapaham ।
                      samam sivam niranjanam bhaje ha ramamadvayam ॥ 3 ॥
                      
                      sahaprapancakalpitam hyanamarupavastavam ।
                      nirakrtim niramayam bhaje ha ramamadvayam ॥ 4 ॥

                      nisprapancanirvikalpanirmalam niramayam ॥
                      cidekarupasantatam bhaje ha ramamadvayam ॥ 5 ॥

                      bhavabdhipotarupakam hyasesadehakalpitam ।
                      gunakaram krpakaram bhaje ha ramamadvayam ॥ 6 ॥

                      mahavakyabodhakairvirajamanavakpadaih ।
                      parabrahma vyapakam bhaje ha ramamadvayam ॥ 7 ॥

                      sivapradam sukhapradam bhavacchidam bhramapaham ।
                      virajamanadaisikam bhaje ha ramamadvayam ॥ 8 ॥

                      ramastakam pathati yah sukaram supunyam
                      vyasena bhasitamidam srnute manusyah ।
                      vidyam sriyam vipulasaukhyamanantakirtim
                      samprapya dehavilaye labhate ca moksam ॥ 9 ॥`
        }
    ]
    return(
        <div className="mantra">
            <div className="mantraDisplay">
                <div className="kannada">
                    {ramastakam.map((mantra)=>{
                        return(
                            <p>{mantra.kannada}</p>
                        )
                    })}
                </div>
                <div className="english">
                    {ramastakam.map((mantra)=>{
                        return(
                            <p>{mantra.english}</p>
                        )
                    })}
                </div>
            </div>
            
        </div>
    )
}

export default Ramastakam;
