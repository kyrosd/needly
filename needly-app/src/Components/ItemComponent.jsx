import './ItemComponent.css';
import { faTrash, faPen, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DeleteItem } from '../api/api';
import { useNavigate } from 'react-router-dom';

function ItemCard({ name, description, amount, id, onDelete, onAdd, onMinus, value, onDescription, image }) {
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

    const setDescription = async () => {
        if (onDescription) {
            await onDescription(id);
        }
    };


    return (
        <div className="my-item-card">
            {image === null? 
            (
            <div className='item-img-place'>
                <img className="inv-img" src={`/IMG_8346.jpg`}  alt="item" />
            </div>
            ) :
            (
            <div className='item-img-place'>
                <img className="inv-img" src={`http://127.0.0.1:8000/api${image}`}  alt="item" />
            </div>
            )
            }       
            <div className='name-amount'>
                <h1 className='my-item-name'>{name}</h1>
                <div className='amount-section'>
                    <h1 className='amount'>{amount}</h1>
                    <div className='add-func'>
                        <FontAwesomeIcon onClick={addAmount} id='count' className='add' icon={faPlus} />
                        <FontAwesomeIcon onClick={subtractAmount} id='count' className='minus' icon={faMinus} />
                    </div>
                </div>
            </div>
            <div className='description-section'>
                <p className='my-item-descr'>{description}</p>
            </div>
            <div className='delete-color'>
                <div className={className}></div>
                <div className='item-delete-edit'>
                    <FontAwesomeIcon onClick={updateItem} className='item-edit' icon={faPen} />
                    <FontAwesomeIcon onClick={deleteItem} className='item-trash' icon={faTrash} />
                </div>
            </div>
        </div>
    )
}

export default ItemCard;