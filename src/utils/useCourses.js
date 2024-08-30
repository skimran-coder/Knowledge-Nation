import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebase";
import updateCourse from "./updateCourses";

const useCourses = () => {
  const [playlistData, setPlaylistData] = useState([]);

  // fetch playlist id from firestore
  useEffect(() => {
    const fetchPlaylist = async () => {
      const querySnapshot = await getDocs(collection(db, "courses"));
      const playlistData = querySnapshot?.docs?.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPlaylistData(playlistData);
    };

    fetchPlaylist();
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      for (const data of playlistData) {
        if (!data?.items) {
          try {
            const response = await fetch(
              `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${data.playlistId}&maxResults=50&key=${process.env.REACT_APP_YOUTUBE_API}`
            );
            const json = await response.json();
            console.log(json)
            updateCourse(data?.id, {
              items: json?.items,
            });
          } catch (error) {
            console.error("Failed to fetch playlist items:", error);
          }
        }
      }
    };

    if (playlistData.length > 0) {
      fetchItems();
    }
  }, [playlistData]);
};

export default useCourses;
