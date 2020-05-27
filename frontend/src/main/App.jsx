import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'

import Logo from '../components/template/Logo'
import Main from '../components/template/Main'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'


export default props =>
    <div className="app">
        <Logo />
        <Nav />
        <Main icon="home" title="Início" subtitle="Formulario em React">
        <div className="display-4">Bem Vindo</div>
        <hr/>
        <p className="mb-0">Sistema para exemplificar a consturção de um cadastro desenvolvido em react</p>
        </Main>
        <Footer />
    </div>