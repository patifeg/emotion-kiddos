import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { signout } from './actions/userActions';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';


function App() {
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
    const signoutHandler = () => {
        dispatch(signout());
    }

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
                        {
                            userInfo ? (
                                <div className="dropdown">
                                    <Link to="#">{userInfo.name} <i className='fa fa-caret-down'></i></Link>
                                    <ul className="dropdown-content">
                                        <Link to="#signout" onClick={signoutHandler}>Sair</Link>
                                    </ul>
                                </div>
                            ) :
                                (
                                    <Link to="/signin">Entrar</Link>
                                )
                        }

                    </div>
                </header>
                <main>
                    <Routes>
                        <Route path="/cart" element={<CartScreen />} />
                        <Route path="/cart/:id" element={<CartScreen />} />
                        <Route path="/product/:id" element={<ProductScreen />}></Route>
                        <Route path="/signin" element={<SigninScreen />}></Route>
                        <Route path="/register" element={<RegisterScreen />}></Route>
                        <Route path="/shipping" element={<ShippingAddressScreen />}></Route>
                        <Route path="/" element={<HomeScreen />} exact></Route>
                    </Routes>
                </main>
                <footer className="row center">
                    Todos direitos reservados
                </footer>
            </div >
        </BrowserRouter >
    );
}

export default App;