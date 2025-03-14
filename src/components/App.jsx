// import logo from './logo.svg';
// import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './header';
import Footer from './footer';
import Home from '../pages/home';
import Blog from '../pages/blog';
import Post from '../pages/post';


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
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Post />} />

        </Routes>
      </Router>
      
      <Footer />
    </div>
  )
}

export default App;
