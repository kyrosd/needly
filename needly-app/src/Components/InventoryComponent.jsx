import './InventoryComponent.css';

function InventoryCard({name}) {
    return (
        <div className="inv-card">
            <div className='inv-head'>
                <h1 className='inv-name'>{name}</h1>
            </div>
        </div>
    )
}

export default InventoryCard;