import './MyInventoryComponent.css';
import { useNavigate } from 'react-router-dom';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MyInventoryCard({ name, description, id, onDelete }) {
    const navigate = useNavigate();

    const deleteInventory = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (onDelete) {
            await onDelete(id);
        };
    };

    const updateInventory = (e) => {
        e.stopPropagation();
        navigate(`/updateInventory/${id}`);
    };

    const handleSubmit = () => {
        navigate(`/items/${id}`);
    };

    return (
        <div onClick={handleSubmit} className="inventory-card">
            <div className='inv-img-place'>
                <img className='inv-img' src="/IMG_8347.jpg" alt="Site Logo" />
            </div>
            <div className='inv-body'>
                
                    <h1 className='inv-name'>{name}</h1>
        
                <div className='my-delete-edit'>
                    <FontAwesomeIcon onClick={updateInventory} className='inv-edit' icon={faPen} />
                    <FontAwesomeIcon onClick={deleteInventory} className='inv-trash' icon={faTrash} />
                </div>
            </div>
        </div>
    )
}

export default MyInventoryCard;