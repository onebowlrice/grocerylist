import './Home.css';

const ListElement = ({name,mediumCost}) => {

    const chooseCart = () => {
        
    }

    return(
        <div className='element' onClick={chooseCart}>
            <span className='eName'>{name}</span>
            <span className='eCost'>{mediumCost}</span>
        </div>
    )
}
export default ListElement;