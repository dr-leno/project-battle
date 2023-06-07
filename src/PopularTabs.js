import React from 'react';

const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

const PopularTabs = ({ selectedLanguage, onTabClick }) => {

    return ( <ul className='languages'>
                {languages.map((language, index) => {
                    return (
                        <li key={index}
                            style={{color: language === selectedLanguage ? '#d0021b' : '#000000'}}
                            onClick={() => onTabClick(language)}>
                           {language}
                        </li>
                    );
                })} 
            </ul>)
            
}

export default PopularTabs;