import axios from 'axios'

const KEY = 'AIzaSyBkFo-t7kF_hOdesDFhp5Tbq3i279tDsJY'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        //part param specifies a comma-separated list of one or more search resource properties that the API response will include. 
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})