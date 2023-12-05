
import Bookmark from '../Bookmark/Bookmark';
import './Bookmarks.css'
import PropTypes from 'prop-types';
const Bookmarks = ({bookMark, readingTime}) => {


   
    return (
        <div className='mt-6 p-6 md:w-1/3 bg-gray-300'>
            <div className='border-orange-200 border-2 p-2 bg-white'>
                <h3 className='text-blue-600 font-bold'>Spent time on reading: {readingTime}</h3>
            </div>
            <div className="bookmark_body py-6 mt-6 bg-gray-300">
                <h4 className='p-2'>Bookmarked Blogs:{bookMark.length}</h4>
                <div className='mx-4 p-2'>
                    {
                        bookMark.map((blg, idx) => <Bookmark blg={blg} key={idx}></Bookmark>)
                    }
                </div>
            </div>
            
        </div>
    );
};
Bookmarks.propTypes ={
    bookMark: PropTypes.object.isRequired,
    readingTime: PropTypes.number
}

export default Bookmarks;