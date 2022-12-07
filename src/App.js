import React, { useState } from 'react';
import Post from './Components/Post/Post';
import CreatePostForm from './Components/Post/CreatePostForm';
import PostList from './Components/Post/PostList'

function App() {

  const[entries,setEntries] = useState([{name: 'Sean', post: 'I love to drink Water', date:'11-23-2021'}])

  function addNewEntry(entry){
    let tempEntries = [...entries, entry]
    setEntries(tempEntries)
  }


  return (   
     <div>
          <CreatePostForm AddNewEntryProperty={addNewEntry} />                  
          <Post parentEntries={entries} />

          <PostList parentEntries={entries}/>
        
      

    
   
   </div>
  
  );
}

export default App;

