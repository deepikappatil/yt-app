import React, {useState, useEffect} from 'react'
import SearchBar from './SearchBar'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'
import useVideos from '../hooks/useVideos'

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null)
    const [videos, search] = useVideos('buildings')

    //setSelectedVideo(response.data.items[0])
    useEffect(() => {
        setSelectedVideo(videos[0])
    }, [videos])

    return (
        <div className='ui container' style={{marginTop: '15px'}}>
            <SearchBar onFormSubmit={search} />
            <div className='ui grid'>
              <div className='ui row'>
                 <div className='eleven wide column'>
                    <VideoDetail video={selectedVideo} />
                  </div>
                  <div className='five wide column'>
                     <VideoList onVideoSelect={(video) => setSelectedVideo(video)} videos={videos} />
                  </div>
              </div>
            </div>
        </div>
    )
}

export default App


//console.developers.google.com
//API key: AIzaSyBkFo-t7kF_hOdesDFhp5Tbq3i279tDsJY
//https://developers.google.com/youtube/v3/docs/search/list
//URL: GET   https://www.googleapis.com/youtube/v3/search

//Vercel Deployment:
//https://vercel.com/:  Install the Vercel CLI
//Run 'Vercel' in our project directory
//npm install -g vercel   //Installs the vercel CLI onto our local machine(run on the project folder)
//To login into Vercel via CLI:  vercel login

//run cmd in the project dir:  vercel  ==>gives link(visit & see our appln running inside browser: provides 100% public link)

//Re-deploying our appln:
//Run on project dir: vercel --prod  ==>Gives the updated link


//Netlify Deployment:
//Create a github Repo for our project:  https://github.com/deepikappatil/yt-app.git
//Commit chnages to our project locally
//link our project to the new Repo
//Push our code to github
//Sing up for an account at netlify.com
//Link our github account, select the repo we want to deploy

//https://github.com/deepikappatil/yt-app.git