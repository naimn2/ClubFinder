import DataSource from '../data/data-source.js'

const main = () => {
    const searchElement = document.querySelector("#searchElement");
    const buttonSearchElement = document.querySelector("#searchButtonElement");
    const clubListElement = document.querySelector("club-list");

    const onButtonSearchClicked = async () => {
        console.log('button search clicked!')
        try {
            const results = await DataSource.searchClub(searchElement.value)
            clubListElement.clubs = results
        } 
        catch (error) {
            clubListElement.renderError(error)
        }
    };

    buttonSearchElement.addEventListener("click", onButtonSearchClicked);
};

export default main;