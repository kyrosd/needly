import './FindInventoryPage.css';
import React, { useEffect, useState } from 'react';
import { inventoryData } from '../TestData';
import { GetUsers } from '../api/api';
import InventoryCard from '../Components/InventoryComponent';

function FindInventoryPage() {
  const [input, setInput] = useState('');
  const [users, setUsers] = useState([]);


  const handleChange = (e) => {
    setInput(e.target.value)
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const users = await GetUsers();
        setUsers(users);

      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="find-inventory-page">
      <div className='find-in-nav'>
        <h1 className='find-in-text'>Find An <span className='highlight-in'>Inventory</span> Here</h1>
        <input className='search' placeholder='Search...' onChange={handleChange}></input>
      </div>
      <div className='inv-cards'>
        {input.length >= 1 ? (
          users
            .filter(user => user.username.toLowerCase().includes(input.toLowerCase()))
            .slice(0, 3)
            .map(user => (
              <InventoryCard 
                key={user.id}       
                name={user.username}
              />
            ))
        ) : null}
      </div>

    </div>
  );
}

export default FindInventoryPage;