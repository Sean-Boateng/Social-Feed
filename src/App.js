import React, { useState } from 'react';


function App() {

  const[entries,setEntries] = useState([{name: 'Sean B', post: 'I love to drink Water'}])

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Posts</th>
          </tr>
        </thead>
        <tbody>
          <tr>Candy</tr>
          <tr>Sugar</tr>
          <tr>Sweet</tr>
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
