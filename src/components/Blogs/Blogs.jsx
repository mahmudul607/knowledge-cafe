import PropTypes from 'prop-types';
import './Blogs.css'
import Blog from '../Blog/Blog';
const Blogs = ({blogs, handleBookMark, handleReadingTime}) => {

 
    return (
        <div className='md:w-2/3 p-4'>
            {
                blogs.map( blog=> <Blog blog={blog} key={blog.id} handleBookMark={handleBookMark} handleReadingTime={handleReadingTime}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes ={
    blogs: PropTypes.array.isRequired,
    handleBookMark: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired,

}

export default Blogs;