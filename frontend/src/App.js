import React, { useEffect, useState } from 'react';
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((json) => {
        setPosts(json)
      })
      .catch((err) => {
        setPosts([{ id: 'error', title: 'error', body: 'error' }])
      });
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      <Link to='/'>Home</Link>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h3>{post.title} - {post.id}</h3>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to='/posts'>Posts</Link>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/posts' element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
