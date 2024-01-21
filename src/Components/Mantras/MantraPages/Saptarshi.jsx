import React from 'react'

function Saptarshi() {
    const saptarshiRamayana = [
        {
            kannada: `ಆದೌ ರಾಮ ತಪೋವನಾದಿಗಮನಂ ಹತ್ವಾ ಮೃಗಂ ಕಾಂಚನಂ
            ವೈದೇಹೀ ಹರಣಂ ಜಟಾಯು ಮರಣಂ ಸುಗ್ರೀವ ಸಂಭಾಷಣಮ್ |
            ವಾಲೀ ನಿಗ್ರಹಣಂ ಸಮುದ್ರತರಣಂ ಲಂಕಾಪುರೀದಾಹನಂ
            ಪಶ್ಚಾದ್ರಾವಣಕುಂಭಕರ್ಣಹನನಂ ಹ್ಯೇತದ್ಧಿ ರಾಮಾಯಣಮ್ ||`

        },
        {
            english: `kaśyapaḥ (bālakāṇḍam) –
            jātaḥ śrīraghunāyakō daśarathānmunyāśrayāttāṭakāṁ
            hatvā rakṣitakauśikakratuvaraḥ kr̥tvāpyahalyāṁ śubhām |
            bhaṅktvā rudraśarāsanaṁ janakajāṁ pāṇau gr̥hītvā tatō
            jitvārdhādhvani bhārgavaṁ punaragāt sītāsamētaḥ purīm || 1 ||
            
            atriḥ (ayōdhyākāṇḍam) –
            dāsyā mantharayā dayārahitayā durbhēditā kaikayī
            śrīrāmaprathamābhiṣēkasamayē mātāpyayācadvarau |
            bhartāraṁ bharataḥ praśāstu dharaṇīṁ rāmō vanaṁ gacchatā-
            -dityākarṇya sa cōttaraṁ na hi dadau duḥkhēna mūrchāṁ gataḥ || 2 ||
            
            
            bharadvājaḥ (āraṇyakāṇḍam) –
            śrīrāmaḥ pitr̥śāsanādvanamagāt saumitrisītānvitō
            gaṅgāṁ prāpya jaṭāṁ nibadhya saguhaḥ saccitrakūṭē vasan |
            kr̥tvā tatra pitr̥kriyāṁ sabharatō datvā:’bhayaṁ daṇḍakē
            prāpyāgastyamunīśvaraṁ taduditaṁ dhr̥tvā dhanuścākṣayam || 3 ||
            
            viśvāmitraḥ (kiṣkindhakāṇḍam) –
            gatvā pañcavaṭīmagastyavacanāddatvā:’bhayaṁ maunināṁ
            chitvā śūrpaṇakhāsyakarṇayugalaṁ trātuṁ samastān munīn |
            hatvā taṁ ca kharaṁ suvarṇahariṇaṁ bhitvā tathā vālinaṁ
            tārāratnamavairirājyamakarōtsarvaṁ ca sugrīvasāt || 4 ||
            
            
            gautamaḥ (sundarakāṇḍam) –
            dūtō dāśarathēḥ salīlamudadhiṁ tīrtvā hanūmān mahān
            dr̥ṣṭvā:’śōkavanē sthitāṁ janakajāṁ datvāṅgulērmudrikām |
            akṣādīnasurānnihatya mahatīṁ laṅkāṁ ca dagdhvā punaḥ
            śrīrāmaṁ ca samētya dēva jananī dr̥ṣṭā mayētyabravīt || 5 ||
            
            jamadagniḥ (yuddhakāṇḍam) –
            rāmō baddhapayōnidhiḥ kapivarairvīrairnalādyairvr̥tō
            laṅkāṁ prāpya sakumbhakarṇatanujaṁ hatvā raṇē rāvaṇam |
            tasyāṁ nyasya vibhīṣaṇaṁ punarasau sītāpatiḥ puṣpakā-
            -rūḍhaḥ san puramāgataḥ sabharataḥ siṁhāsanasthō babhau || 6 ||
            
            vasiṣṭhaḥ (uttarakāṇḍam) –
            śrīrāmō hayamēdhamukhyamakhakr̥t samyak prajāḥ pālayan
            kr̥tvā rājyamathānujaiśca suciraṁ bhūri svadharmānvitau |
            putrau bhrātr̥samanvitau kuśalavau saṁsthāpya bhūmaṇḍalē
            sō:’yōdhyāpuravāsibhiśca sarayūsnātaḥ prapēdē divam || 7 ||
            
            sarvē r̥ṣayaḥ –
            śrīrāmasya kathāsudhātimadhurān ślōkānimānuttamān
            yē śr̥ṇvanti paṭhanti ca pratidinaṁ tē:’ghaughavidhvaṁsinaḥ |
            śrīmantō bahuputrapautrasahitā bhuktvēha bhōgāṁściraṁ
            bhōgāntē tu sadārcitaṁ suragaṇairviṣṇōrlabhantē padam || 8 ||
            
            iti saptarṣi rāmāyaṇam |`
        }
    ]
    return(
        <div className="mantra">
            <div className="mantraDisplay">
                <div className="kannada">
                    {saptarshiRamayana.map((mantra)=>{
                        return(
                            <p>{mantra.kannada}</p>
                        )
                    })}
                </div>
                <div className="english">
                    {saptarshiRamayana.map((mantra)=>{
                        return(
                            <p>{mantra.english}</p>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Saptarshi;
