import { useEffect } from "react";
import { useState } from "react";

const Blog = () => {
    const [blogs,setBlogs]=useState([]);

useEffect(()=>{
    fetch('Blogs.json')
    .then(res=>res.json())
    .then(data => setBlogs(data))
},[])

    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog> )
            }
        </div>
    );
};

export default Blog;