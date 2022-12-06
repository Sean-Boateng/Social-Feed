
const Post = (props) => {
    return ( 
        <table>
        <thead>
          <tr>
            <th>Posts</th>
          </tr>
        </thead>
        <tbody>
          {props.parentEntries.map((entry)=>{
            return(
              <tr>
                <td>{entry.post}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
     );
}
 
export default Post;