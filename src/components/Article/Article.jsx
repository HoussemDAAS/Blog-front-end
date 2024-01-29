import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import contents from'../../Content/data'
import { Link } from 'react-router-dom'


const Article = () => {
    const {name} = useParams();
    const blog =contents.find(blog => blog.name === name);
const [articleInfo, setArticleInfo] = useState({comments:[]});

useEffect(() => {
  const fetchData = async () => {
    const result = await fetch(`http://localhost:3001/api/articles/${name}`);

    const body= await result.json();
    console.log(body);
    setArticleInfo(body);
  };
  fetchData();
},[name]);

 if(!blog){
   return <h1>Blog Not Found</h1>
 }
   
  return (
<div className='w-full column items-center m-6 align-center my-6'>
  <h1 className='text-5xl font-sans items-center my-6 text-center text-gray-600 font-bold-bold'>{blog.title}</h1>
  <div className='text-xl text-center m-4 text-gray-400'>
    {blog.content.map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ))}
  </div>
  <Link to="/articles">
    <h1 className='sm:text-2xl text-xl font-sans items-center my-6 text-center text-gray-600 font-bold-bold'>other articles</h1>
  </Link>
</div>
  )};

export default Article
