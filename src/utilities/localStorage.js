const getCartLS = () => {
    const cart = localStorage.getItem('cart');
    if(cart)
    {
        return JSON.parse(cart);
    }
    return [];
}

const setCartLS = (cart) => {
    const setCart = JSON.stringify(cart);
    localStorage.setItem('cart', setCart);
}

const addToLS = (bottle) => {
    const cart = getCartLS();
    cart.push(bottle);
    setCartLS(cart);
}

export {getCartLS, setCartLS, addToLS }