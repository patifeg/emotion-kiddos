import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { signin } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function SigninScreen(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //const redirect = props.location.search ? props.location.search.split('=')[1] : '/';

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo, loading, error } = userSignin;

    const navigation = useRef(useNavigate());
    const { search } = useLocation();
    const searchSplit = search.split('=')[1];
    const redirect = search ? searchSplit : '/';

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));
    };
    useEffect(() => {
        if (userInfo) {
            //props.history.push(redirect);
            navigation.current(redirect);
        }
    }, [props.history, redirect, userInfo]);

    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Logar</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" placeholder="Digite seu e-mail" required onChange={e => setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" placeholder="Digite sua senha" required onChange={e => setPassword(e.target.value)}></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">Logar</button>
                </div>
                <div>
                    <label />
                    <div>
                        Novo cliente? {' '}
                        <Link to="/register">Criar sua conta</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}
