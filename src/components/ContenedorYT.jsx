import React from 'react'
import { useEffect,useState } from 'react';


const ContenedorYT = () => {
    const [videoID, setVideoID] = useState('');

  useEffect(()=> {
    const apiKey = 'AIzaSyA8DCuLkAnOgAcVmCMyzbe58hNkNJW_dX8';
    const channelID =  'UCHIwQiZhIn6fm5b_IilqBbQ' ///'UC9HvIXXe9x-ohW9oQ02HwrQ'(id del canal de pit);
    const url = `https://www.googleapis.com/youtube/v3/search?part=id,snippet&channelId=${channelID}&order=date&maxResults=1&key=${apiKey}`;

    fetch(url)
    .then(response => response.json())
    .then(data=>{
      const videoID= data.items[0].id.videoId;
      setVideoID(videoID);
    })
    .catch(error => console.error(error));
  },[])
   
    return (
    <div className='contenedorYT'>
        <div className='infoCanal'>
            <h1>Visita nuestro canal de <span className='colorSecundario'>YouTube</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cumque ut debitis molestiae maiores eum fugiat distinctio repudiandae perspiciatis ducimus, quam reprehenderit expedita quia repellat aut? Rem quas sequi sint.</p>
        </div>
        <div className='ultimoVideo'>
       <h1>Ultimo video</h1>
      <iframe
        title="Ultimo video"
        width="800"
        height="400"
        src={`https://www.youtube.com/embed/${videoID}`}
        frameBorder="0"
        allowFullScreen
        />

        </div>
    </div>

  )
}

export default ContenedorYT
