/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'; // ES6
const Blog = ({blog}) => {

    const {title}=blog;
    return (
        <div>
           <h2 className='text-4xl'>{title}</h2> 
        </div>
    );
};
Blog.PropTypes={
    blog:PropTypes.object.isRequired
}
export default Blog;