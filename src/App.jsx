
import { useEffect, useState } from 'react';
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'


function App() {
  
  const [blogs, setBlogs] = useState([]);
  const [bookMark, setBookMark] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  useEffect(() =>{
      fetch('blogs.json')
      .then( res => res.json())
      .then (data => setBlogs(data))
  }, [])

  const handleBookMark = blog =>{
    
    const newItems = [...bookMark, blog]
    setBookMark(newItems);

    
  }
  const handleReadingTime = (id, time) =>{
    setReadingTime(readingTime + time);
    // remove bookmark after reading 
    const remainingBookmarks = bookMark.filter(item => item.id !== id);
    setBookMark(remainingBookmarks);
    console.log(bookMark);
    console.log(remainingBookmarks);
  }


  return (
    <>
     <div>
     <Header></Header>
     <div className='md:flex max-w-6xl mx-auto'>
          <Blogs blogs={blogs} handleBookMark={handleBookMark} handleReadingTime={handleReadingTime}></Blogs>
        <Bookmarks bookMark={bookMark} readingTime={readingTime}></Bookmarks>
     </div>
     </div>

    </>
  )
}

export default App
