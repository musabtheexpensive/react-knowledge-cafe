import { useEffect } from "react";
import { useState } from "react";

const Blog = () => {
    const [blogs,setBlogs]=useState([]);

useEffect(()=>{
    fetch('blog.json')
    .then(res=>res.json())
    .then(data => setBlogs(data))
},[])

    return (
        <div className="md:w-1/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
        </div>
    );
};

export default Blog;