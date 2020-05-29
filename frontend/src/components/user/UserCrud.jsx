import React, { Componet } from 'react'
import axios from 'axios'
import Main from '../template/Main'

const headerProps = {
    icon: 'users',
    title: 'Usúarios',
    subtitle: 'Cadastro de usúarios: Incluir, Listar, Alterar, Excluir'
}

const baseUrl = 'http://localhost:3001/users'

export default class UserCrud extends Componet {
    render() {
        return(
            <Main {...headerProps}>
                Cadastro de usuário 
            </Main>
        )
    }
}

