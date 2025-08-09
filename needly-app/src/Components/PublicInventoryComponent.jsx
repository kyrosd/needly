import './PublicInventoryComponent.css';
import { useNavigate } from 'react-router-dom';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PublicInventoryCard({name, description, id}) {
    const navigate = useNavigate();


    const handleSubmit = () => {
        navigate(`/publicItems/${id}`);
    };

    return (
        <div onClick={handleSubmit} className="my-inv-card">
            <div className='my-inv-head'>
                <h1 className='my-inv-name'>{name}</h1>
            </div>
            <div className='my-inv-body'>
                <p className='my-inv-descr'>{description}</p>
            </div>
        </div>
    )
}

export default PublicInventoryCard;