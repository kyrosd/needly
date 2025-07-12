import './MainPage.css';

function MainPage() {
  return (
    <div className="main-page">
      <div className='header'>
        <h1 className='needly'>Needly</h1>
        <div className='nav'>
          <a className='start-inventory' href="https://example.com">Start Inventory</a>
          <a className='find-inventory' href="#find">Find Inventory</a>
        </div>
      </div>
      <div className='body'>
        No complex systems. No training needed. Just a clear, 
        public way to connect your needs with your communities 
        generosity.
      </div>
    </div>
  );
}

export default MainPage;
