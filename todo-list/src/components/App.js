import '../styles/App.css';
import Cart from './Cart.js';
import Banner from './Banner.js';
import ShoppingList from './ShoppingList';
import Logo from '../image/leaf+1.png';

function App() {
    return (
    <div>
       <img src = {Logo} alt='logo'/>

      <Banner />
      hello
      <ShoppingList />
      <Cart />

    </div>
    )
}

export default App

