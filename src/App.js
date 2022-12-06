import React, { useState } from 'react';
import Post from './Components/Post/Post';


function App() {

  const[entries,setEntries] = useState([{name: 'Sean B', post: 'I love to drink Water'}])

  return (
    <div>
      <Post parentEntries={entries} />
    </div>
  );
}

export default App;
