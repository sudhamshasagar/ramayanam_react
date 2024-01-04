import React from "react";
import "./Mantra.css"
import { Link } from "react-router-dom";

function Mantras(){
    
    const mantras = ['Raghavastakam', 
                     'Rama Astakam' , 
                     'Sita Rama Stotram', 
                     'Sita Kavacham', 
                     'Gayatri Ramayanam', 
                     'Eka Shloki Ramayana',
                     'Janaki Jeevana Astakam',
                     'Lakshmana Kavacham',
                     'Bharatha Kavacham',
                     'Shatrughna Kavacham',
                     'Naama Ramayana',
                     'Ramayana Jaya Mantra',
                     'Spatarshi Ramayana',
                     'Sankshepa Ramayana',
                     'Raghava Stotra',
                     'Rama Kavacham',
                     'Sri Rama Pancharatnam',
                     'Sri Rama Raksha Stotra',
                     'Narada Kruta Rama Stuti',
                     'Jatayu Kruta Rama Stuti',
                     'Ahalya Kruta Rama Stuti',
                     'Rama Sahasranamaavali',
                     'Sita Sahasranamaavali',
                     'Sri Rama Dvadasha Nama',
                    ]

    return(
        <div className="mantras">
            <div className="language">
                <label>
                    <input 
                     type="radio"
                     name="language"
                    />English
                </label>
                <label>
                    <input 
                     type="radio"
                     name="language"
                    />Kannada
                </label>
            </div>
            <div className="mantraContainer">
            {mantras.map((mantra, index)=>{
                return <Link to={`/mantras/${mantra.toLowerCase().replace(/\s+/g, '-')}`}>
                    <div className="col">
                        <h1 key={index}>{mantra}</h1>
                    </div>
                </Link>
            })}
        </div>
        </div>
        
    )
}

export default Mantras;