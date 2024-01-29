import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div>
     <div className="min-h-full">
  <nav className="bg-gray-800">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0">
         
          </div>
      
            <div className="ml-10 flex place-items-end space-x-4">
    
            <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Home</Link>
            <Link to="/blogs" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Blog List</Link>
            <Link to="/blog" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Blog</Link>
            <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About Us</Link>
            
              {/* <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Reports</a> */}
            </div>
        
        </div>
      </div>
    </div>
 </nav>

  
</div>
    </div>
  )
}

export default Nav
