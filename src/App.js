import logo from './imgs/Logo.png';
import './style.css';
import CardPreView from './components/CardPreView'
import { useEffect, useState } from 'react';
import TextInput from '../src/components/TextInput'
import axios from 'axios'


function App() {
  const [pokeList, setList] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [listView, setListView] = useState(true)


  const handleChange = (e) => {
    const { value } = e.target
    setSearchValue(value)

  }

  const handleClick = () => {
    if(searchValue === '' && listView === true){
      window.alert('No Pokémon found with that name!')
    }else{
      axios.get(`https://pokeapi.co/api/v2/pokemon/${searchValue}`)
        .then(res => {
          setListView(!listView)
        })
        .catch(e =>{
          window.alert('No Pokémon found with that name!')
          setSearchValue('')
        })
      
    }
    
  }

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?offset=151&limit=302")
      .then(res => {
        const list = res.data.results
        setList(list)
      })
  }, [])

  return (
    <div>
      <header className="header-container">
        <img src={logo} className="logo-img" alt="Logo" />
      </header>
      <TextInput searchValue={searchValue} handleChange={handleChange} handleClick={handleClick} />

      <div className="cards-container">

        {
          listView ?
            pokeList.map(item => (
              <CardPreView id={item.name} key={item.name} />
            ))
            :
            <div style={{justifyContent: 'center'}}>
              <button onClick={()=> {
                setListView(true)
              }}>
                Back
              </button>
              <CardPreView id={searchValue} />
            </div>
        }
      </div>
    </div>
  );
}

export default App;
