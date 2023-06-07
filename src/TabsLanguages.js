import React from 'react';

const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

const TabsLanguages = () => {
    return (
            <ul className='languages'>
                {languages.map((language, index) => {
                    return (
                        <li key={index}
                            style={{color: language === selectedLanguage ? '#d0021b' : '#000000'}}
                            onClick={() => setSelectedLanguage(language)}>
                            {language}
                        </li>
                    );
                })} 
            </ul>)
}

export default TabsLanguages;