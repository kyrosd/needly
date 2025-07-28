import './NewInventoryPage.css';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateInventory } from '../api/api';

function NewInventoryPage() {
    const { userId } = useParams();
    const [inventory_name, setInventoryName] = useState('');
    const [inventory_description, setInventoryDescription] = useState('');
    const navigate = useNavigate();

   const handleSubmit = async(e) => {
    e.preventDefault();

     const data = {
        user: userId,
        inventory_name,
        inventory_description
     };

    try {
    const response = await CreateInventory(data);
    navigate(-1);
    }
    catch(error) {
        console.error('Error:', error);
        console.log(data);
    };

   };

    return (
        <form onSubmit={handleSubmit} className="new-inventory-page">
            <div className='new-header'>
                <div className='one'>
                    <h1 className='new-needly'>Needly</h1>
                </div>
            </div>
            <div className='new-inventory'>
                <div className='names-inputing'>
                    <h1 className='inventory-naming'>Inventory Name:</h1>
                    <input value={inventory_name} id='inp' className='inventory-name-input' onChange={(e)=>setInventoryName(e.target.value)} ></input>
                </div>
                <div className='descriptions-inputing'>
                    <h1 className='inv-description-naming'>Description:</h1>
                    <textarea value={inventory_description} id='inp' className='inventory-description-input' onChange={(e)=>setInventoryDescription(e.target.value)} ></textarea>
                </div>
                <div className='add-leave'>
                    <button onClick={() => navigate(-1)} className='cancel-link'>Cancel</button>
                    <button type='submit' className='adding-button'>Add Inventory</button>
                </div>
            </div>
        </form>
    )
};

export default NewInventoryPage;