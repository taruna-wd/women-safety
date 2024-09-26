import { useEffect, useState } from 'react';

const YouTube = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Fetch videos from YouTube API
    const fetchVideos = async () => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=AIzaSyAqsrxKCJrQleYm8DnUYZw16G5IGFj45rY&channelId=UCayr5nz5sJRrOPT55CzOFxw&part=snippet,id&order=date&maxResults=6`
      );
      const data = await response.json();
      console.log(data)
      setVideos(data.items);
    };

    fetchVideos();
  }, []);

  return (
    <div className="video-grid flex flex-wrap">
      {videos.map((video) => (
        <iframe
          key={video.id.videoId}
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          title={video.snippet.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ))}
    </div>
  );
};

export default  YouTube ;