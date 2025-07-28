import './UpdateInventoryPage.css';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UpdateItem, GetItem } from '../api/api';

function UpdateItemsPage() {
    const { itemId } = useParams();
    const [item, setItem] = useState([]);
    const [inventoryId, setInventoryId] = useState('');
    const [item_name, setItemName] = useState('');
    const [item_description, setItemDescription] = useState('');
    const [item_value, setItemValue] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            inventory: inventoryId,
            item_name,
            item_description,
            item_value
        };

        try {
            const response = await UpdateItem(data, itemId);
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
                const itemData = await GetItem(itemId);
                setItem(itemData);

            setItemName(itemData.item_name);
            setItemDescription(itemData.item_description);
            setItemValue(itemData.item_value);
            setInventoryId(itemData.inventory);

            } catch (error) {
                console.error('Error:', error);
            }
        }

        fetchData();
    }, [itemId]);

    return (
        <form onSubmit={handleSubmit} className="new-item-page">
            <div className='new-header'>
                <div className='one'>
                    <h1 className='new-needly'>Needly</h1>
                </div>
            </div>
            <div className='new-items'>
                <div className='name-inputing'>
                    <h1 className='item-naming'>Item Name:</h1>
                    <input value={item_name} id='inp' className='item-name-input' onChange={(e) => setItemName(e.target.value)} ></input>
                </div>
                <div className='description-inputing'>
                    <h1 className='description-naming'>Description:</h1>
                    <textarea value={item_description} id='inp' className='item-description-input' onChange={(e) => setItemDescription(e.target.value)} ></textarea>
                </div>
                <div className='values-b'>
                    <div className='values-a'>
                        <div className='top-two'>
                            <input type="radio" id="high-need" name="fav_language" value="High Need" onChange={(e) => setItemValue(e.target.value)} checked={item_value === "High Need"}></input>
                            <label htmlFor="high-need">High Need</label><br></br>
                            <input type="radio" id="med-need" name="fav_language" value="Medium Need" onChange={(e) => setItemValue(e.target.value)} checked={item_value === "Medium Need"}></input>
                            <label htmlFor="med-need">Medium Need</label><br></br>
                        </div>
                        <div className='bottom-two'>
                            <input type="radio" id="low-need" name="fav_language" value="Low Need" onChange={(e) => setItemValue(e.target.value)} checked={item_value === "Low Need"}></input>
                            <label htmlFor="low-need">Low Need</label><br></br>
                            <input type="radio" id="always-need" name="fav_language" value="Always Need" onChange={(e) => setItemValue(e.target.value)} checked={item_value === "Always Need"}></input>
                            <label htmlFor="always-need">Always Need</label>
                        </div>
                    </div>
                </div>
                <div className='add-leave'>
                    <Link to={`/items/${inventoryId}`} className='cancel-link'>Cancel</Link>
                    <button type='submit' className='add-button'>Update Item</button>
                </div>
            </div>
        </form>
    )
};

export default UpdateItemsPage;