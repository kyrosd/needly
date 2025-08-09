import './PublicItemComponent.css';

function PublicItemCard({ name, description, amount }) {

    return (
        <div className="my-item-card">
            <div className='my-item-head'>
                <h1 className='my-item-name'>{name}</h1>
                <div className='amount-section'>
                    <h1 className='amount'>{amount}</h1>
                </div>
            </div>
            <div className='my-item-body'>
                <p className='my-item-descr'>{description}</p>
            </div>
        </div>
    )
}

export default PublicItemCard;