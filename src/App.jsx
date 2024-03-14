import { useEffect, useState } from 'react'
import './App.css'
import { Bottles } from './Bottles'
import { CartItem } from './utilities/cart/cart';
import { addToLS, getCartLS } from './utilities/localStorage';



function App() {

  // =====   Use useState([]) to get api data and load it to bottles. It's a state...... 
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);


  // Use useEffect(() => {}) to load data from api.

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/memorable-water-bottle/main/public/bottles.json')
      .then(res => res.json())
      .then(data => setBottles(data))
  }
    , []);


  // Function to add bottle to cart array in LS

  const handleToAddCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLS(bottle);
  };


  // Only show cart data while there are items on cart
  useEffect(() => {
    if (bottles.length >= 0) {
      const storedCart = getCartLS();
      setCart(storedCart);
    }
  }, []);



  return (
    <div>
      <h2 className='font-extrabold text-4xl'>Cart: </h2>
      <CartItem storedCart={cart} ></CartItem>
      <h3> Available Water Bottles {bottles.length} </h3>

      <div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-7'>

          {
            bottles.map((bottle) =>
              <Bottles
                key={bottle.id}
                bottle={bottle}
                cartFunction={() => { handleToAddCart(bottle) }}
              >
              </Bottles>)
          }
        </div>

      </div>
    </div>
  )
}

export default App
