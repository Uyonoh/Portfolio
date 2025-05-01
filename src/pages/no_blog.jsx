import { Link } from 'react-router-dom';
import '../styles/blog.css'

function NoBlog() {
    return (
        <div id="blog" className='mid flex ct'>
            <div className="cont">
                <h1>Blog is currently under active development.</h1>
                <p>Please check back later.</p>
                <Link to="/">Go to Homepage</Link>
            </div>
        </div>
    );
}

export default NoBlog;
