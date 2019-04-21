import React, { Component } from 'react';

// import { Container } from './styles';
import './style.css'
import '../../services/Api';
import api from '../../services/Api';

export default class Main extends Component {
    
    constructor(props){

        super(props);
        this.state = {
            Establishment: '',
            Location: '',
            Owner: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        const { target } = e;
        const { value } = target;
        this.setState({[target.name] : value });
    }
    
    sendSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state.Establishment);
        console.log(this.state.Location);
        console.log(this.state.Owner);    
        const response = await api.post('/Establishment', {
            Establishment: this.state.Establishment,
            Location: this.state.Location,
            Owner: this.state.Owner
        });
        console.log(response.data);
    };

    valueOnChange = (e) => {
        this.setState({ Establishment: e.target.value })
    
    };
  
    render() {
    return (

        <div className="main-register">
            <form onSubmit={this.sendSubmit}>
                <input
                    placeholder="Nome do estabelecimento"
                    name="Establishment"
                    // value={this.state.Establishment}
                    onChange={this.handleChange}
                    required
                /> 
                <br/>
                <input
                    placeholder="Localização"
                    name="Location"
                    // value={this.state.Location}
                    onChange={this.handleChange}
                    required
                />
                <br/>
                <input
                    placeholder="Nome do Responsável"
                    value={this.state.Owner}
                    name="Owner"
                    onChange={this.handleChange}
                    required
                />
                <input type="submit" value="Cadastrar"/>
            </form>
        </div>
    

    );
  };
}


// import React, { Component } from 'react';

// class MyComponent extends React.Component {
//     constructor(props)
//     {
//         super(props);

//         this.state = {
//             cpf: '',
//             nome: '',
//             senha: ''
//         }

//         this.handleChange = this.handleChange.bind(this);
//     }

//     handleChange(e)
//     {
//         const { target } = e;
//         const { value } = target;

//         this.setState({[target.name] : value });
//     }

//     render()
//     {
//         return (
//             <div>
//                 <div className='formulario'>
//                     <form>
//                         <label htmlFor='nome'>Nome</label>
//                         <input type='text' name='nome' onChange={this.handleChange}/>

//                         <label htmlFor='cpf'>Cpf</label>
//                         <input type='text' name='cpf' />

//                         <label htmlFor='senha'>Senha</label>
//                         <input type='password' name='senha' />
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }