import PropTypes from 'prop-types'; 

import './Bottle.css'


const Bottles = ({bottle, cartFunction}) => {

    const {img, name, price, ratings, stock} = bottle;
    return (
        <div className="bottle-box">

            <h4>Bottle Name: {name}</h4>
            <img src={img} alt="Bottle" className='image' />
            <h4>Price: {price}</h4>
            <h4>Ratings: {ratings} </h4>
            <h4>Stock: {stock} </h4>

            <button className='color ' onClick={() => {cartFunction()}}>Purchace</button>
        </div>
    )

};

Bottles.propTypes = {
    bottle : PropTypes.object.isRequired,
    cartFunction : PropTypes.func.isRequired,
}
export {Bottles};