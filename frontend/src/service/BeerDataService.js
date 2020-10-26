import axios from 'axios'

const BEERS_API_URL = 'http://localhost:8080/api/v1/beers'


class BeerDataService{
    retrieveAllBeers(){
        return axios.get(`${BEERS_API_URL}`);
    }
}
export default new BeerDataService()