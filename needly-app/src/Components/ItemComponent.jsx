import './ItemComponent.css';
import { faTrash, faPen, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DeleteItem } from '../api/api';
import { useNavigate } from 'react-router-dom';

function ItemCard({ name, description, amount, id, onDelete, onAdd, onMinus, value }) {
    const navigate = useNavigate();
    let className = '';

    if (value === 'High Need') {
        className = 'my-item-head-high'
    } 
    else if (value === 'Medium Need') {
        className = 'my-item-head-med'
    }
    else if (value === 'Low Need') {
        className = 'my-item-head-low'
    } 
    else if (value === 'Always Need') {
        className = 'my-item-head-always'
    };

    const updateItem = () => {
        navigate(`/updateItem/${id}`);
    };

    const deleteItem = async (e) => {
        e.preventDefault();
        if (onDelete) {
            await onDelete(id);
        }
    };

    const addAmount = async (e) => {
        e.preventDefault();
        if (onAdd) {
            await onAdd(amount, id);
        }
    };

    const subtractAmount = async (e) => {
        e.preventDefault();
        if (onMinus) {
            await onMinus(amount, id);
        }
    };


    return (
        <div className="my-item-card">
            <div className={className}>
                <h1 className='my-item-name'>{name}</h1>
                <div className='amount-section'>
                    <h1 className='amount'>{amount}</h1>
                    <div className='add-func'>
                        <FontAwesomeIcon onClick={addAmount} id='count' className='add' icon={faPlus} />
                        <FontAwesomeIcon onClick={subtractAmount} id='count' className='minus' icon={faMinus} />
                    </div>
                </div>
            </div>
            <div className='my-item-body'>
                <p className='my-item-descr'>{description}</p>
                <div className='delete-edit'>
                    <FontAwesomeIcon onClick={updateItem} className='edit' icon={faPen} />
                    <FontAwesomeIcon onClick={deleteItem} className='trash' icon={faTrash} />
                </div>
            </div>
        </div>
    )
}

export default ItemCard;