import React, { useState } from "react";
import "./Hero.css";


function Hero(){

  const [ language, setLanguage] = useState('english');

  const contents = [
    { 
      img: "./Images/ramayan2.jpeg",
      enlish_heading: `Welcome to our sacred online space dedicated to Shri Ram and the profound teachings of the Ramayan`,
      kannada_heading: `ಶ್ರೀರಾಮನಿಗೆ ಮತ್ತು ರಾಮಾಯಣದ ಆಳವಾದ ಬೋಧನೆಗಳಿಗೆ ಮೀಸಲಾಗಿರುವ ನಮ್ಮ ಪವಿತ್ರ ಆನ್‌ಲೈನ್ ಜಾಗಕ್ಕೆ ಸುಸ್ವಾಗತ`,
      english_content: `Shri Ram, the epitome of virtue and perfection, embodies an emotion cherished by millions of Indians who believe in the divine. Embarking on a spiritual odyssey inspired by an IIT project, I proudly present "its.ramayan," a bilingual website seamlessly merging Kannada and English to unfold the rich tapestry of Valmiki Ramayana and various dimensions of Hindu spirituality. This digital sanctuary encapsulates the complete Valmiki Ramayana, elucidates the ten incarnations of Lord Vishnu, and delves into the lives of spiritual luminaries like Adi Shankaracharya, Shri Raghavendra Swamy, Shri Shridhara Swamy, and the revered Shri Raghaveshwara Bharathi Swamiji. Discover the philosophy behind the four mathas established by Shankaracharya, explore plants mentioned in the Ramayana with their medicinal uses, traverse the sacred lands featured in the epic, and resonate with mantras dedicated to Shri Ram. In the days to come, anticipate a transformation with the integration of creative AI images, audio-video elements, live portrayals of Ramayana characters in contemporary settings, and a dedicated section on the Ayodhya Ram Mandir. I dedicate this heartfelt endeavor to my parents, the guiding light of Shri Raghaveshwara Bharathi Swamiji, and to the divine spirit of Shri Ram. May its.ramayan inspire and guide all seekers on their spiritual journey.`,
      kannada_content: `
      ಸದ್ಗುಣ ಮತ್ತು ಪರಿಪೂರ್ಣತೆಯ ಪ್ರತಿರೂಪವಾದ ಶ್ರೀ ರಾಮ, ದೈವಿಕತೆಯನ್ನು ನಂಬುವ ಲಕ್ಷಾಂತರ ಭಾರತೀಯರ ಪಾಲಿಸುವ ಭಾವನೆ ಶ್ರೀ ರಾಮ.
      
      ಐಐಟಿ ಯ ಒಂದು ಯೋಜನೆಯಿಂದ ಪ್ರೇರೇಪಿತನಾಗಿ ಶುರು ಮಾಡಲಾದ its. ramayan ಎಂಬ ಒಂದು ಯೋಜನೆಯನ್ನು ನಾನು ಹೆಮ್ಮೆಯಿಂದ ಪ್ರಸ್ತುತ ಪಡಿಸುತ್ತಿದ್ದೇನೆ.  ದ್ವಿಭಾಷಾ website ಆದ ಈ ಯೋಜನೆಯು ಕನ್ನಡ ಹಾಗೂ ಆಂಗ್ಲ ಭಾಷೆಗಳನ್ನು ಬೆರೆಸಿ ವಾಲ್ಮೀಕಿ ರಾಮಾಯಣ ಹಾಗೂ ಹಿಂದೂ ಸನಾತನ ಧರ್ಮದ ವಿವಿಧ ಆಯಾಮಗಳ ಕುರಿತು ಮಾಹಿತಿ ನೀಡುತ್ತದೆ. ಈ ಜಾಲತಾಣವು ಪರಿಪೂರ್ಣ ವಾಲ್ಮೀಕಿ ರಾಮಾಯಣ, ಮಹಾವಿಷ್ಣುವಿನ ದಶಾವತಾರ ಗಳನ್ನೂ ಹಾಗೆಯೇ ನಮ್ಮ ಹಿಂದೂ ಧರ್ಮದ ದಾರಿ ದೀಪಗಳಾದ ಆದಿ ಶಂಕರಾಚಾರ್ಯರು, ಶ್ರೀ ರಾಘವೇಂದ್ರ ಸ್ವಾಮಿಗಳು, ಶ್ರೀ ಶ್ರೀಧರ ಸ್ವಾಮಿಗಳು ಮತ್ತು ಶ್ರೀ ರಾಘವೇಶ್ವರ ಭಾರತೀ ಮಹಾಸ್ವಾಮಿಗಳ ಜೀವನ ಚರಿತ್ರೆಯನ್ನು ಭಕ್ತಿಪೂರ್ವಕವಾಗಿ ಪ್ರಸ್ತುತ ಪಡಿಸುವ ಉದ್ದೇಶವನ್ನು ಹೊಂದಿದೆ. ಹಾಗೆಯೇ ಶಂಕರರು ಸ್ಥಾಪಿಸಿದ ಚತುರ್ಮಠ ಗಳ ಹಿಂದಿರುವ ತತ್ವಗಳು, ರಾಮಾಯಣದಲ್ಲಿ ಉಲ್ಲೇಖವಾಗಿರುವ ಗಿಡಮೂಲಿಕೆಗಳ ಔಷಧಿ ಗುಣಗಳು, ಮತ್ತು ಉಲ್ಲೇಖವಾಗಿರುವ ಪವಿತ್ರ ಸ್ಥಳಗಳ ಮಹಿಮೆಯನ್ನು ಶೋಧಿಸುತ್ತಾ, ಅವುಗಳ ಶ್ರೇಷ್ಟತೆಯನ್ನು ಸಾರುತ್ತಾ, ಶ್ರೀರಾಮನಿಗೆ ಅರ್ಪಿತವಾದ ಮಂತ್ರೋದ್ಗಾರವೂ ಕೂಡ ಈ ಜಾಲತಾಣದ ಅತಿ ಮುಖ್ಯ ಕಾರ್ಯವಾಗಿದೆ. ಮುಂಬರುವ ದಿನಗಳಲ್ಲಿ AI ತಂತ್ರಜ್ಞಾನದ ಸಹಾಯದಿಂದ ವಿವಿಧ ಚಿತ್ರಗಳು, ಧ್ವನಿಯನ್ನು ಒಳಗೊಂಡ ಸೃಜನಾತ್ಮಕ ದೃಶ್ಯಗಳು ಹಾಗೂ ರಾಮಾಯಣ ಪಾತ್ರಗಳ ಜೀವಂತ ಚಿತ್ರಣಗಳು, ಹಾಗೂ ಅಯೋಧ್ಯೆ ರಾಮ ಮಂದಿರಕ್ಕಾಗಿಯೆ ಮೀಸಲು ಮಾಡಲಾದ ಒಂದು ವಿಭಾಗವನ್ನು ಕೂಡ ಈ ಜಾಲತಾಣದಲ್ಲಿ ನಿರೀಕ್ಷಿಸಬಹುದು. ಈ ನನ್ನ ಕನಸಿನ ಯೋಜನೆಯನ್ನು, ದಿವ್ಯಚೇತನ ಶ್ರೀರಾಮನ ಪಾದಗಳಿಗೆ ವಂದಿಸುತ್ತಾ, ದಾರಿದೀಪವಾಗಿ ನಿಂತಿರುವ ಪರಮಪೂಜ್ಯ ಶ್ರೀ ರಾಘವೇಶ್ವರ ಭಾರತೀ ಮಹಾಸ್ವಾಮಿಗಳ ದಿವ್ಯಾಶೀರ್ವಾದಗಳೊಂದಿಗೆ ನನ್ನ ಹೆತ್ತವರು ಹಾಗು ಪೋಷಕರಿಗೆ ಅರ್ಪಿಸುತ್ತಿದ್ದೇನೆ. ಈ its.ramayan ಜಾಲತಾಣವನ್ನು ಎಲ್ಲ ಅಭಿಲಾಷಿಗಳನ್ನು ಮುನ್ನೆಡಸಲಿ ಎನ್ನುವುದು ನಮ್ಮ ಅಭಿಲಾಷೆ`,

      about_heading_english: `The Ramayan and the Lord Shri Ram`,
      about_heading_kannada: `ರಾಮಾಯಣ`,
      incarnation_heading_english: `The Ten Incarnations of Lord Vishnu`,
      incarnation_heading_kannada: `ವಿಷ್ಣುವಿನ ದಶಾವತಾರಗಳು`,

      about_ramayan_english: `One of the most revered and ancient epics in Hindu literature, narrates the timeless tale of virtue, righteousness, and devotion. Attributed to the sage Valmiki, the Ramayana recounts the life journey of Lord Rama, as he embarks on a quest to rescue his wife, Sita, from the demon king Ravana. Filled with moral teachings, ethical dilemmas, and divine interventions, the Ramayana is a profound guide that extends beyond religious boundaries, imparting lessons on duty, loyalty, and the triumph of good over evil. The characters, including Hanuman, Lakshmana, and Sita, symbolize unwavering devotion, selfless service, and resilience. Through its poetic verses and philosophical depth, The Ramayana not only captures the essence of ancient Indian wisdom but also transcends geographical and cultural boundaries, leaving an indelible mark on literature and philosophy. Its teachings emphasize the importance of virtue, humility, and compassion, making it a perennial source of inspiration for seekers of spiritual and ethical understanding.`,
      about_ramayan_kannada: `ಹಿಂದೂ ಸಾಹಿತ್ಯದಲ್ಲಿ ಅತ್ಯಂತ ಗೌರವಾನ್ವಿತ ಮತ್ತು ಪ್ರಾಚೀನ ಮಹಾಕಾವ್ಯಗಳಲ್ಲಿ ಒಂದಾದ, ಸದ್ಗುಣ, ಸದಾಚಾರ ಮತ್ತು ಭಕ್ತಿಯ ಕಾಲಾತೀತ ಕಥೆಯನ್ನು ರಾಮಾಯಣ ನಿರೂಪಿಸುತ್ತದೆ. ಋಷಿ ವಾಲ್ಮೀಕಿಯಿಂದ ರಚಿತವಾದ ರಾಮಾಯಣವು  ರಾಮನ ಜೀವನದ ಪ್ರಯಾಣವನ್ನು ವಿವರಿಸುತ್ತದೆ, ಅವನು ತನ್ನ ಪತ್ನಿ ಸೀತೆಯನ್ನು ರಾಕ್ಷಸ ರಾಜ ರಾವಣನಿಂದ ರಕ್ಷಿಸಲು ಅನ್ವೇಷಣೆಯನ್ನು ಪ್ರಾರಂಭಿಸುತ್ತಾನೆ. ನೈತಿಕ ಬೋಧನೆಗಳು, ನೈತಿಕ ಸಂದಿಗ್ಧತೆಗಳು ಮತ್ತು ದೈವಿಕ ಮಧ್ಯಸ್ಥಿಕೆಗಳಿಂದ ತುಂಬಿರುವ ರಾಮಾಯಣವು ಧಾರ್ಮಿಕ ಗಡಿಗಳನ್ನು ಮೀರಿದ ಆಳವಾದ ಮಾರ್ಗದರ್ಶಿಯಾಗಿದೆ, ಕರ್ತವ್ಯ, ನಿಷ್ಠೆ ಮತ್ತು ಕೆಟ್ಟದ್ದರ ಮೇಲೆ ಒಳ್ಳೆಯ ವಿಜಯದ ಬಗ್ಗೆ ಪಾಠಗಳನ್ನು ನೀಡುತ್ತದೆ. ಹನುಮಂತ, ಲಕ್ಷ್ಮಣ ಮತ್ತು ಸೀತೆ ಸೇರಿದಂತೆ ಹಲವಾರು ಪಾತ್ರಗಳು ಅಚಲವಾದ ಭಕ್ತಿ, ನಿಸ್ವಾರ್ಥ ಸೇವೆ ಮತ್ತು ಸ್ಥೈರ್ಯವನ್ನು ಸಂಕೇತಿಸುತ್ತವೆ. ಅದರ ಕಾವ್ಯಾತ್ಮಕ ಪದ್ಯಗಳು ಮತ್ತು ತಾತ್ವಿಕ ಆಳದ ಮೂಲಕ, ರಾಮಾಯಣವು ಪ್ರಾಚೀನ ಭಾರತೀಯ ಬುದ್ಧಿವಂತಿಕೆಯ ಸಾರವನ್ನು ಸೆರೆಹಿಡಿಯುತ್ತದೆ ಜೊತೆಗೆ ಇದು ಭೌಗೋಳಿಕ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಗಡಿಗಳನ್ನು ಮೀರಿದೆ, ಸಾಹಿತ್ಯ ಮತ್ತು ತತ್ತ್ವಶಾಸ್ತ್ರದ ಮೇಲೆ ಅಳಿಸಲಾಗದ ಗುರುತು ಬೀರಿತ್ತಿದೆ. ಇದರ ಬೋಧನೆಗಳು ಸದ್ಗುಣ, ನಮ್ರತೆ ಮತ್ತು ಸಹಾನುಭೂತಿಯ ಪ್ರಾಮುಖ್ಯತೆಯನ್ನು ಒತ್ತಿಹೇಳುತ್ತವೆ, ಇದು ಆಧ್ಯಾತ್ಮಿಕ ಮತ್ತು ನೈತಿಕ ತಿಳುವಳಿಕೆಯನ್ನು ಹುಡುಕುವವರಿಗೆ  ದೀರ್ಘಕಾಲಿಕ ಸ್ಫೂರ್ತಿಯ ಮೂಲವಾಗಿದೆ.`
    }
    
  ]

  const Incarnations = [
    {
    id: 1,
    name_english: `Matsya Avatar`,
    name_kannada: `ಮತ್ಸಯಾವತಾರ`,
    avatar_english: `Vishnu took the form of a fish to save the ancient scriptures and the sage Manu from a great deluge.`,
    avatar_kannada: `ಮಹಾ ಪ್ರಳಯದಿಂದ ಪುರಾತನ ಗ್ರಂಥಗಳನ್ನು ಮತ್ತು ಮನು ಋಷಿಯನ್ನು ರಕ್ಷಿಸಲು ವಿಷ್ಣು ಮೀನಿನ ರೂಪವನ್ನು ತೆಗೆದುಕೊಂಡನು.`,
    img: "Images/matsya.jpeg"
   },
   {
    id: 2,
    name_english: `Kurma Avatar`,
    name_kannada: `ಕೂರ್ಮಾವತಾರ`,
    avatar_english: `In this avatar, Vishnu incarnated as a tortoise to support Mount Mandara during the churning of the ocean (Samudra Manthan)`,
    avatar_kannada: `ಈ ಅವತಾರದಲ್ಲಿ, ವಿಷ್ಣುವು ಸಮುದ್ರ ಮಂಥನದ ಸಮಯದಲ್ಲಿ (ಸಮುದ್ರ ಮಂಥನ) ಮಂದಾರ ಪರ್ವತವನ್ನು ಬೆಂಬಲಿಸಲು ಆಮೆಯಾಗಿ ಅವತರಿಸಿದನು.`,
    img: "Images/tortise.jpeg"
   },
   {
    id: 3,
    name_english: `Varaaha Avatar`,
    name_kannada: `ವರಾಹವತಾರ`,
    avatar_english: `Vishnu assumed the form of a boar to rescue the Earth (personified as the goddess Bhudevi) from the demon Hiranyaksha`,
    avatar_kannada: `ಹಿರಣ್ಯಾಕ್ಷ ಎಂಬ ರಾಕ್ಷಸನಿಂದ ಭೂಮಿಯನ್ನು (ದೇವತೆ ಭೂದೇವಿ ಎಂದು ನಿರೂಪಿಸಲಾಗಿದೆ) ರಕ್ಷಿಸಲು ವಿಷ್ಣು ಹಂದಿಯ ರೂಪವನ್ನು ಪಡೆದನು.`,
    img: "Images/varaha.jpeg"
   },
   {
    id: 4,
    name_english: `Narasimha Avatar`,
    name_kannada: `ನರಸಿಂಹ ಅವತಾರ`,
    avatar_english: `In this fierce form, Vishnu appeared as a half-man, half-lion to protect his devotee Prahlada and defeat the demon king Hiranyakashipu`,
    avatar_kannada: `ಈ ಉಗ್ರ ರೂಪದಲ್ಲಿ, ವಿಷ್ಣುವು ತನ್ನ ಭಕ್ತ ಪ್ರಹ್ಲಾದನನ್ನು ರಕ್ಷಿಸಲು ಮತ್ತು ರಾಕ್ಷಸ ರಾಜ ಹಿರಣ್ಯಕಶಿಪುವನ್ನು ಸೋಲಿಸಲು ಅರ್ಧ ಮನುಷ್ಯ ಮತ್ತು ಅರ್ಧ ಸಿಂಹವಾಗಿ ಕಾಣಿಸಿಕೊಂಡನು.`,
    img: "Images/nr.jpeg"
   },
   {
    id: 5,
    name_english: `Vamana Avatar`,
    name_kannada: `ವಾಮನ ಅವತಾರ`,
    avatar_english: `Vishnu incarnated as a dwarf Brahmin to subdue the demon king Bali, who had gained control over the three worlds`,
    avatar_kannada: `ಮೂರು ಲೋಕಗಳ ಮೇಲೆ ಹಿಡಿತ ಸಾಧಿಸಿದ್ದ ರಾಕ್ಷಸ ರಾಜ ಬಲಿಯನ್ನು ನಿಗ್ರಹಿಸಲು ವಿಷ್ಣು ಕುಬ್ಜ ಬ್ರಾಹ್ಮಣನಾಗಿ ಅವತರಿಸಿದನು.`,
    img: "Images/vamana.jpeg"
   },
   {
    id: 6,
    name_english: `Parashurama Avatar`,
    name_kannada: `ಪರಶುರಾಮ ಅವತಾರ`,
    avatar_english: `Vishnu took the form of Parashurama, a Brahmin warrior with an axe, to rid the world of oppressive Kshatriya rulers`,
    avatar_kannada: `ಕ್ಷತ್ರಿಯ ದೊರೆಗಳಿಂದ ಜಗತ್ತನ್ನು ತೊಡೆದುಹಾಕಲು ವಿಷ್ಣುವು ಪರಶುರಾಮನ ರೂಪವನ್ನು ಪಡೆದರು, ಕೊಡಲಿಯೊಂದಿಗೆ ಬ್ರಾಹ್ಮಣ ಯೋಧನಾಗಿ ಅವತಾರ ಮಾಡಿದನು`,
    img: "Images/pr.jpeg"
   },
   {
    id: 7,
    name_english: `Shri Ram Avatar`,
    name_kannada: `ಶ್ರೀರಾಮ ಅವತಾರ`,
    avatar_english: `Lord Rama, the central figure in the Ramayana, exemplifies ideal human virtues and righteousness`,
    avatar_kannada: `ರಾಮಾಯಣದ ಕೇಂದ್ರ ವ್ಯಕ್ತಿಯಾದ ಭಗವಾನ್ ರಾಮನು, ಆದರ್ಶ ಮಾನವ ಸದ್ಗುಣಗಳು ಮತ್ತು ಸದಾಚಾರವನ್ನು ಉದಾಹರಿಸುತ್ತಾನೆ ಮತ್ತು ಈ ಅವತಾರದಲ್ಲಿ ರಾವಣನ ಸಂಹಾರ ಮಾಡಿದನು`,
    img: "Images/r.jpeg"
   },
   {
    id: 8,
    name_english: `Shri Krisha Avatar`,
    name_kannada: `ಶ್ರೀಕೃಷ್ಣ ಅವತಾರ`,
    avatar_english: `Krishna played a key role in the Mahabharata, delivering the Bhagavad Gita and displaying divine leelas (pastimes)`,
    avatar_kannada: `ಕೃಷ್ಣನು ಮಹಾಭಾರತದಲ್ಲಿ ಪ್ರಮುಖ ಪಾತ್ರವನ್ನು ವಹಿಸಿದನು, ಭಗವದ್ಗೀತೆಯನ್ನು ನೀಡುತ್ತಾನೆ ಮತ್ತು ದೈವಿಕ ಲೀಲೆಗಳನ್ನು ಪ್ರದರ್ಶಿಸಿದನು`,
    img: "Images/krishna.jpeg"
   },
   {
    id: 9,
    name_english: `Buddha Avatar`,
    name_kannada: `ಬುದ್ಧ ಅವತಾರ`,
    avatar_english: `Some traditions consider Buddha, Siddhartha Gautama, as an avatar of Vishnu, spreading teachings of compassion and enlightenment`,
    avatar_kannada: `ಕೆಲವು ಸಂಪ್ರದಾಯಗಳು ಬುದ್ಧ, ಸಿದ್ಧಾರ್ಥ ಗೌತಮರನ್ನು ವಿಷ್ಣುವಿನ ಅವತಾರವೆಂದು ಪರಿಗಣಿಸುತ್ತವೆ, ಕರುಣೆ ಮತ್ತು ಜ್ಞಾನೋದಯದ ಬೋಧನೆಗಳನ್ನು ಹರಡುತ್ತವೆ.`,
    img: "Images/buddha.jpeg"
   },
   {
    id: 10,
    name_english: `Kalki Avatar`,
    name_kannada: `ಕಲ್ಕಿ ಅವತಾರ`,
    avatar_english: `Kalki is prophesied to be the future avatar, riding a white horse and wielding a sword, to restore dharma and bring an end to the current age of darkness`,
    avatar_kannada: `ಧರ್ಮವನ್ನು ಪುನಃಸ್ಥಾಪಿಸಲು ಮತ್ತು ಪ್ರಸ್ತುತ ಕತ್ತಲೆಯ ಕಲಿಯುಗವನ್ನು  ಕೊನೆಗೊಳಿಸಲು ಕಲ್ಕಿ ಭವಿಷ್ಯದ ಅವತಾರವಾಗಿದೆ, ಬಿಳಿ ಕುದುರೆಯ ಸವಾರಿ ಮಾಡುತ್ತ ಕತ್ತಿಯನ್ನು ಹಿಡಿದಿರುವುದು ಈ ಅವತಾರದ ಲಕ್ಷಣ.`,
    img: "Images/kalki.jpeg"
   }
]
    return(
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
                    />ಕನ್ನಡ
                </label>
        </div>

        <div className="hero-section">
            <div className="image-section">
              {contents.map((content)=>{
                return(
                  <img src={content.img} alt="mainphoto" loading="lazy"/>
                )
              })}
            </div>
            <div className="description-section">
              {
                contents.map((content)=>{
                  return(
                    <>
                    <h1>{language === 'english'? content.enlish_heading: content.kannada_heading}</h1>
                    <p>{language === 'english' ? content.english_content : content.kannada_content}</p>
                    </>
                  )
                })
              }
            </div>
        </div>
        <div className="about-ramayan">
        {contents.map((content, index) => (
          <div key={index}>
            <h1>{language === "english" ? content.about_heading_english : content.about_heading_kannada}</h1>
            <div className="about_section">
              <p className="about-heading">
                {language === "english" ? content.about_ramayan_english : content.about_ramayan_kannada}
              </p>
            </div>
            <div className="about-ram">
              <h1>{language === "english" ? content.incarnation_heading_english : content.incarnation_heading_kannada}</h1>
              <div className="incarnation_section">
                {Incarnations.map((incarnation) => (
                  <div key={incarnation.id} className="incarnation-section">
                    <div className="incarnation">
                      <div className="incarnation-image">
                        <img src={incarnation.img} alt={incarnation.name} loading="lazy"/>
                      </div>
                      <div className="incarnation-info">
                        <h1>
                          {incarnation.id}. {language==='english'? incarnation.name_english: incarnation.name_kannada}
                        </h1>
                        <p>{language==='english'? incarnation.avatar_english: incarnation.avatar_kannada}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
       
      </>
        
    );
}

export default Hero;