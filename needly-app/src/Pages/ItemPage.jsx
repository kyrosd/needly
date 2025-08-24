import './ItemPage.css';
import { useParams } from 'react-router-dom';
import { GetItems, DeleteItem, UpdateItem } from '../api/api';
import { useState, useEffect } from 'react';
import ItemCard from '../Components/ItemComponent';
import { useNavigate } from 'react-router-dom';

function ItemPage() {
    const { inventoryId } = useParams();
    const [items, setItems] = useState([]);
    const [itemDescr, setItemDescr] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [itemValue, setItemValue] = useState('');

    const handleClick = (e) => {
        setItemValue(e.target.value);
        console.log(e.target.value);
    };

    const handleDescription = async (id) => {
        setItemDescr(items.find(item => item.id === id));
        console.log(itemDescr);
    };

    const handleDelete = async (id) => {
        await DeleteItem(id);
        setItems((prevItems) => prevItems.filter(item => item.id !== id));
    };

    const handleAdd = async (amount, id) => {
        await UpdateItem({ item_amount: amount + 1 }, id);
        const itemsData = await GetItems(inventoryId);
        setItems(itemsData);
    };

    const handleMinus = async (amount, id) => {
        await UpdateItem({ item_amount: amount - 1 }, id);
        const itemsData = await GetItems(inventoryId);
        setItems(itemsData);
    };

    const handleSubmit = () => {
        navigate(`/newItems/${inventoryId}`);
    };

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const itemsData = await GetItems(inventoryId);
                setItems(itemsData);
            } catch (error) {
                console.error('Error:', error);
            }
            finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [inventoryId]);


    return (

        <div className="my-item">
            <div className='new-header'>
                <div className='one'>
                    <h1 className='new-needly'>Needly</h1>
                </div>
                <div className='two'>
                    {/* <h1 className='user-item-name'>Items</h1> */}
                </div>
                <div class="three">
                    <div class="dropdown">
                        <button class="filter">Filter Items</button>
                        <div class="dropdown-content">
                            <button value='High Need' onClick={handleClick} className='high' id='button-value'>High Need</button>
                            <button value='Medium Need' onClick={handleClick} className='medium' id='button-value'>Medium Need</button>
                            <button value='Low Need' onClick={handleClick} className='low' id='button-value'>Low Need</button>
                            <button value='Always Need' onClick={handleClick} className='always' id='button-value'>Always Need</button>
                            <button value='' onClick={handleClick} className='allitems' id='button-value'>All Items</button>
                        </div>
                    </div>


                    <button class="add-item" onClick={handleSubmit}>Add Item</button>


                    <div class="dropdown">
                        <button class="account">Account</button>
                        <div class="dropdown-content">
                            <button>Profile</button>
                            <button>Settings</button>
                            <button>Logout</button>
                        </div>
                    </div>
                </div>

            </div>

            <div className='body'>
                {loading ? (
                    <div className="loading">Loading items...</div>
                ) : (itemValue.length >= 1 ? (

                    <div className="items">
                        {items.filter(item => item.item_value == itemValue).map(item =>
                            <ItemCard className="in"
                                name={item.item_name}
                                description={item.item_description}
                                amount={item.item_amount}
                                id={item.id}
                                onDelete={handleDelete}
                                onAdd={handleAdd}
                                onMinus={handleMinus}
                                value={item.item_value}
                                onDescription={handleDescription}
                                image={item.item_image}
                            />
                        )}
                    </div>

                ) : (
                    <div className="items">
                        {items.map(item =>
                            <ItemCard className="in"
                                name={item.item_name}
                                description={item.item_description}
                                amount={item.item_amount}
                                id={item.id}
                                onDelete={handleDelete}
                                onAdd={handleAdd}
                                onMinus={handleMinus}
                                value={item.item_value}
                                onDescription={handleDescription}
                                image={item.item_image}
                            />
                        )}
                    </div>
                )


                )}
            </div>
        </div >
    );
};

export default ItemPage;