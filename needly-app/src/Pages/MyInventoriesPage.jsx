import './MyInventoriesPage.css';
import { useParams } from 'react-router-dom';
import { GetUser, GetInventories, DeleteInventory } from '../api/api';
import { useState, useEffect } from 'react';
import MyInventoryCard from '../Components/MyInventoryComponent';
import { useNavigate } from 'react-router-dom';

function MyInventory() {
    const { username } = useParams();
    const [user, setUser] = useState(null);
    const [inventories, setInventories] = useState([]);
    const navigate = useNavigate();

    const handlClick =()=> {
        navigate(`/newInventory/${user.id}`);
    };

    const handleDelete = async (id) => {
        await DeleteInventory(id); 
        setInventories((prevItems) => prevItems.filter(inventory => inventory.id !== id));
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const userData = await GetUser(username);
                setUser(userData);

                const inventoriesData = await GetInventories(userData.id);
                setInventories(inventoriesData);
            } catch (error) {
                console.error('Error:', error);
            }
        }

        fetchData();
    });

    return (
        <div className="my-inventory">
            <div className='new-header'>
                <div className='one'>
                    <h1 className='new-needly'>Needly</h1>
                </div>
                <div className='two'>
                    <h1 className='user-inv-name'>{username} Inventories</h1>
                </div>
                <div className='three'>
                    <button className='add-inv' onClick={handlClick}>Add Inventory</button>
                </div>
            </div>
            <div className="inventories">
                {inventories.map(item =>
                    <MyInventoryCard className="in"
                        name={item.inventory_name}
                        description={item.inventory_description}
                        id={item.id}
                        onDelete={handleDelete}
                    />
                )}
            </div>
        </div>
    );
};

export default MyInventory;
