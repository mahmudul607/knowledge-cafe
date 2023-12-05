import PropTypes from 'prop-types';
import  './Blog.css';
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({handleBookMark, blog, handleReadingTime}) => {

const {id, title, hashtags, cover, author_img, author, posted_date, reading_time} = blog;
    return (
        <div className='blog py-4'>
            <div className="cover">
                <img className='w-full' src={cover} alt="" />
            </div>
            <div className="details">
                <div className="row top_row py-4">
                    <div className="left">
                        <img src={author_img} alt=""/>
                        <div>
                        <h6>{author}</h6>
                        <p>{posted_date}</p>
                        </div>
                    </div>
                    <div className="right">
                        <p>{reading_time} Min Read <FaRegBookmark onClick={()=>handleBookMark(blog)}></FaRegBookmark></p>
                    </div>
                </div>
                <h3 className='title'>{title}</h3>
                <div className="row hashtages">
                    <h5>#{hashtags[0]}</h5>
                    
                    <h5>#{hashtags[1]}</h5>
                </div>
                <div className="marker">
                    <p onClick={() => handleReadingTime(id, reading_time)}>Mark as read</p>
                </div>
            </div>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookMark: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired
}

export default Blog;