import PropTypes from 'prop-types';

const CartItem = ({ storedCart, handleRemoveFromCart }) => {
    return (
        <>
            <h4 className='font-extrabold text-2xl'>
                Total selected items : {storedCart.length}  </h4>

            <h3> Selected item: </h3>

            <div className="w-full flex justify-center my-3">

                <div className='flex gap-x-3'>

                    {
                        storedCart.map((bottle, idx) =>
                            <div key={idx} className='flex flex-col justify-center border-white border-2 rounded-2xl p-4' >
                                <img
                                    src={bottle.img}
                                    alt="bottle image"
                                    className="w-16 my-3 rounded-xl mx-auto " >
                                </img>
                                <button className='bg-white text-black p-2' onClick={() => handleRemoveFromCart(bottle.id)}>Remove</button>
                            </div>
                        )
                    }
                </div>

            </div >
        </>
    )
};


CartItem.propTypes = {
    storedCart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired,
}

export { CartItem };