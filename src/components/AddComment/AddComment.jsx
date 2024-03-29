import React from 'react'
import { useState } from 'react'

const AddComment = ({articleName,SetArticleInfo}) => {


    const[username,setUsername]=useState('');
    const[text,setText]=useState('');
    const addcomment = async()=>{
        const result = await fetch(`http://localhost:3001/api/articles/${articleName}/comments`,{
            method:'post',
            body:JSON.stringify({username,text}),
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        })
        const body = await result.json();
        SetArticleInfo(body);
        setUsername('');
        setText('');
    }
  return (
    <div class="">
    <div class="mx-auto max-w-screen-sm px-4">
      <h1 class="mt-6 text-xl font-bold sm:mb-6 sm:text-3xl">Write your comment</h1>
  
      <div class="-ml-20 flex p-4 text-left text-gray-700">
        <img class="mr-5 h-12 w-12 rounded-full" src="https://ui-avatars.com/api/?name=John+Doe" alt="" />
        <div class="w-full space-y-3 text-gray-700">
          <div class="">
            <input type="text" placeholder="name" class="h-12 w-full max-w-full rounded-md border bg-white px-5 text-sm outline-none focus:ring"  value={username} onChange={(e)=>setUsername(e.target.value)}/>
          </div>
      
          <div class="">
            <textarea name="comment" id="" placeholder="Write your comment here" cols="30" rows="6" class="h-40 w-full min-w-full max-w-full overflow-auto whitespace-pre-wrap rounded-md border bg-white p-5 text-sm font-normal normal-case text-gray-600 opacity-100 outline-none focus:text-gray-600 focus:opacity-100 focus:ring" value={text} onChange={(e)=>setText(e.target.value)}></textarea>
          </div>
          <div class="float-right">
            <input type="submit" value="Post Comment" class="relative inline-flex h-10 w-auto max-w-full cursor-pointer items-center justify-center overflow-hidden whitespace-pre rounded-md bg-blue-700 px-4 text-center text-sm font-medium normal-case text-white opacity-100 outline-none focus:ring"  onClick={addcomment}/>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AddComment
