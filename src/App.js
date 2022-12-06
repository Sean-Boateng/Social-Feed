import React, { useState } from 'react';
import Post from './Components/Post/Post';
import CreatePostForm from './Components/Post/CreatePostForm';

function App() {

  const[entries,setEntries] = useState([{name: 'Sean B', post: 'I love to drink Water'}])

  function addNewEntry(entry){
    let tempEntries = [...entries, entry]
    setEntries(tempEntries)
  }


  return (
    <div>
      <Post parentEntries={entries} />
      <CreatePostForm AddNewEntryProperty={addNewEntry} />
    </div>
  );
}

export default App;
