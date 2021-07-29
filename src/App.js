import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Tabela from './Tabela';
import Formulario from './Formulario';
import Header from './Header';
import PopUp from './PopUp';
import ApiService from './ApiService';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      autores: []
    }  
  }

  removeAutor = id => {

    const { autores } = this.state;

    this.setState({
      autores: autores.filter((autor) => {
        return autor.id !== id;
      }),
    });
    ApiService.RemoveAutor(id);
    PopUp.exibeMensagem("error", "Autor removido com sucesso");

  }

  escutadorDeSubmit = autor => {
    ApiService.CriaAutor(JSON.stringify(autor))
                  .then(res => res.data)
                  .then(autor => {
                    this.setState({ autores: [...this.state.autores, autor] });
                    PopUp.exibeMensagem("success", "Autor adicionado com sucesso");
                  })
  }

  //esse metodo eh executado logo depois do render (como ele vai mexer no state, nesse caso, vai renderizar novamente)(ciclo de vida REACT)
  componentDidMount(){
    ApiService.ListaAutores()
                  .then(res => {
                      this.setState({autores: [...this.state.autores, ...res.data]})
                  })
  }

  render() {

    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <h1>Casa do código</h1>
          <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />
          <Formulario escutadorDeSubmit={this.escutadorDeSubmit} />
        </div>
      </Fragment>
    );
  }
}

export default App;
