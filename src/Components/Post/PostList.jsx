import React, { useState } from 'react';


const PostList = (props) => {
    return ( 
        
        <table>
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

                <td>{entry.name} : {entry.post}<br/></td>
              </tr>
            );
          })}
        </tbody>
      </table>
     );
}
export default PostList;