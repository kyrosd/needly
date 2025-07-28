import './UpdateInventoryPage.css';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UpdateInventory, GetInventory } from '../api/api';

function UpdateInventoryPage() {
    const { inventoryId } = useParams();
    const [inventory, setInventory] = useState([]);
    const [user_id, setUserId] = useState('');
    const [inventory_name, setInventoryName] = useState('');
    const [inventory_description, setInventoryDescription] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            user: user_id,
            inventory_name,
            inventory_description
        };

        try {
            const response = await UpdateInventory(data, inventoryId);
            navigate(-1);
        }
        catch (error) {
            console.error('Error:', error);
            console.log(data);
            alert("Make sure everything is filled out");
        };

    };

    useEffect(() => {
        async function fetchData() {
            try {
                const inventoryData = await GetInventory(inventoryId);
                setInventory(inventoryData);

            setInventoryName(inventoryData.inventory_name);
            setInventoryDescription(inventoryData.inventory_description);
            setUserId(inventoryData.user_id);

            } catch (error) {
                console.error('Error:', error);
            }
        }

        fetchData();
    }, [inventoryId]);

    return (
        <form onSubmit={handleSubmit} className="new-item-page">
            <div className='new-header'>
                <div className='one'>
                    <h1 className='new-needly'>Needly</h1>
                </div>
            </div>
            <div className='new-items'>
                <div className='name-inputing'>
                    <h1 className='item-naming'>Inventory Name:</h1>
                    <input value={inventory_name} id='inp' className='item-name-input' onChange={(e) => setInventoryName(e.target.value)} ></input>
                </div>
                <div className='description-inputing'>
                    <h1 className='description-naming'>Description:</h1>
                    <textarea value={inventory_description} id='inp' className='item-description-input' onChange={(e) => setInventoryDescription(e.target.value)} ></textarea>
                </div>

                <div className='add-leave'>
                    <Link to={`/items/${inventoryId}`} className='cancel-link'>Cancel</Link>
                    <button type='submit' className='update-button'>Update Inventory</button>
                </div>
            </div>
        </form>
    )
};

export default UpdateInventoryPage;