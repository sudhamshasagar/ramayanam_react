const plantsData = [
    {
        sNo : 1,
        name: 'Hambukalli',
        b_Name: 'Sarcostemma acidum',
        uses: 'Root acts as Antidote for Snake Bite and Rabid Dog Bites. It is also used to treat Mental Diseases',
        img: 'https://indiabiodiversity.org/files-api/api/get/crop/img//Sarcostemma%20acidum/460.jpg?h=500'
    },
    {
        sNo : 2,
        name: 'Agnimukha',
        b_Name: 'Semecarpus anacardium',
        uses: 'Improving sexual power, increasing sperm count, curing diseases related to the digestive system',
        img: 'https://indiabiodiversity.org/files-api/api/get/crop/img//Semecarpus%20anacardium/Semecarpus_anacardium_tree.jpg?h=500'
    },
    {
        sNo : 3,
        name: 'Aguru',
        b_Name: 'Aquilaria agallocha',
        uses: 'Mouth freshener, carminative, and an appetizer in digestive ailments, and it relieves itching, improves blood circulation, and gives relief in cough, bronchitis, and asthma. Agaru oil massage is effective in rigors in fever',
        img: 'https://medicinalplantsindia.com/wp-content/uploads/2015/08/vellakil.jpg'
    }
    ,
    {
        sNo : 4,
        name: "Aja",
        b_Name: 'Trachyspermum ammi',
        uses: 'Flatulence, atonic dyspepsia, diarrhea, abdominal tumors, abdominal pains, piles, and bronchial problems, lack of appetite, galactogogue, asthma and amenorrhoea',
        img: 'https://live.staticflickr.com/4234/35072384845_3f4e1abfe7_b.jpg'
    },
    {
        sNo : 5,
        name: 'Kamala',
        b_Name: 'Nelumbo Nucifera',
        uses: 'The whole plant is used as an herbal medicine to cure diarrhea, insomnia, fever, body heat imbalance and gastritis',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Nelumbo-nucifera-3-_1200.jpg/270px-Nelumbo-nucifera-3-_1200.jpg'
    },
    {
        sNo : 6,
        name: 'Amla',
        b_Name: 'Emblica officinalis',
        uses:"Amla benefits include antibacterial & astringent properties which help improve the body's immunity system. Indian Gooseberry also increases white blood cells which help flush out the toxins from the body. Amla is used in a lot of shampoos and conditioners owing to its rich antioxidant & iron content. Indian Gooseberry contains high levels of Vitamin C which helps reduce hair fall. It also strengthens the roots & maintains hair color. Antibacterial properties of Amla helps fight dandruff. Amla is rich in carotene content which is well known for its powerful effect on vision-related conditions. Formulation made of Indian Gooseberry and Honey helps to improve eyesight, near-sightedness, and cataracts.",
        img: 'https://5.imimg.com/data5/PP/KS/MW/SELLER-1884514/amla-emblica-officinalis--500x500.jpg'
    },
    {
        sNo: 7,
        name: "Ankola",
        b_Name: "Alangium salviifolium",
        uses: "Antidiabetic, antiulcer, analgesic, anti-inflammatory, antimicrobial, antioxidant, anti-arthritic, diuretic, antifertility, anthelmintic",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Alangium_Salvifolium_07.JPG/330px-Alangium_Salvifolium_07.JPG"
    },
    {
        sNo: 8,
        name: "Neem",
        b_Name: "Azadirachta indica",
        uses: "Anti-inflammatory, antiarthritic, antipyretic, hypoglycemic, antigastric ulcer, antifungal, antibacterial, and antitumour activities",
        img: "https://nurserynisarga.in/wp-content/uploads/2019/09/Neem.jpg"
    },
    {
        sNo: 9,
        name: "Arjuna",
        b_Name: "Terminalia arjuna",
        uses: "Anginal pain, hypertension, congestive heart failure, and dyslipidemia",
        img: "https://5.imimg.com/data5/SELLER/Default/2023/9/345316876/RE/MA/XE/16713292/terminalia-arjuna.png"
    },
    {
        sNo: 10,
        name: "Arni",
        b_Name: "Clerodendrum phlomidis",
        uses: "Inflammation, diabetes, nervous disorder, asthma, rheumatism, digestive disorders, and urinary disorders as well as a bitter tonic",
        img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRn8bpL6K7ggbPPG0mTxgiDNyc_63eKtw62SUKh6SAtdvyg9KHq"
    },
    {
        sNo: 11,
        name: "Asana",
        b_Name: "Terminalia tomentosa",
        uses: "",
        img: ""
    },
    {
        sNo: 12,
        name: "Ashoka",
        b_Name: "Saraca asoca",
        uses: "",
        img: ""
    },
    {
        sNo: 13,
        name: "Ashvakarna",
        b_Name: "Dipterocarpus turbinatus",
        uses: "",
        img: ""
    },
    {
        sNo: 14,
        name: "Pipal Tree",
        b_Name: "Ficus religiosa",
        uses: "",
        img: ""
    },
    {
        sNo: 15,
        name: "Phobi nut-tree",
        b_Name: "Hiptage benghalensis",
        uses: "",
        img: ""
    },
    {
        sNo: 16,
        name: "Tall cane",
        b_Name: "Saccharum munja",
        uses: "",
        img: ""
    },
    {
        sNo: 17,
        name: "Indian Jujube",
        b_Name: "Zizyphus jujube",
        uses: "",
        img: ""
    },
    {
        sNo: 18,
        name: "Indian Medallar",
        b_Name: "Mimusops elengi",
        uses: "",
        img: ""
    },
    {
        sNo: 19,
        name: "Cashew Nut",
        b_Name: "Anacardium occidentale",
        uses: "",
        img: ""
    },
    {
        sNo: 20,
        name: "Copper Cups",
        b_Name: "Pentapetes phoenicea",
        uses: "",
        img: ""
    },
    {
        sNo: 21,
        name: "Halfa Grass",
        b_Name: "Desmostachya bipinnata",
        uses: "",
        img: ""
    },
    {
        sNo: 22,
        name: "Banyan Tree",
        b_Name: "Ficus benghalensis",
        uses: "",
        img: ""
    },
    {
        sNo: 23,
        name: "Elephant Apple",
        b_Name: "Dillenia indica",
        uses: "",
        img: ""
    },
    {
        sNo: 24,
        name: "Himalayan Birch",
        b_Name: "Betula utilis",
        uses: "",
        img: ""
    },
    {
        sNo: 25,
        name: "Beach Almon",
        b_Name: "Terminalia bellirica",
        uses: "",
        img: ""
    },
    {
        sNo: 26,
        name: "Bijpur",
        b_Name: "Citrus medica",
        uses: "",
        img: ""
    },
    {
        sNo: 27,
        name: "Bilva",
        b_Name: "Aegle marmelos",
        uses: "",
        img: ""
    },
    {
        sNo: 28,
        name: "Bimb",
        b_Name: "Coccinia grandi",
        uses: "",
        img: ""
    },
    {
        sNo: 29,
        name: "Chandana",
        b_Name: "Santalum album",
        uses: "",
        img: ""
    }
]

export default plantsData;