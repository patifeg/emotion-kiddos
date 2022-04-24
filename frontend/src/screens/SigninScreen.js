import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SigninScreen() {
    const [emai, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        //TODO: sigin action
    }

    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Logar</h1>
                </div>
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
