import { Link } from 'react-router-dom';
import './MainPage.css';

function MainPage() {
  return (
    <div className="main-page">
      <div className='header'>
        <h1 className='needly'>Needly</h1>
        <div className='nav'>
          <Link className='start-inventory' to="/sign">Start Inventory</Link>
          <a className='find-inventory' href="#find">Find Inventory</a>
        </div>
      </div>
      <div className='body-main'>
        No complex systems. No training needed. Just a clear, 
        public way to connect your needs with your communities 
        generosity.
      </div>
    </div>
  );
}

export default MainPage;
