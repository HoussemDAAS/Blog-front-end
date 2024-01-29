import React from 'react'

const Comments = ({comments}) => {
  return (
    <>

  {comments.map((comment, index) => (
    <div className="mx-auto my-8 flex max-w-screen-sm rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg sm:p-8" key={index}>
    <div className="w-full text-left">
      <div className="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
        <h3 className="font-medium">{comment.username}</h3>
      </div>
      <p className="text-sm">{comment.text}</p>
      <div className="mt-5 flex items-center justify-between text-gray-600">
      </div>
    </div>
  </div>
  ))}
    
  </>
  )
}

export default Comments
