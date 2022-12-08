import React, { useState } from 'react';
import Post from './Components/Post/Post';
import CreatePostForm from './Components/Post/CreatePostForm';
import PostList from './Components/Post/PostList'
import './Components/App.css'

function App() {

  const[entries,setEntries] = useState([{name: 'Sean', post: 'Hello World', date:'00/00/0000'}])

  function addNewEntry(entry){
    let tempEntries = [entry,...entries ]
    setEntries(tempEntries)
  }


  return ( 
    <div>
      <h3>Social<small className='text-muted'>Feed</small></h3>
      <div id='mainbox' style={{backgroundColor:'aqua'}}> 

     

        <div id='box1'>
          <div class='col-md-12' style={{backgroundColor:'aqua'}}>
            <div className='border-box' >
              <CreatePostForm AddNewEntryProperty={addNewEntry} />
            </div>
          </div> 
          {console.log(<div class='col-md-5' style={{backgroundColor:'aqua'}}>
          <div className='border-box' >                
            <Post parentEntries={entries} />
          </div>
        </div>)}

      </div>
      <div style={{paddingLeft: '0rem',"paddingRight":"0rem"}}>
        <div style={{backgroundColor:'aqua'}}>
          <div className='border-box' >
            <PostList className='' parentEntries={entries} />
            
          </div>
        </div>
      </div>
      

    
   
   </div>
   </div>
  
  );
}

export default App;

