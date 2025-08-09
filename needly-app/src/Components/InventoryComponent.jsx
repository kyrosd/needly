import './InventoryComponent.css';
import { useNavigate } from 'react-router-dom';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function InventoryCard({name}) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/publicInventory/${name}`);
    };

    return (
        <div onClick={handleClick} className="inv-card">
            <div className='user-img'>
            <FontAwesomeIcon className='users-img' icon={faUser} />
            </div>
            <div className='inv-head'>
                <h1 className='inv-name'>{name}</h1>
            </div>
        </div>
    )
}

export default InventoryCard;