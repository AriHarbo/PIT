import React from 'react'
import { useEffect,useState } from 'react';


const ContenedorYT = () => {
    const [videoID, setVideoID] = useState('');

  useEffect(()=> {
    const apiKey = 'AIzaSyA8DCuLkAnOgAcVmCMyzbe58hNkNJW_dX8';
    const channelID = 'UC9HvIXXe9x-ohW9oQ02HwrQ';
    const url = `https://www.googleapis.com/youtube/v3/search?part=id,snippet&channelId=${channelID}&order=date&maxResults=1&key=${apiKey}`;

    fetch(url)
    .then(response => response.json())
    .then(data=>{
      const videoID= data.items[0].id.videoId;
      console.log(data);
      setVideoID(videoID);
    })
    .catch(error => console.error(error));
  },[])
   
    return (
    <div>
       <h1>Ultimo video</h1>
      <iframe
        title="Ultimo video"
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${videoID}`}
        frameBorder="0"
        allowFullScreen
        />
    </div>
  )
}

export default ContenedorYT
