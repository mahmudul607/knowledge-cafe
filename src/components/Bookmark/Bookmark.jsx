import PropTypes from 'prop-types';
import './Bookmark.css';

const Bookmark = ({blg}) => {
    return (
        <div className='py-4 bg-white my-4'>
            <h6 className='p-2'>
                {blg.title}
            </h6>
            
        </div>
    );
};
Bookmark.propTypes = {
    blg: PropTypes.object.isRequired,
}

export default Bookmark;