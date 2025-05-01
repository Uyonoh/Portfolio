// import logo from './logo.svg';
// import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './header';
import Footer from './footer';
import Home from '../pages/home';
import NoBlog from '../pages/no_blog';
import Post from '../pages/post';
import PostForm from '../pages/newpost';
import Auth from '../pages/Auth';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  
  return (
    <div className='flex-col'>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/blog" element={<NoBlog />} />
          <Route path="/blog/:slug" element={<Post />} />
          <Route path="/blog/new" element={<PostForm />} />

        </Routes>
      </Router>
      
      <Footer />
    </div>
  )
}

export default App;
