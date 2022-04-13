import React, { useEffect, useState } from 'react';
import Post from './Post';
import Header from './Post/Header';


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
      <Header/>
    <div className='content'>
      {posts.map((post,index)=> (
          <Post key={index} config={post}/>
      ))}
    </div>
    
    </div>
  );
}

export default Postview;
