import React, { useState } from 'react';

const Post = (props) => {
    return ( 
        
        <table className='table'>
        <thead>
          <tr>
            <th>Posts Timeline</th>
          </tr>
        </thead>
        <tbody>
          {props.parentEntries.map((entry,index)=>{
            return(
              <tr key={index}>
                <td key={index+1}></td>

                <td>{entry.name} : {entry.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
     );
}
 
export default Post;