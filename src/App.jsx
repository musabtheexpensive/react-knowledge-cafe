import './App.css'
import Header from './components/Header/Header'
import Blog from './components/Blogs/Blog'
import Bookmarks from './components/Bookmarks/Bookmarks'
function App() {

  return (
    <>
      
     <Header></Header>
    <div className='md:flex'>
    <Blog></Blog>
    <Bookmarks></Bookmarks>
    </div>
    </>
  )
}

export default App
