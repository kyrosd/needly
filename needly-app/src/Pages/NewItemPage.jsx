import './NewItemPage.css';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateItems } from '../api/api';

function NewItemsPage() {
    const { inventoryId } = useParams();
    const [item_name, setItemName] = useState('');
    const [item_description, setItemDescription] = useState('');
    const [item_value, setItemValue] = useState('');
    const [item_image, setItemImage] = useState(null);
    const navigate = useNavigate();
    const item_amount = 0;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("inventory", inventoryId);
        formData.append("item_name", item_name);
        formData.append("item_description", item_description);
        formData.append("item_amount", item_amount);
        formData.append("item_value", item_value);
        if (item_image) {
            formData.append("item_image", item_image);
        }

        try {
            const response = await CreateItems(formData);
            navigate(-1);
        }
        catch (error) {
            console.error('Error:', error);
            console.log(formData);
            alert("Make sure everything is filled out");
        };

    };

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
                <div className='image-inputing'>
                    <input type="file" accept="image/*" onChange={(e) => setItemImage(e.target.files[0])} />
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
                    <button type='submit' className='add-button'>Add Item</button>
                </div>
            </div>
        </form>
    )
};

export default NewItemsPage;