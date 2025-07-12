import './FindInventoryPage.css';

function FindInventoryPage() {
  return (
    <div className="find-inventory-page">
     <div className='find-in-nav'>
      <h1 className='find-in-text'>Find An <span className='highlight-in'>Inventory</span> Here</h1>
      <input className='search' placeholder='Search...'></input>
     </div>
     <div className='inv-cards'>
      
     </div>
    </div>
  );
}

export default FindInventoryPage;