import clubs from './clubs.js'
// https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${keyword}
class DataSource {
    static async searchClub(keyword) {
        try {
            const response = await fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${keyword}`)
            const responseJson = await response.json()
            console.log(responseJson);
            const filteredClubs = responseJson.teams

            return new Promise((resolve, reject) => {
                if (filteredClubs.length) {
                    resolve(filteredClubs);
                } else {
                    reject(`${keyword} is not found`);
                }
            })
        } catch (error) {
            return new Promise((_, reject) => {
                reject(`${keyword} is not found`);
            })
        }
    }
}

export default DataSource;