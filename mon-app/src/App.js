import React, { Component } from 'react';
import api from "./Api"
import './App.css';

class App extends Component{
  state= {
    films:[],
  }

  async componentDidMount(){
    const reponse = await api.get("star wars");
    // console.log(reponse.data)

    this.setState({films: reponse.data});
  }


  render(){
   const {films} = this.state;

    return(
      <div>
        <h1>Lister les films</h1>
        {console.log(films)} 
        {films.map(films  => (
          <li key={films.show.id}>
            <h2> 
              {films.show.name}
              </h2>
              <p>{films.show.url}</p>

          </li>
        ))}
      </div>
    );
  }
}
export default App;
