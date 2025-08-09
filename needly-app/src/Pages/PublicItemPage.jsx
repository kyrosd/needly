import './PublicItemPage.css';
import { useParams } from 'react-router-dom';
import { GetItems } from '../api/api';
import { useState, useEffect } from 'react';
import PublicItemCard from '../Components/PublicItemComponent';
import { useNavigate } from 'react-router-dom';

function PublicItemPage() {
    const { inventoryId } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();


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
                    <h1 className='user-item-name'>Items</h1>
                </div>
            </div>

            <div className='body'>
                <div className='values'>
                    <button className='high' id='button-value'>High Need</button>
                    <button className='medium' id='button-value'>Medium Need</button>
                    <button className='low' id='button-value'>Low Need</button>
                    <button className='always' id='button-value'>Always Need</button>
                </div>
                {loading ? (
                    <div className="loading">Loading items...</div>
                ) : (
                    <div className="items">
                        {items.map(item =>
                            <PublicItemCard className="in"
                                name={item.item_name}
                                description={item.item_description}
                                amount={item.item_amount}
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PublicItemPage;