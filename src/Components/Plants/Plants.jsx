import React, { useState } from 'react'
import "./Plants.css";
import plantsData from './PlantsData';

function Plants() {

    const [ language, setLanguage] = useState('english');
    return (
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
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                    {/* <th>S. No</th> */}
                    <th>Name</th>
                    {/* <th>Botanical Name</th> */}
                    <th>Uses</th>
                    <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {plantsData.map((item, index) => (
                    <tr key={index}>
                        {/* <td>{item.sNo}</td> */}
                        <td className='name'>{item.name}</td>
                        {/* <td>{item.b_Name}</td> */}
                        <td className="justify-text">{item.uses}</td>
                        <td>
                        <a  className='image_p' href={item.img} target="_blank" rel="noopener noreferrer">
                            View Image
                        </a>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
        
      );
}

export default Plants;
