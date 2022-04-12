import React, { useEffect, useState } from 'react';
import Post from './Post';


const Postview=()=> {
  const [posts,setPosts] = useState([]);
  
  const setPostsAsync = async() =>{
    const response = await fetch("http://localhost:3004/user");
    let data = await response.json();
    setPosts(data);
  };
  useEffect(() => {
    setPostsAsync();
  },[]);

    return (
    <div className="Post-view">
      <div class="instaclone">
       <img className='circle' src="../assets/circle.png" alt="error" />
       <h3>Instaclone</h3>
       <img className='cam-icon' src="../assets/cam.jpg" alt="cam icon" />
    </div>
    <div className='content'>
      {posts.map((post,index)=> (
          <Post key={index} config={post}/>
      ))}
    </div>
    
    </div>
  );
}

export default Postview;
