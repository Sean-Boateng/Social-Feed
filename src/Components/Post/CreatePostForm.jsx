import React, { useState } from 'react';


const CreatePostForm = (props) => {

    const[name,setName]= useState('')
    const[post,setPost]= useState('')
    const[date,setDate]= useState('')

    function handleSubmit(event){
        event.preventDefault();
        let newEntry= {
            name : name,
            post: post,
            date: date
        };
        console.log(newEntry)
        props.AddNewEntryProperty(newEntry)
    }

    return ( 
        
        <form onSubmit={handleSubmit}>
            <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>Name </label>
            <input type='string' value ={name} onChange={(event)=>setName(event.target.value )}/><br/>
            <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>Post </label>
            <input type= 'string' value ={post} onChange={(event)=>setPost(event.target.value)}/><br/>
            <label style={{paddingRight:'1em'}} >Date </label>
            <input type='date' value = {date} onChange = {(event)=> setDate(event.target.value)}/>
            <button >create</button>
        </form>
     );
}
 
export default CreatePostForm;