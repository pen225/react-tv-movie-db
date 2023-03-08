const URI_BASE = "https://api.themoviedb.org/3/"
const api_key_param = "?api_key=5c11dce65ccad3ca5428202e0c9b89f0"


const TvShowApi = class {
    static fetchPopular = () => {

        fetch(`${URI_BASE}tv/popular${api_key_param}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.results[0])
            });
        }
}



module.exports = TvShowApi