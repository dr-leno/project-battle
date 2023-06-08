import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import { fetchPopularRepos } from './api';
import PopularList from './PopularList';
import PopularTabs from './PopularTabs';
import { useSearchParams } from 'react-router-dom';


const Popular = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [repos, setRepos] = useState([]);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams({ lang: 'All' });


    const selectedLanguage = searchParams.get('lang');

    useEffect(() => {
        setIsLoading(true);
        fetchPopularRepos(selectedLanguage)
        .then((data) => {
            setRepos(data);
        })
        .catch((error) => setError(error))
        .finally(() => setIsLoading(false));
    }, [selectedLanguage]);

    const onTabClick = (lang) => {
        if (isLoading){
            return;
        }
        setSearchParams({ lang: lang });
    }

	return (
		<div>
            <PopularTabs selectedLanguage={selectedLanguage} onTabClick={onTabClick}/>
            <Loading isLoading={isLoading}/>
            {!isLoading ? <PopularList repos={repos}/> : null}
        </div>
	)
}
export default Popular;