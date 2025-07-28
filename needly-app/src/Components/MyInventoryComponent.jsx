import './MyInventoryComponent.css';
import { useNavigate } from 'react-router-dom';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MyInventoryCard({name, description, id, onDelete}) {
    const navigate = useNavigate();

    const deleteInventory = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        if(onDelete) {
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
        <div onClick={handleSubmit} className="my-inv-card">
            <div className='my-inv-head'>
                <h1 className='my-inv-name'>{name}</h1>
            </div>
            <div className='my-inv-body'>
                <p className='my-inv-descr'>{description}</p>
            <div className='delete-edit'>
            <FontAwesomeIcon onClick={updateInventory} className='edit' icon={faPen} />
            <FontAwesomeIcon onClick={deleteInventory} className='trash' icon={faTrash} />
            </div>
            </div>
        </div>
    )
}

export default MyInventoryCard;