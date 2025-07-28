import { useNavigate } from 'react-router-dom';
import './StartInventoryPage.css';

function StartInventoryPage() {
  const navigate = useNavigate();

  const toSignIn = () => {
    navigate('/sign')
  };

  return (
    <div className="start-inventory-page">
      <div className='intro-out'>
        <h1 className='intro'>Start Your Own <span className='highlight-in'>Inventory</span> Now</h1>
      </div>
      <div className='button'>
        <button  onClick={toSignIn} className='button-text'>Click Here To Get Started</button>
      </div>
    </div>
  );
}

export default StartInventoryPage;
