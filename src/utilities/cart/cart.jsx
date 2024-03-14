

const CartItem = ({storedCart}) => { 
    return (
        <>
            <h4 className='font-extrabold text-2xl'>
                Total selected items : {storedCart.length}  </h4>
                
            <h3> Selected item: </h3>

            <div className="w-full flex justify-center my-3">
                {
                    storedCart.map((bottle, idx) => <img key={idx} src={bottle.img} alt="bottle image" className="w-16 mx-3 rounded-xl" ></img>)
                }
            </div>
        </>
    )
}

export {CartItem};