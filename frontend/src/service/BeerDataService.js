import axios from 'axios'

const BEERS_API_URL = 'http://localhost:8080/api/v1/beers'


class BeerDataService{
    retrieveAllBeers(){
        return axios.get(`${BEERS_API_URL}`);
    }
    deleteBeer(id){
        console.log('executed Delete service')
        return axios.delete(`${BEERS_API_URL}/${id}`);
    }
}
export default new BeerDataService()