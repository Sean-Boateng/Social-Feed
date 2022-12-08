import React, { useState } from 'react';


const PostList = (props) => {
    return ( 
        
        <table className='table'>
        <thead>
          <tr>
            <th>Posts</th>
          </tr>
        </thead>
        <tbody>
          {props.parentEntries.map((entry,index)=>{
            return(
              <tr key={index}>
                <td key={index+1}></td>

                <td>{entry.name} :<br/> {entry.post} - {entry.date}<br/> <button >Like</button> <button>Dislike</button><br/></td>
              </tr>
            );
          })}
        </tbody>
      </table>
     );
}
export default PostList;