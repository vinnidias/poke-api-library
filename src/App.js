import logo from './imgs/Logo.png';
import './style.css';
import CardPreView from './components/CardPreView'
import { useEffect, useState } from 'react';
import axios from 'axios'


function App() {
  const pokeList = ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise", "caterpie", "metapod", "butterfree", "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot", "rattata", "raticate"]

  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then(res=>{
        const list = res.data.results
        
        list.map(item=>{
          pokeList.push(item.name)
        })
        console.log(pokeList)
      })
  },[pokeList])

  return (
    <div>
      <header className="header-container">
        <img src={logo} className="logo-img" />
      </header>
      <div>

      </div>
      <div className="cards-container">
        {
          pokeList.map(item => (
            <CardPreView id={item}/>
          ))
        }
      </div>
    </div>
  );
}

export default App;
