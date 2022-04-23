import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


function App() {
    return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="row">
                    <div>
                        <a className="brand" href="/">Emotion &amp; Kiddos</a>
                    </div>
                    <div>
                        <a href="/cart">Carrinho</a>
                        <a href="/signin">Entrar</a>
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