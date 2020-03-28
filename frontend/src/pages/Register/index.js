import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';


export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    function handleRegister(e) {
        e.preventDefault();

        console.log({
            name,
            email,
            whatsapp,
            city,
            uf
        })
    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>

                    <h1> Cadastro </h1>
                    <p> Faça o seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG. </p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                   <input 
                        placeholder="Nome da ONG"
                        value={name}
                        oncChange={e => setName(e.target.value)}
                    />
                   <input 
                        type="email" 
                        placeholder="E-mail" value={email}
                        oncChange={e => setEmail(e.target.value)}
                    />
                   <input 
                        placeholder="WhatsApp"
                        value={whatsapp}
                        oncChange={e => setWhatsapp(e.target.value)}
                    />

                   <div className="input-group">
                       <input 
                            placeholder="Cidade" 
                            value={city}
                            oncChange={e => setCity(e.target.value)}
                        />
                       <input 
                            placeholder="UF" 
                            width="80"
                            value={uf}
                            oncChange={e => setUf(e.target.value)}
                        />
                   </div> 

                   <button className="button" type="submit"> Cadastar </button>

                </form>
            </div>
        </div>

    );
}