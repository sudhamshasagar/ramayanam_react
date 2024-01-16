import React, { useState } from 'react'


function Shridhara() {
  const [ language, setLanguage] = useState('english');

  const listings_english = [ 'Early Life', 'Rare Video Footage of Shridhara Swamy',  'Promises of Shridhara Swamy', 'Miracles By Shridhara Swamy'];
  const listings_kannada = [ 'ಬಾಲ್ಯ', 'ಶ್ರೀಧರ ಸ್ವಾಮಿಗಳ ಅಪರೂಪದ ವೀಡಿಯೋ', 'ಶ್ರೀಧರ ಸ್ವಾಮಿಗಳ ಪ್ರಮಾಣ', 'ಶ್ರೀಧರ ಸ್ವಾಮಿಗಳ ಕೆಲವು ಮಹಿಮೆಗಳು/ಪವಾಡಗಳು']


  const contents = [
    {
      early_life_english: `Shridhara Swamy was born on December 7, 1908, in Lad Chincholi, into a Brahmin family. His parents were Narayan Rao and Kamala Bai, and he had a brother named Triambak. Tragedy struck at the age of 3 when his father passed away, leaving his mother and brother to care for the family. Shridhara Swamy is believed to be the incarnation of Shri Dattatreya, and his birth coincided with Datta Jayanthi, as the chariot with Shri Datta passed by his house.

      Despite facing challenges, Shridhara Swamy's devotion to Shri Ram was unwavering. He received his primary education in Hyderabad. During an illness, he followed his mother's advice to chant Ram nam continuously. Surprisingly, during exams, he secured the first rank without reading anything.
      
      Following the death of his mother, Shridhara Swamy moved to Gulbarga to live with his aunt and continued his education. After spending some years there, he journeyed to Pune, residing in an orphanage. His quest for spiritual enlightenment grew, leading him to Sajjangad, inspired by the suggestion of Mr. Palnitkar. There, he sought spiritual knowledge at the place where Shri Samarth Ramdas had resided nearly three hundred years ago.`,
      early_life_kannada: `ಶ್ರೀಧರ ಸ್ವಾಮಿಯವರು ಡಿಸೆಂಬರ್ ೭, 1908 ರಂದು ಲಾಡ್ ಚಿಂಚೋಳಿಯಲ್ಲಿ ಬ್ರಾಹ್ಮಣ ಕುಟುಂಬದಲ್ಲಿ ಜನಿಸಿದರು. ಅವರ ಪೋಷಕರು ನಾರಾಯಣರಾವ್ ಮತ್ತು ಕಮಲಾ ಬಾಯಿ, ಮತ್ತು ಅವರಿಗೆ ತ್ರಯಂಬಕ ಎಂಬ ಸಹೋದರನಿದ್ದರು. 3 ನೇ ವಯಸ್ಸಿನಲ್ಲಿ ತಂದೆ ತೀರಿಕೊಂಡಾಗ ಕುಟುಂಬದ ಜವಾಬ್ದಾರಿ ತಾಯಿ ಮತ್ತು ಸಹೋದರನ ಮೇಲಾಯಿತು. ಶ್ರೀಧರ ಸ್ವಾಮಿಯು ಶ್ರೀ ದತ್ತಾತ್ರೇಯನ ಅವತಾರವೆಂದು ನಂಬಲಾಗಿದೆ ಮತ್ತು ಅವರ ಜನ್ಮವು ದತ್ತ ಜಯಂತಿಯ ದಿನ ಶ್ರೀ ದತ್ತಾತ್ರೇಯರ ರಥವು ಅವರ ಮನೆಯಮುಂದೆ ಹಾದುಹೋಗುವ ಸಮಯದಲ್ಲಾಯಿತು.

      ಶ್ರೀಧರ ಸ್ವಾಮಿಗಳಲ್ಲಿ ಶ್ರೀರಾಮನ ಭಕ್ತಿ ಅಚಲವಾಗಿತ್ತು. ಅವರು ತಮ್ಮ ಪ್ರಾಥಮಿಕ ಶಿಕ್ಷಣವನ್ನು ಹೈದರಾಬಾದ್‌ನಲ್ಲಿ ಪಡೆದರು. ಒಮ್ಮೆ ಅನಾರೋಗ್ಯದ ಸಮಯದಲ್ಲಿ, ಅವರು ನಿರಂತರವಾಗಿ ರಾಮ ನಾಮವನ್ನು ಜಪಿಸಿ ಏನನ್ನೂ ಓದದೇ ಪರೀಕ್ಷೆಯಲ್ಲಿ ಮೊದಲ ಸ್ಥಾನ ಪಡೆದಿದ್ದರು.
      
      ತನ್ನ ತಾಯಿಯ ಮರಣದ ನಂತರ, ಶ್ರೀಧರ ಸ್ವಾಮಿ ತನ್ನ ಚಿಕ್ಕಮ್ಮನೊಂದಿಗೆ ವಾಸಿಸಲು ಗುಲ್ಬರ್ಗಕ್ಕೆ ತೆರಳಿದರು ಮತ್ತು ತಮ್ಮ ಶಿಕ್ಷಣವನ್ನು ಮುಂದುವರೆಸಿದರು. ಅಲ್ಲಿ ಕೆಲವು ವರ್ಷಗಳನ್ನು ಕಳೆದ ನಂತರ ಅವರು ಪುಣೆಗೆ ಪ್ರಯಾಣ ಬೆಳೆಸಿ ಅನಾಥಾಶ್ರಮದಲ್ಲಿ ವಾಸಿಸುತ್ತಿದ್ದರು. ಆಧ್ಯಾತ್ಮಿಕ ಜೀವನದೆಡೆಗೆ ಅವರ ಅನ್ವೇಷಣೆಯು ಬೆಳೆಯಿತು, ಶ್ರೀ ಪಲ್ನಿಟ್ಕರ್ ಅವರ ಸಲಹೆಯಿಂದ ಪ್ರೇರಿತರಾಗಿ ಅವರು ಸಜ್ಜನಗಡಕ್ಕೆ ತೆರಳಿದರು. ಅಲ್ಲಿ ಅವರು ಸುಮಾರು ಮುನ್ನೂರು ವರ್ಷಗಳ ಹಿಂದೆ ಶ್ರೀ ಸಮರ್ಥ ರಾಮದಾಸ್ ವಾಸವಾಗಿದ್ದ ಸ್ಥಳದಲ್ಲಿ ಆಧ್ಯಾತ್ಮಿಕ ಜೀವನವನ್ನು ಪ್ರಾರಂಭಗೊಳಿಸಿದರು.`,
      profile_img: `/Images/shridharaswamy.jpg`,
      name_english: `Shri Shridhara Swamy Maharaj`,
      name_kannada: `ಶ್ರೀ ಶ್ರೀಧರಸ್ವಾಮಿ‌ ಮಹರಾಜ್`,
      birth_english: `Dec 07 1908 - April 19 1973`,
      birth_kannada: `ಡಿಸೆಂಬರ್‌ ೦೭ ೧೯೦೮ - ಏಪ್ರಿಲ್‌ ೧೯ ೧೯೭೩`,
      miracles_english: [`Once, a young man sought the blessings of Shri Shridhara Swamy. He had wrapped his legs in cloths and claimed that they were infested with bacteria, asking Shridhara Swamy to use his divine power to heal them. In reality, the young man's legs were perfectly fine, and he was only testing Shridhara Swamy's abilities.
      Upon learning of the deception, Shridhara Swamy sprayed holy water on the young man's legs and instructed him to uncover them. To everyone's surprise, the legs were affected with bacteria in real. Shridhara Swamy remarked that the young man had come to test him, and the results were evident.
      Realizing his mistake, the young man apologized profusely. Shridhara Swamy, showing compassion, then provided him with a healing mantra and sent him on his way. After enduring days of suffering, the young man's disease eventually healed.
      This incident teaches us that testing the power of gurus or gods may have unexpected consequences, and genuine faith is more meaningful than skepticism.`, 
      `Early one morning, Shridhara Swamy visited the Shri Marikamba Temple in Sagara. He fervently prayed to the deity, requesting the cessation of offering non-vegetarian food as naivedyam (ritual offering). Following his prayer, the practice of serving goddess with non-vegetarian food was discontinued in Sagara, and only vegetarian offerings have been made since.The temple's atmosphere shifted, with the fragrance of incense and the gentle hum of prayers replacing the aroma of non-vegetarian offerings. The act of reverence by Shridhara Swamy became a symbol of spiritual influence, fostering a harmonious change in the age-old customs of the sacred space. The sanctity of the temple now harmonized with the purity of vegetarian offerings, as devotees rejoiced in the newfound alignment of their worship with the divine will.`],
      miracles_kannada: [`ಒಮ್ಮೆ ಒಬ್ಬ ಯುವಕ ಶ್ರೀಧರ ಸ್ವಾಮಿಯ ಆಶೀರ್ವಾದವನ್ನು ಬೇಡಿ ಅವರ ಬಳಿ ಬಂದನು. ಅವನು ತನ್ನ ಕಾಲುಗಳನ್ನು ಬಟ್ಟೆಯಲ್ಲಿ ಸುತ್ತಿಕೊಂಡಿದ್ದನು ಮತ್ತು ಅವುಗಳನ್ನು ಹುಳಗಳು ತಿನ್ನುತ್ತಿವೆ ಆದ್ದರಿಂದ ತಮ್ಮ ತಪಸ್ಸಿನ ಶಕ್ತಿಯಿಂದ ಇದನ್ನ ಗುಣಪಡಿಸಿ ಕೊಡಿ ಎಂದು ಕೇಳಿದ. ವಾಸ್ತವದಲ್ಲಿ, ಯುವಕನ ಕಾಲುಗಳು ಸಂಪೂರ್ಣವಾಗಿ ಚೆನ್ನಾಗಿದ್ದವು ಮತ್ತು ಅವನು ಶ್ರೀಧರ ಸ್ವಾಮಿಯ ಸಾಮರ್ಥ್ಯವನ್ನು ಮಾತ್ರ ಪರೀಕ್ಷಿಸುತ್ತಿದ್ದನು.

      ಇದನ್ನು ತಿಳಿದಿದ್ದ ಶ್ರೀಧರ ಸ್ವಾಮಿಗಳು ಯುವಕನ ಕಾಲುಗಳಿಗೆ ತೀರ್ಥವನ್ನು ಎರಚಿದರು ಮತ್ತು ಅವುಗಳನ್ನು ಬಹಿರಂಗಪಡಿಸಲು ಸೂಚಿಸಿದರು. ಆದರೇ ಈಗ, ಅವನ ಕಾಲುಗಳನ್ನು ನಿಜವಾಗಿಯೂ ಹುಳಗಳು ತಿನ್ನಲು ಪ್ರಾರಂಭಿಸಿತ್ತು ಮತ್ತು ನನ್ನನ್ನು ಪರೀಕ್ಷಿಸಲು ಬಂದ ಕಾರಣ ನಿನ್ನ ಗತಿ ಹೀಗಾಗಿದೆ ಎಂದರು
      
      ತನ್ನ ತಪ್ಪಿನ ಅರಿವಾಗಿ ಯುವಕ ಕ್ಷಮೆ ಯಾಚಿಸಿದ. ಶ್ರೀಧರ ಸ್ವಾಮಿಗಳು ಕರುಣೆ ತೋರಿ, ನಂತರ ಅವರಿಗೆ ಮಂತ್ರಾಕ್ಷತೆಯನ್ನು ನೀಡಿ ಅವನನ್ನು ಕಳುಹಿಸಿದರು.ಬಹು ದಿನಗಳು ನೋವನ್ನು ಸಹಿಸಿದ ನಂತರ, ಯುವಕನ ಕಾಯಿಲೆ ಅಂತಿಮವಾಗಿ ವಾಸಿಯಾಯಿತು.
      
      ಈ ಘಟನೆಯು ಗುರುಗಳು ಅಥವಾ ದೇವರುಗಳ ಶಕ್ತಿಯನ್ನು ಪರೀಕ್ಷಿಸುವುದು ಅನಿರೀಕ್ಷಿತ ಪರಿಣಾಮಗಳನ್ನು ಉಂಟುಮಾಡಬಹುದು ಮತ್ತು ಸಂದೇಹಕ್ಕಿಂತ ನಿಜವಾದ ನಂಬಿಕೆ ಹೆಚ್ಚು ಅರ್ಥಪೂರ್ಣವಾಗಿದೆ ಎಂದು ನಮಗೆ ಕಲಿಸುತ್ತದೆ.`,
      `ಸಾಗರದ ಶ್ರೀ ಮಾರಿಕಾಂಬೆಯ ಸನ್ನಿಧಿಗೆ ಒಂದು ಪ್ರಾತಃಕಾಲ ಶ್ರೀ ಶ್ರೀಧರ ಸ್ವಾಮಿಗಳು ಬಂದು ದೇವಿಯ ಎದುರು ಧ್ಯಾನಸ್ಥರಾದರು ಮತ್ತು ದೇವಿಯಲ್ಲಿ "ಅಮ್ಮ, ನಿನಗೇಕೆ ರಕ್ತಾಹಾರದ ನೈವೇದ್ಯ? ನೀನು ಸಾತ್ವಿಕ ಆಹಾರವನ್ನು ತೆಗೆದುಕೊಂಡು ತೃಪ್ತಳಾಗು ಎಂದು ಕೇಳಿಕೊಂಡರು. ಅನಂತರ ಸಾಗರದ ಜನರನ್ನು ಕುರಿತು, ದೇವಿ ರಕ್ತಹಾರ ತ್ಯಜಿಸಲು ಒಪ್ಪಿದ್ದಾಳೆ ಇನ್ನು ಮೇಲೆ ಹಣ್ಣು-ಕಾಯಿಯಿಂದ ದೇವಿಯನ್ನು ಪೂಜಿಸಿರಿ ಎಂದರು. ಅಂದಿನಿಂದ ಸಾಗರದ ಮಾರಿಕಾಂಬೆಗೆ ರಕ್ತಾಹಾರದ ನೈವೇದ್ಯ ಮಾಡುತ್ತಿಲ್ಲ`
    ],
      img: [`/Images/m1.jpeg`, `/Images/m2.jpeg`],
      miracle_summary_english: `While we have touched upon just two of the numerous miracles attributed to him, it's essential to acknowledge that the power of Shri Shridhara Swamy knows no bounds. Countless miracles, each a testament to his divine capabilities, have unfolded through his grace.

      For those intrigued by his spiritual prowess and eager to delve into a deeper understanding of his teachings, a visit to Varadahalli is highly recommended. This tranquil locale hosts the Ashrama of Shri Shridhara Swamy, where seekers can not only gain profound insights but also receive the blessings that abound in the spiritual atmosphere of this sacred space`,
      miracle_summary_kannada: `ನಾವು ಇಲ್ಲಿ ಕೇವಲ ಎರಡು ಮಹಿಮೆಗಳನ್ನಷ್ಟೇ ಕೊಟ್ಟಿದ್ದೇವೆ. ಆದರೆ ಗುರುವಿನ ಶಕ್ತಿಗೆ , ಕೃಪೆಗೆ ಮಿತಿ ಇಲ್ಲ. ಹೇಗೆ ಸಮುದ್ರದ ಇನ್ನೊಂದು ತೀರ ಕಣ್ಣಿಗೆ ಕಾಣುವುದಿಲ್ಲವೋ ಹಾಗೇ ಗುರುವಿನ ಮಹಿಮೆಯು ಹೇಳಿ ಮುಗಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ. ಇವರ ಬಗ್ಗೆ ಇನ್ನಷ್ಠು ತಿಳಿಯಲು ಸಾಗರದ ವರದಳ್ಳಿ ಕ್ಷೇತ್ರಕ್ಕೇ ಭೇಟಿ ನೀಡಿ`,
      village_english: `Varadahalli`,
      village_kannada: `ವರದಹಳ್ಳಿ`,
      about_village_english: `Varadapura, alternatively known as Varadahalli, is a small village in the Sagara taluk of Karnataka, India. Notably, it houses the hill shrine of Shri Sridhara Swami Ashram. The shrine is situated 6 km from the center of Sagara, approximately 72 km from Shimoga, 352 km from Bangalore, and 800 km from Mumbai. This village holds significance as a spiritual destination, attracting pilgrims and seekers to the serene surroundings of Shri Sridhara Swami Ashram.`,
      about_village_kannada: `ವರದಪುರ, ಪರ್ಯಾಯವಾಗಿ ವರದಹಳ್ಳಿ ಎಂದು ಕರೆಯಲ್ಪಡುತ್ತದೆ, ಇದು ಕರ್ನಾಟಕದ ಸಾಗರ ತಾಲ್ಲೂಕಿನಲ್ಲಿರುವ ಒಂದು ಸಣ್ಣ ಗ್ರಾಮವಾಗಿದೆ. ಗಮನಾರ್ಹವಾಗಿ, ಇದು ಶ್ರೀ ಶ್ರೀಧರ ಸ್ವಾಮಿಯವರ ಆಶ್ರಮ ಇರುವ ಜಾಗವಾಗಿದೆ. ಈ ದೇವಾಲಯವು ಸಾಗರದ ಮಧ್ಯಭಾಗದಿಂದ 6 ಕಿಮೀ, ಶಿವಮೊಗ್ಗದಿಂದ ಸರಿಸುಮಾರು 72 ಕಿಮೀ, ಬೆಂಗಳೂರಿನಿಂದ 352 ಕಿಮೀ ಮತ್ತು ಮುಂಬೈನಿಂದ 800 ಕಿಮೀ ದೂರದಲ್ಲಿದೆ. ಈ ಗ್ರಾಮವು ಆಧ್ಯಾತ್ಮಿಕ ತಾಣವಾಗಿ ಪ್ರಾಮುಖ್ಯತೆಯನ್ನು ಹೊಂದಿದೆ, ಶ್ರೀ ಶ್ರೀಧರ ಸ್ವಾಮಿ ಆಶ್ರಮದ ಪ್ರಶಾಂತ ಪರಿಸರವು ಯಾತ್ರಿಕರು ಮತ್ತು ಅನ್ವೇಷಕರನ್ನು ಆಕರ್ಷಿಸುತ್ತದೆ.`
    }
  ]

  const promise = [
    {
      id: 1,
      english: `I will remain a bachelor to the core till death` ,
      kannada: `ಸಾಯುವವರೆಗೂ ಬ್ರಹ್ಮಚಾರಿಯಾಗಿಯೇ ಇರುತ್ತೇನೆ`
    },
    {
      id: 2,
      english: `No more money will be accepted. Even if someone gives on request, I will use it for charity.`,
      kannada: `ಇನ್ನು ಮುಂದೆ ಯಾವುದೇ ದ್ರವ್ಯವನ್ನೂ ಸ್ವೀಕರಿಸುವುದಿಲ್ಲ. ಯಾರಾದೃೂ ಆಗ್ರಹದಿಂದ ಕೊಟ್ಟರೂ ಅದನ್ನೂ ಪರೋಪಕಾರಕ್ಕಾಗಿಯೇ ಉಪಯೋಗಿಸುತ್ತೇನೆ.`
    },
    {
      id: 3,
      english: `I will not sit anywhere as a Matadish`,
      kannada: `ಎಲ್ಲಿಯೂ ಮಠಾಧಿಪತಿಯಾಗಿ ಕುಳಿತುಕೊಳ್ಳುವುದಿಲ್ಲ`
    },
    {
      id: 4,
      english: `I will keep my needs to bare minimum`,
      kannada: `ನಾನು ನನ್ನ ಅಗತ್ಯಗಳನ್ನು ಕನಿಷ್ಠವಾಗಿರಿಸಿಕೊಳ್ಳುತ್ತೇನೆ`
    },
    {
      id: 5,
      english: `I will not differentiate between men and women`,
      kannada: `ನಾನು ಪುರುಷರು ಮತ್ತು ಮಹಿಳೆಯರ ನಡುವೆ ಭೇದ ಮಾಡುವುದಿಲ್ಲ`
    },
    {
      id: 6,
      english: `I will consider every woman as my mother`,
      kannada: `ನಾನು ಪ್ರತಿ ಮಹಿಳೆಯನ್ನು ನನ್ನ ತಾಯಿ ಎಂದು ಪರಿಗಣಿಸುತ್ತೇನೆ`
    },
    {
      id: 7,
      english: `I will spend my life for the benefit of society by all means`,
      kannada: `ನನ್ನ ಜೀವನವನ್ನು ಎಲ್ಲ ರೀತಿಯಿಂದಲೂ ಸಮಾಜದ ಒಳಿತಿಗಾಗಿ ಕಳೆಯುತ್ತೇನೆ`
    },
    {
      id: 8,
      english: `I will try my best to revive the religion to make the world happy`,
      kannada: `ಜಗತ್ತನ್ನು ಸಂತೋಷಪಡಿಸಲು ಧರ್ಮವನ್ನು ಪುನರುಜ್ಜೀವನಗೊಳಿಸಲು ನಾನು ನನ್ನ ಕೈಲಾದಷ್ಟು ಪ್ರಯತ್ನಿಸುತ್ತೇನೆ`
    }
  ]

  function renderTitle(index){
    if(language === 'english'){
      return listings_english[index]
    }else{
      return listings_kannada[index]
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

            {contents.map((content)=>{
              return(
                <p>{language === 'english' ? content.early_life_english : content.early_life_kannada}</p>
              )
            })}

            <br></br>

            <h1 className='rareVideo'>{renderTitle(1)}</h1>

            <iframe width="925" 
                    height="315" 
                    src="https://www.youtube.com/embed/rJCSdfZPE5A?si=67-op7gaRzwPKWjN" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>

          </div>
          <div className="profile_card">
              {contents.map((content)=>{
                return(
                  <>
                    <img src={content.profile_img} alt='Shridhara Swamy'/>
                    <h2>
                      {language=== 'english'? content.name_english : content.name_kannada }
                    </h2>
                    <h3><h3>{language=== 'english'? content.birth_english : content.birth_kannada }</h3></h3>
                  </>
                )
              })}
          </div>
      </div>
      <div className="content_continued">
        <h1 className='miracles'>{renderTitle(3)}</h1>
        <div className="miracle_img_content">
          {contents.map((content)=>{
            return(
              <>
              <p>{language === 'english'? content.miracles_english[0] : content.miracles_kannada[0]}</p>
              <img src={content.img[0]}/>
              {/* <img src={content.img[0]}/> */}

              </>
            )
          })}
        </div>
        <div className="miracle_img_content miracle2">
          {contents.map((content)=>{
            return(
              <>
              <p>{language === 'english'? content.miracles_english[1] : content.miracles_kannada[1]}</p>
              <img src={content.img[1]}/>
              </>
            )
          })}
        </div>
        <div className="summary">
          {contents.map((content)=>{
            return(
              <p>{language==='english'? content.miracle_summary_english: content.miracle_summary_kannada}</p>
            )
          })}
        </div>
        <div className="promises">
          <h1 className='miracles'>{renderTitle(2)}</h1>
          {console.log(contents.promise)} 
          <ul className="promise-list">
            {promise && promise.map((content) => (
              <li key={content.id}>{content.id}. {language === 'english' ? content.english : content.kannada}</li>
            ))}
          </ul>
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
    </div>
  )
}

export default Shridhara;
