
const Post = (props) => {
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

                <td>{entry.name}<br/>{entry.post}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
     );
}
 
export default Post;