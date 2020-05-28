import React, { Componet } from 'react'
import Main from '../template/Main'

const headerProps = {
    icon: 'users',
    title: 'Usúarios',
    subtitle: 'Cadastro de usúarios: Incluir, Listar, Alterar, Excluir'
}

export default class UserCrud extends Componet {
    render() {
        return(
            <Main {...headerProps}>
                Cadastro de usuário 
            </Main>
        )
    }
}

