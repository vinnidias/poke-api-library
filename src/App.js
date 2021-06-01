import logo from './imgs/Logo.png';
import './style.css';
import CardPreView from './components/CardPreView'
import { useEffect, useState } from 'react';
import axios from 'axios'


function App() {
  const [pokeList, setList] = useState([])
  

  useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151")
      .then(res=>{
        const list = res.data.results
        setList(list)
        console.log('console da lista',pokeList)
      })
  },[])

  return (
    <div>
      <header className="header-container">
        <img src={logo} className="logo-img" />
      </header>
      <div className="search-container">
        
      </div>
      <div className="cards-container">
        {
          pokeList.map(item => (
            <CardPreView id={item.name}/>
          ))
        }
      </div>
    </div>
  );
}

export default App;
