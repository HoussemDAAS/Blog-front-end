import React from 'react';
import { Link, useParams } from 'react-router-dom';
import contents from '../../Content/data';

const Articles = () => {
  const { name } = useParams();

  return (
    <div className='w-full flex flex-row space-x-4 justify-center  items-center m-6 align-center my-6'>

      {contents.map((blog,index)=>(
        <React.Fragment key={index} >
            <div className='max-w-sm bg-white border hight-full border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <img  className='rounded-t-lg' src={blog.thumbnail} alt="" />
          <div className="p-5">
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {blog.title}
          </h5>
          
          <div className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            <p className='mb-3 font-normal text-white-700 dark:text-gray-400"'>{blog.content[0].substring(0,100)}...</p>
             <Link to={`/blog/${blog.name}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
             </Link>
          </div>
          </div></div>
        </React.Fragment>
      ))
      }
    </div>
  );
};

export default Articles;
