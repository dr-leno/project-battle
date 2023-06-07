import axios from "axios";


const fetchPopularRepos = (language) => {
    const encoded = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=desc&type=Repositories`);
    
    return axios.get(encoded)
            .then((response) => {
                return response.data.items;
            })
            .catch((error) => {
                throw new Error(error);
            });
}

export {
    fetchPopularRepos,
}