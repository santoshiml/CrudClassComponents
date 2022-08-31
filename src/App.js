import React from 'react';
import Posts from './Posts'

function App() {
  const posts = [{"id": 1, "name": "test1"}, {"id": 2, "name": "test2"}]
  
  return (
  <div className="App">
  <Posts posts={posts} />
  </div>
  );
  }
export default App;