import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/Video";
import db from "./config/firebase";
import { collection, doc, getDocs } from "firebase/firestore/lite";
import { Height } from "@mui/icons-material";

function App() {

let maxHeight;
if(window.innerHeight <= 800){
    maxHeight = window.innerHeight
}

  const [video, setVideos] = useState([]);

  async function getVideos() {
    const videosCollection = collection(db, "videos");
    const videosSnapshot = await getDocs(videosCollection);
    const videoList = videosSnapshot.docs.map((doc) => doc.data());
    setVideos(videoList);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App" style={{ maxHeight: maxHeight + "px"}}>
      <div className="app__videos">
        {video.map((item) => {
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}

        {/* <Video 
        likes={148}
        messages={57}
        shares={36}
        name="gz_batista"
        description="nada ainda"
        music="nenhuma - Audio original de gz_batista"
        url=""
        /> */}
      </div>
    </div>
  );
}

export default App;
