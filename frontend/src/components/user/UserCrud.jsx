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

    componentWillMount() {
        axios(baseUrl).then(rep => {
            this.setState({list: resp.data})
        })
    }

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
            })
        }
        
        getUpdateList(user){
            const list = this.state.filter(u => u.id !== user.id)
            if(user) list.unshift(user)
            return list
    }

    updateField(event) {
        const user = {...this.state.user}
        user[event.target.name] = event.target.value
        this.setState({user})
    }

    renderForm(){
        return(
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                            name="name"
                            value={this.state.user.name}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o nome..."/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="email" className="form-control"
                            name="email"
                            value={this.state.user.email}
                            onChange={e=>this.updateField(e)}
                            placeholder="Digite o e-mail..."/>
                        </div>
                    </div>
                </div>

                <hr/>

                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e=>this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2"
                            onClick={e=>this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    load(user) {
        this.setState({user})
    }

    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(resp =>{
            const list = this.getUpdateList(null)
            this.setState({list})
        })
    }

    render() {
        console.log(this.state.list)

        return(
            <Main {...headerProps}>
                {this.renderForm()}
            </Main>
        )
    }
}

