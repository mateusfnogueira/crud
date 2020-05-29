import React, { Componet } from 'react'
import axios from 'axios'
import Main from '../template/Main'

const headerProps = {
    icon: 'users',
    title: 'Usúarios',
    subtitle: 'Cadastro de usúarios: Incluir, Listar, Alterar, Excluir'
}

const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user:{name:'', email:''},
    list: []
}

export default class UserCrud extends Componet {

    state = {...initialState}

    clear() {
        this.setState({user: initialState.user})
    }

    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdateList(resp.data)
                this.setState({user: initialState.user, list})
                list.unshift(user)
                return list 
            })
    }

    getUpdateList(user){
        const list = this.state.filter(u => u.id !== user.id)

    }

    render() {
        return(
            <Main {...headerProps}>
                Cadastro de usuário 
            </Main>
        )
    }
}

