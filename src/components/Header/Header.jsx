import './Header.css'
import header_img from '../../assets/images/mypic.jpg'

const Header = () => {
    return (
      
        <div className='max-w-6xl mx-auto'>
            <div className=" row header mx-4">
                <div className=" title">
                    <h1>Knowledge Cafe</h1>
                </div>
                <div className="">
                    <img src={header_img} alt="" />
                </div>
            </div>
        </div>

 
    );
};

export default Header;