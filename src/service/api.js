
import axios from 'axios'

const BASE_URL='https://youtube-v31.p.rapidapi.com'
const options = {
    

    params: {
      
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'a83d4e2e6amshfff096dd0e01d8bp1889cfjsn946a157ac36c',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const Api={
    async fetching(url){
        const response=await axios.get(`${BASE_URL}/${url}`,options)
   return response
    }
  }