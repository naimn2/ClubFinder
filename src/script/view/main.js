import DataSource from '../data/data-source.js'

const main = () => {
    const searchElement = document.querySelector("search-container");
    const clubListElement = document.querySelector("club-list");

    const searchCallback = async (query) => {
        console.log('button search clicked!')
        try {
            const results = await DataSource.searchClub(query)
            clubListElement.clubs = results
        } 
        catch (error) {
            clubListElement.renderError(error)
        }
    };

    searchElement.searchCallback = searchCallback;
};

export default main;