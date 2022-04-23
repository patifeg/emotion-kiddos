import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


function App() {
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="row">
                    <div>
                        <Link className="brand" to="/">Emotion &amp; Kiddos</Link>
                    </div>
                    <div>
                        <Link to="/cart">
                            Carrinho
                            {
                                cartItems.length > 0 && (
                                    <span className="badge">{cartItems.length}</span>
                                )
                            }
                        </Link>
                        <Link to="/signin">Entrar</Link>
                    </div>
                </header>
                <main>
                    <Routes>
                        <Route path="/cart/:id" element={<CartScreen />} />
                        <Route path="/product/:id" element={<ProductScreen />}></Route>
                        <Route path="/" element={<HomeScreen />} exact></Route>
                    </Routes>
                </main>
                <footer className="row center">
                    Todos direitos reservados
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;